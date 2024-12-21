const express = require('express');
const { calculateTFIDF } = require('../services/tf-idfService');
const { searchSimilarLaptops, indexLaptop } = require('../services/elasticService');
const ViewHistory = require('../app/model/View_History');
const router = express.Router();
const Laptop = require('../app/model/Laptop');

router.get('/recommendations/:userId', async (req, res) => {
    try {
        // Lấy lịch sử xem laptop của người dùng
        const viewHistory = await ViewHistory.findAll({
            where: {
                userId: req.params.userId,
            },
            attributes: ['laptopId'],
            limit: 10, // Giới hạn 10 bản ghi
            order: [['createdAt', 'DESC']], // Sắp xếp theo thời gian xem mới nhất
        });

        // Lấy danh sách laptopId từ viewHistory
        const laptopIds = viewHistory.map(item => item.laptopId);

        if (laptopIds.length === 0) {
            return res.status(404).json({ message: "No view history found for this user." });
        }

        // Lấy thông tin các laptop đã xem
        const laptopsHis = await Laptop.findAll({
            where: {
                laptopId: laptopIds
            }
        });

        // Kiểm tra nếu không có laptop nào
        if (laptopsHis.length === 0) {
            return res.status(404).json({ message: "No laptops found." });
        }

        // Tạo các văn bản (documents) từ thông tin laptop (CPU, VGA, mô tả)
        const documents = laptopsHis.map(laptop => `${laptop.cpu} ${laptop.vga} ${laptop.description}`);

        // Tính toán TF-IDF cho các văn bản
        const tfidfVectors = calculateTFIDF(documents);

        // Tạo một vector trung bình cho truy vấn
        const queryVector = tfidfVectors.map(v => v.map(term => term.term).join(' ')).join(' ');

        const recommendations = await searchSimilarLaptops(queryVector);

        const laptops = recommendations.map(laptop => laptop._source || {});

        // Trả về các laptop được đề xuất
        res.json(laptops);

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'An error occurred while fetching recommendations' });
    }
});


router.post('/index-laptops', async (req, res) => {
    try {
        const laptops = await Laptop.findAll(); // Lấy tất cả laptops từ database

        // Thêm từng laptop vào Elasticsearch
        for (const laptop of laptops) {
            await indexLaptop(laptop);
        }

        res.status(200).json({ message: 'All laptops indexed successfully' });
    } catch (error) {
        console.error('Error indexing laptops:', error);
        res.status(500).json({ message: 'Failed to index laptops', error });
    }
});

router.get('/view-history/:userId', async (req, res) => {
    try {
        const viewHistory = await ViewHistory.findAll({
            where: {
                userId: req.params.userId,
            },
            attributes: ['laptopId'],
            limit: 10,
            order: [['createdAt', 'DESC']],
        });


        // Lấy danh sách laptopId từ viewHistory
        const laptopIds = viewHistory.map(item => item.laptopId);

        // Lặp qua danh sách laptopId để lấy thông tin laptop
        const laptops = await Laptop.findAll({
            where: {
                laptopId: laptopIds
            }
        });

        res.status(200).json(laptops);
    } catch (error) {
        console.error('Error indexing laptops:', error);
        res.status(500).json({ message: 'Failed to index laptops', error });
    }
});

module.exports = router;
