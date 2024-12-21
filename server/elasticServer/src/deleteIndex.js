const { Client } = require('@elastic/elasticsearch');

const client = new Client({
    node: 'http://localhost:9200',
    auth: {
        username: 'elastic',    // Nếu sử dụng xác thực
        password: 'jdPProJm+Tb5FcJ6eamB'     // Nếu sử dụng xác thực
    }
});

const deleteIndex = async (indexName) => {
    try {
        const response = await client.indices.delete({
            index: indexName, // Tên index cần xóa
        });
        console.log(`Index "${indexName}" đã được xóa thành công.`);
    } catch (error) {
        console.error(`Lỗi khi xóa index "${indexName}":`, error.meta.body.error);
    }
};

// Ví dụ: Xóa index 'laptops'
deleteIndex('laptops');
