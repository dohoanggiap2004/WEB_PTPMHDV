-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Nov 13, 2024 at 10:00 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `commercial`
--
DROP DATABASE IF EXISTS commercial; 
CREATE DATABASE commercial;          
USE commercial;  
-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `brandId` bigint(20) NOT NULL,
  `brandName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`brandId`, `brandName`) VALUES
(1, 'Asus'),
(2, 'Acer'),
(3, 'MacBook'),
(4, 'Lenovo'),
(5, 'HP'),
(6, 'Dell'),
(7, 'MSI'),
(8, 'Gigabyte');

-- --------------------------------------------------------

--
-- Table structure for table `discounts`
--

CREATE TABLE `discounts` (
  `discountId` bigint(20) NOT NULL,
  `discountPercent` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `discounts`
--

INSERT INTO `discounts` (`discountId`, `discountPercent`) VALUES
(1, 0.4);

-- --------------------------------------------------------

--
-- Table structure for table `installment_plans`
--

CREATE TABLE `installment_plans` (
  `installmentId` bigint(20) NOT NULL,
  `company` varchar(255) NOT NULL,
  `downPayment` int(11) DEFAULT NULL,
  `flatInterestRate` varchar(255) DEFAULT NULL,
  `installmentPrice` int(11) DEFAULT NULL,
  `monthlyInstallment` int(11) DEFAULT NULL,
  `requiredDocuments` varchar(255) NOT NULL,
  `term` varchar(255) DEFAULT NULL,
  `totalPayment` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `installment_plans`
--

INSERT INTO `installment_plans` (`installmentId`, `company`, `downPayment`, `flatInterestRate`, `installmentPrice`, `monthlyInstallment`, `requiredDocuments`, `term`, `totalPayment`) VALUES
(1, 'Saigon Finance', 500000, '0.05', 2000000, 150000, 'CMND, Hợp đồng lao động, Giấy xác nhận lương', '12', 1800000),
(2, 'Vietnam Credit', 300000, '0.07', 1500000, 70000, 'CMND, Giấy chứng minh thu nhập, Sao kê ngân hàng', '24', 1800000),
(3, 'Hà Nội Credit', 400000, '0.05', 2000000, 80000, 'CMND, Giấy xác nhận cư trú, Giấy chứng minh thu nhập', '24', 2400000),
(4, 'TPBank', 3000000, '4%', 15000000, 400000, 'CMND, Sổ hộ khẩu, Giấy xác nhận thu nhập', '36 months', 14400000),
(5, 'Hao', 30200000, '90%', 152000000, 400000, 'CMND, Sổ hộ khẩu, Giấy xác nhận thu nhập', '1 months', 111400000);

-- --------------------------------------------------------

--
-- Table structure for table `laptops`
--

CREATE TABLE `laptops` (
  `laptopId` bigint(20) NOT NULL,
  `battery` varchar(255) DEFAULT NULL,
  `createdAt` datetime(6) DEFAULT current_timestamp(6),
  `description` varchar(255) DEFAULT NULL,
  `gpu` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `os` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `processor` varchar(255) DEFAULT NULL,
  `ram` varchar(255) DEFAULT NULL,
  `screenSize` double DEFAULT NULL,
  `stockQuantity` int(11) DEFAULT NULL,
  `storage` varchar(255) DEFAULT NULL,
  `weight` double DEFAULT NULL,
  `brandId` bigint(20) DEFAULT NULL,
  `discountId` bigint(20) DEFAULT NULL,
  `orderId` bigint(20) DEFAULT NULL,
  `updatedAt` datetime(6) DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `laptops`
--

INSERT INTO `laptops` (`laptopId`, `battery`, `createdAt`, `description`, `gpu`, `image`, `model`, `os`, `price`, `processor`, `ram`, `screenSize`, `stockQuantity`, `storage`, `weight`, `brandId`, `discountId`, `orderId`, `updatedAt`) VALUES
(16, '90Wh', '2024-11-07 19:18:06.182587', 'ASUS ROG Zephyrus G16', 'NVIDIA GeForce RTX 4070', 'https://ttcenter.com.vn/uploads/product/mjbshlw6-1348-asus-rog-zephyrus-g16-2024-gu605mi-qr116w-intel-core-ultra-9-185h-16gb-1tb-geforce-rtx-4070-8gb-16-2-5k-oled-240hz-new.jpg', 'ROG Zephyrus G16', 'Windows 11', 79990000, 'Intel Core Ultra 9 185H', '16GB', 16, 10, '1TB SSD', 1.85, 1, NULL, NULL, '2024-11-07 19:18:06.182587'),
(17, '70Wh', '2024-11-07 19:18:06.182587', 'ASUS Zenbook Duo', 'Intel Arc (8-Cores)', 'https://bizweb.dktcdn.net/100/512/769/files/1-bfbd4885-fbe7-4883-ab35-87b893c117bf.jpg?v=1721897843378', 'Zenbook Duo', 'Windows 11', 42300000, 'Intel Core Ultra 7 155H', '16GB', 14, 15, '1TB SSD', 1.6, 1, NULL, NULL, '2024-11-07 19:18:06.182587'),
(18, '45Wh', '2024-11-07 19:18:06.182587', 'ASUS Vivobook', 'AMD Radeon Graphics', 'https://bizweb.dktcdn.net/thumb/large/100/372/934/products/asus-vivobook-15-oled-a1505-man-hinh-bae0b660-571f-4828-a9b5-d250b5fff9ea.jpg?v=1723902536293', 'Vivobook 15', 'Windows 10', 15490000, 'AMD Ryzen 5', '8GB', 15.6, 20, '256GB SSD', 1.7, 1, NULL, NULL, '2024-11-07 19:18:06.182587'),
(19, '80Wh', '2024-11-07 19:18:06.182587', 'ASUS TUF Dash F15', 'NVIDIA GeForce RTX 3060', 'https://dlcdnwebimgs.asus.com/gain/89c3483e-d243-4371-89d2-4ea4b498dc08/', 'TUF Dash F15', 'Windows 11', 32990000, 'Intel Core i7', '16GB', 17, 8, '512GB SSD', 2.1, 1, NULL, NULL, '2024-11-07 19:18:06.182587'),
(20, '56Wh', '2024-11-07 19:18:06.182587', 'ASUS ZenBook Flip', 'Intel Iris Xe', 'https://laptopre.vn/upload/picture/picture-01690855648.jpg', 'ZenBook Flip 13', 'Windows 11', 30490000, 'Intel Core i5', '8GB', 13.3, 10, '512GB SSD', 1.2, 1, NULL, NULL, '2024-11-07 19:18:06.182587'),
(21, '50Wh', '2024-11-07 19:18:06.182587', 'Acer Swift Go 14', 'Intel integrated Arc GPU', 'https://no1computer.vn/upload_images/images/products/Laptop/Acer/Acer%20Swift%20go%2014%202023/acer-swift-go-14-2023-3.jpg', 'Swift Go 14', 'Windows 11', 20990000, 'Intel Core Ultra 7 155H', '16GB', 14, 25, '1TB SSD', 1.5, 2, NULL, NULL, '2024-11-07 19:18:06.182587'),
(22, '48Wh', '2024-11-07 19:18:06.182587', 'Acer Aspire 5', 'Intel UHD Graphics', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/329/122/products/laptop-acer-aspire-5-a515-58p-71ej-02.jpg?v=1719485142017', 'Aspire 5', 'Windows 10', 18490000, 'Intel Core i5', '8GB', 15.6, 30, '256GB SSD', 1.8, 2, NULL, NULL, '2024-11-07 19:18:06.182587'),
(23, '60Wh', '2024-11-07 19:18:06.182587', 'Acer Predator Helios 300', 'NVIDIA GeForce GTX 1660 Ti', 'https://product.hstatic.net/200000722513/product/76kg_1433e407838944df88bd906b57729c0a_1024x1024.png', 'Predator Helios 300', 'Windows 11', 35990000, 'Intel Core i7', '16GB', 14, 18, '512GB SSD', 1.3, 2, NULL, NULL, '2024-11-07 19:18:06.182587'),
(24, '52Wh', '2024-11-07 19:18:06.182587', 'Acer Nitro 5', 'NVIDIA GeForce GTX 1650', 'https://techspace.vn/wp-content/uploads/2022/09/Nitro5_AN515-45_Bl_Bk_01.png-wpp-1.jpg', 'Nitro 5', 'Windows 10', 23990000, 'AMD Ryzen 5', '8GB', 15, 22, '256GB SSD', 1.4, 2, NULL, NULL, '2024-11-07 19:18:06.182587'),
(25, '56Wh', '2024-11-07 19:18:06.182587', 'Acer Spin 5', 'Intel Iris Xe', 'https://lh3.googleusercontent.com/rtONuX0TzI5oYLMgyx3ssMB2B1aOobdtPLt8M39sCx0Lqifd_B0yU7IwY-lmhNzC9-_TFQ9-7-oYZ1c1Y8FYJ0OG2QoH8G3hmw=rw', 'Spin 5', 'Windows 11', 19800000, 'Intel Core i7', '16GB', 13.5, 12, '512GB SSD', 1.2, 2, NULL, NULL, '2024-11-07 19:18:06.182587'),
(26, '52.6Wh', '2024-11-07 19:18:06.182587', 'MacBook Air M3', 'Apple M3 GPU', 'https://cdn.hoanghamobile.com/i/content/Uploads/2024/09/09/macbook-air-13-in-m3-chip-space-gray-pure-front-screen-usen.jpg', 'MacBook Air M3', 'macOS', 26490000, 'Apple M3', '16GB', 13, 20, '1TB SSD', 1.2, 3, NULL, NULL, '2024-11-07 19:18:06.182587'),
(27, '58.2Wh', '2024-11-07 19:18:06.182587', 'MacBook Pro M3', 'Apple M3 Pro GPU', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200', 'MacBook Pro M3', 'macOS', 46490000, 'Apple M3 Pro', '16GB', 14, 5, '1TB SSD', 1.4, 3, NULL, NULL, '2024-11-07 19:18:06.182587'),
(28, '50Wh', '2024-11-07 19:18:06.182587', 'MacBook Air M2', 'Apple M2 GPU', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034', 'MacBook Air M2', 'macOS', 23000000, 'Apple M2', '8GB', 13, 15, '256GB SSD', 1.3, 3, NULL, NULL, '2024-11-07 19:18:06.182587'),
(29, '70Wh', '2024-11-07 19:18:06.182587', 'MacBook Pro 16', 'Apple M1 Pro', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916322507', 'MacBook Pro 16\"', 'macOS', 42000000, 'Apple M1 Pro', '16GB', 16, 8, '512GB SSD', 2, 3, NULL, NULL, '2024-11-07 19:18:06.182587'),
(30, '54Wh', '2024-11-07 19:18:06.182587', 'MacBook Air 15', 'Apple M2 GPU', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684518479433', 'MacBook Air 15\"', 'macOS', 31590000, 'Apple M2', '16GB', 15, 12, '512GB SSD', 1.5, 3, NULL, NULL, '2024-11-07 19:18:06.182587'),
(31, '90Wh', '2024-11-07 19:18:38.514054', 'ASUS ROG Zephyrus G16', 'NVIDIA GeForce RTX 4070', 'https://ttcenter.com.vn/uploads/product/mjbshlw6-1348-asus-rog-zephyrus-g16-2024-gu605mi-qr116w-intel-core-ultra-9-185h-16gb-1tb-geforce-rtx-4070-8gb-16-2-5k-oled-240hz-new.jpg', 'ROG Zephyrus G16', 'Windows 11', 79990000, 'Intel Core Ultra 9 185H', '16GB', 16, 10, '1TB SSD', 1.85, 1, NULL, NULL, '2024-11-07 19:18:38.514054'),
(32, '70Wh', '2024-11-07 19:18:38.514054', 'ASUS Zenbook Duo', 'Intel Arc (8-Cores)', 'https://bizweb.dktcdn.net/100/512/769/files/1-bfbd4885-fbe7-4883-ab35-87b893c117bf.jpg?v=1721897843378', 'Zenbook Duo', 'Windows 11', 42300000, 'Intel Core Ultra 7 155H', '16GB', 14, 15, '1TB SSD', 1.6, 1, NULL, NULL, '2024-11-07 19:18:38.514054'),
(33, '45Wh', '2024-11-07 19:18:38.514054', 'ASUS Vivobook', 'AMD Radeon Graphics', 'https://bizweb.dktcdn.net/thumb/large/100/372/934/products/asus-vivobook-15-oled-a1505-man-hinh-bae0b660-571f-4828-a9b5-d250b5fff9ea.jpg?v=1723902536293', 'Vivobook 15', 'Windows 10', 15490000, 'AMD Ryzen 5', '8GB', 15.6, 20, '256GB SSD', 1.7, 1, NULL, NULL, '2024-11-07 19:18:38.514054'),
(34, '80Wh', '2024-11-07 19:18:38.514054', 'ASUS TUF Dash F15', 'NVIDIA GeForce RTX 3060', 'https://dlcdnwebimgs.asus.com/gain/89c3483e-d243-4371-89d2-4ea4b498dc08/', 'TUF Dash F15', 'Windows 11', 32990000, 'Intel Core i7', '16GB', 17, 8, '512GB SSD', 2.1, 1, NULL, NULL, '2024-11-07 19:18:38.514054'),
(35, '56Wh', '2024-11-07 19:18:38.514054', 'ASUS ZenBook Flip', 'Intel Iris Xe', 'https://laptopre.vn/upload/picture/picture-01690855648.jpg', 'ZenBook Flip 13', 'Windows 11', 30490000, 'Intel Core i5', '8GB', 13.3, 10, '512GB SSD', 1.2, 1, NULL, NULL, '2024-11-07 19:18:38.514054'),
(36, '50Wh', '2024-11-07 19:18:38.514054', 'Acer Swift Go 14', 'Intel integrated Arc GPU', 'https://no1computer.vn/upload_images/images/products/Laptop/Acer/Acer%20Swift%20go%2014%202023/acer-swift-go-14-2023-3.jpg', 'Swift Go 14', 'Windows 11', 20990000, 'Intel Core Ultra 7 155H', '16GB', 14, 25, '1TB SSD', 1.5, 2, NULL, NULL, '2024-11-07 19:18:38.514054'),
(37, '48Wh', '2024-11-07 19:18:38.514054', 'Acer Aspire 5', 'Intel UHD Graphics', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/329/122/products/laptop-acer-aspire-5-a515-58p-71ej-02.jpg?v=1719485142017', 'Aspire 5', 'Windows 10', 18490000, 'Intel Core i5', '8GB', 15.6, 30, '256GB SSD', 1.8, 2, NULL, NULL, '2024-11-07 19:18:38.514054'),
(38, '60Wh', '2024-11-07 19:18:38.514054', 'Acer Predator Helios 300', 'NVIDIA GeForce GTX 1660 Ti', 'https://product.hstatic.net/200000722513/product/76kg_1433e407838944df88bd906b57729c0a_1024x1024.png', 'Predator Helios 300', 'Windows 11', 35990000, 'Intel Core i7', '16GB', 14, 18, '512GB SSD', 1.3, 2, NULL, NULL, '2024-11-07 19:18:38.514054'),
(39, '52Wh', '2024-11-07 19:18:38.514054', 'Acer Nitro 5', 'NVIDIA GeForce GTX 1650', 'https://techspace.vn/wp-content/uploads/2022/09/Nitro5_AN515-45_Bl_Bk_01.png-wpp-1.jpg', 'Nitro 5', 'Windows 10', 23990000, 'AMD Ryzen 5', '8GB', 15, 22, '256GB SSD', 1.4, 2, NULL, NULL, '2024-11-07 19:18:38.514054'),
(40, '56Wh', '2024-11-07 19:18:38.514054', 'Acer Spin 5', 'Intel Iris Xe', 'https://lh3.googleusercontent.com/rtONuX0TzI5oYLMgyx3ssMB2B1aOobdtPLt8M39sCx0Lqifd_B0yU7IwY-lmhNzC9-_TFQ9-7-oYZ1c1Y8FYJ0OG2QoH8G3hmw=rw', 'Spin 5', 'Windows 11', 19800000, 'Intel Core i7', '16GB', 13.5, 12, '512GB SSD', 1.2, 2, NULL, NULL, '2024-11-07 19:18:38.514054'),
(41, '52.6Wh', '2024-11-07 19:18:38.514054', 'MacBook Air M3', 'Apple M3 GPU', 'https://cdn.hoanghamobile.com/i/content/Uploads/2024/09/09/macbook-air-13-in-m3-chip-space-gray-pure-front-screen-usen.jpg', 'MacBook Air M3', 'macOS', 26490000, 'Apple M3', '16GB', 13, 20, '1TB SSD', 1.2, 3, NULL, NULL, '2024-11-07 19:18:38.514054'),
(42, '58.2Wh', '2024-11-07 19:18:38.514054', 'MacBook Pro M3', 'Apple M3 Pro GPU', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200', 'MacBook Pro M3', 'macOS', 46490000, 'Apple M3 Pro', '16GB', 14, 5, '1TB SSD', 1.4, 3, NULL, NULL, '2024-11-07 19:18:38.514054'),
(43, '50Wh', '2024-11-07 19:18:38.514054', 'MacBook Air M2', 'Apple M2 GPU', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034', 'MacBook Air M2', 'macOS', 23000000, 'Apple M2', '8GB', 13, 15, '256GB SSD', 1.3, 3, NULL, NULL, '2024-11-07 19:18:38.514054'),
(44, '70Wh', '2024-11-07 19:18:38.514054', 'MacBook Pro 16', 'Apple M1 Pro', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916322507', 'MacBook Pro 16\"', 'macOS', 42000000, 'Apple M1 Pro', '16GB', 16, 8, '512GB SSD', 2, 3, NULL, NULL, '2024-11-07 19:18:38.514054'),
(45, '54Wh', '2024-11-07 19:18:38.514054', 'MacBook Air 15', 'Apple M2 GPU', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684518479433', 'MacBook Air 15\"', 'macOS', 31590000, 'Apple M2', '16GB', 15, 12, '512GB SSD', 1.5, 3, NULL, NULL, '2024-11-07 19:18:38.514054'),
(71, '75Wh', '2024-11-07 19:27:43.506523', 'Lenovo ThinkPad X1 Carbon', 'Intel Iris Xe', 'https://laptopre.vn/upload/picture/picture-01713168796.jpg', 'ThinkPad X1 Carbon', 'Windows 11', 53500000, 'Intel Core i7', '16GB', 15, 12, '512GB SSD', 1.7, 4, NULL, NULL, '2024-11-07 19:27:43.506523'),
(72, '45Wh', '2024-11-07 19:27:43.506523', 'Lenovo IdeaPad 3', 'Intel UHD Graphics', 'https://no1computer.vn/images/products/2021/11/26/large/2181_71xt_h64_ks__ac_sl1400__1637912819.jpg', 'IdeaPad 3', 'Windows 10', 15990000, 'Intel Core i5', '8GB', 14, 20, '256GB SSD', 1.5, 4, NULL, NULL, '2024-11-07 19:27:43.506523'),
(73, '60Wh', '2024-11-07 19:27:43.506523', 'Lenovo Yoga 7i', 'Intel Iris Xe', 'https://hungphatlaptop.com/wp-content/uploads/2024/09/Lenovo-Yoga-7i-2-in-1-16-inch-2024-Features-05.jpeg.webp', 'Yoga 7i', 'Windows 11', 19500000, 'Intel Core i5', '12GB', 13, 18, '512GB SSD', 1.2, 4, NULL, NULL, '2024-11-07 19:27:43.506523'),
(74, '52Wh', '2024-11-07 19:27:43.506523', 'Lenovo Flex 5', 'AMD Radeon', 'https://cdn.ankhang.vn/media/product/25821_lenovo_ideapad_flex_5_14iau7_82r700jlvn.jpg', 'Flex 5', 'Windows 10', 14590000, 'AMD Ryzen 5', '8GB', 15.6, 22, '512GB SSD', 1.9, 4, NULL, NULL, '2024-11-07 19:27:43.506523'),
(75, '55Wh', '2024-11-07 19:27:43.506523', 'Lenovo Slim 7', 'NVIDIA GeForce MX450', 'https://cdn2.cellphones.com.vn/x/media/catalog/product/l/a/laptop-lenovo-yoga-slim-7-i7_1_.jpg', 'Slim 7', 'Windows 11', 29990000, 'AMD Ryzen 7', '16GB', 14, 16, '512GB SSD', 1.3, 4, NULL, NULL, '2024-11-07 19:27:43.506523'),
(76, '83Wh', '2024-11-07 19:30:04.798877', 'HP Envy 17', 'NVIDIA GeForce RTX 3060', 'https://lapvip.vn/upload/products/thumb_800x0/hp-envy-17-2022-1691379384.jpg', 'Envy 17', 'Windows 11', 26500000, 'Intel Core i7', '16GB', 17, 8, '1TB SSD', 2.4, 5, NULL, NULL, '2024-11-07 19:30:04.798877'),
(77, '48Wh', '2024-11-07 19:30:04.798877', 'HP Pavilion x360', 'Intel Iris Xe', 'https://bizweb.dktcdn.net/thumb/grande/100/410/941/products/46270-laptop-hp-pavilion-x360-14-ek1046tu-80r24pa-3.jpg?v=1698395394430', 'Pavilion x360', 'Windows 11', 23490000, 'Intel Core i5', '8GB', 14, 14, '512GB SSD', 1.2, 5, NULL, NULL, '2024-11-07 19:30:04.798877'),
(78, '52Wh', '2024-11-07 19:30:04.798877', 'HP Spectre x360', 'Intel Iris Xe', 'https://hungphatlaptop.com/wp-content/uploads/2022/07/HP-Spectre-X360-16-2-in-1-2022-H1.jpg.webp', 'Spectre x360', 'Windows 11', 31900000, 'Intel Core i7', '16GB', 13.3, 10, '512GB SSD', 1.3, 5, NULL, NULL, '2024-11-07 19:30:04.798877'),
(79, '72Wh', '2024-11-07 19:30:04.798877', 'HP Omen 16', 'NVIDIA GeForce GTX 1660 Ti', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/408/235/products/c7cbe0ee-457d-4953-9527-5e44c6f95868.jpg?v=1679476887037', 'Omen 16', 'Windows 11', 41900000, 'Intel Core i5', '8GB', 16, 9, '1TB HDD', 1.8, 5, NULL, NULL, '2024-11-07 19:30:04.798877'),
(80, '86Wh', '2024-11-07 19:30:48.403944', 'Dell XPS 16', 'NVIDIA GeForce RTX 3050', 'https://product.hstatic.net/1000374492/product/3_a609ddae09094c84b09accefdf2998d5_master.png', 'XPS 16', 'Windows 11', 48990000, 'Intel Core i7-13700H', '16GB', 16, 10, '1TB SSD', 1.8, 6, NULL, NULL, '2024-11-07 19:30:48.403944'),
(81, '97Wh', '2024-11-07 19:30:48.403944', 'Dell Alienware M17', 'NVIDIA GeForce RTX 4070', 'https://www.laptopvip.vn/images/ab__webp/detailed/22/awm17-r3-cnb-05000ff090-gy-tobii-www.laptopvip.vn-1620792655.webp', 'Alienware M17', 'Windows 11', 33900000, 'Intel Core i9-13900HX', '32GB', 17, 6, '2TB SSD', 2.1, 6, NULL, NULL, '2024-11-07 19:30:48.403944'),
(82, '60Wh', '2024-11-07 19:30:48.403944', 'Dell Inspiron 15 Plus', 'Intel Iris Xe', 'https://laptop365.vn/pic/product/images/Dell-Inspiron-14-Plus-7430-laptop365.jpg', 'Inspiron 15 Plus', 'Windows 11', 18600000, 'Intel Core i7-1260P', '16GB', 15.6, 12, '512GB SSD', 1.9, 6, NULL, NULL, '2024-11-07 19:30:48.403944'),
(83, '52Wh', '2024-11-07 19:30:48.403944', 'Dell Latitude 9430', 'Intel Iris Xe', 'https://lapvip.vn/upload/products/original/dell-latitude-9430-gen-12th-1653388737.jpg', 'Latitude 9430', 'Windows 11', 34990000, 'Intel Core i5-1245U', '16GB', 13.4, 8, '512GB SSD', 1.27, 6, NULL, NULL, '2024-11-07 19:30:48.403944'),
(84, '42Wh', '2024-11-07 19:30:48.403944', 'Dell Vostro 3400', 'Intel UHD Graphics', 'https://www.tncstore.vn/media/product/6715-laptop-gaming-dell-vostro-3400-yx51w6-1.jpg', 'Vostro 3400', 'Windows 10', 16590000, 'Intel Core i5-1135G7', '8GB', 14, 20, '256GB SSD', 1.55, 6, NULL, NULL, '2024-11-07 19:30:48.403944'),
(85, '99.9Wh', '2024-11-07 19:31:39.608932', 'MSI Titan 18HX', 'NVIDIA GeForce RTX 4090', 'https://bizweb.dktcdn.net/thumb/large/100/386/607/products/msi-titan-18-hx-man-hinh.jpg?v=1723993732720', 'Titan 18HX', 'Windows 11', 129900000, 'Intel Core i9-13900HX', '32GB', 15.6, 10, '2TB SSD', 2.3, 7, NULL, NULL, '2024-11-07 19:31:39.608932'),
(86, '80Wh', '2024-11-07 19:31:39.608932', 'MSI Katana GF66', 'NVIDIA GeForce RTX 3060', 'https://product.hstatic.net/1000233206/product/msi-katana-gf66-12uck-815vn-i5-12450h_bc4ab6135d0a4ee4aca3d0492d7d0b9b.png', 'Katana GF66', 'Windows 11', 29290000, 'Intel Core i7-12650H', '16GB', 17, 5, '1TB SSD', 2.5, 7, NULL, NULL, '2024-11-07 19:31:39.608932'),
(87, '53Wh', '2024-11-07 19:31:39.608932', 'MSI Modern 14', 'Intel Iris Xe', 'https://bizweb.dktcdn.net/thumb/large/100/386/607/products/msi-modern-14-man-hinh-0cda1889-ee23-4f52-adc5-85a497118b45.jpg?v=1721150532530', 'Modern 14', 'Windows 10', 15290000, 'Intel Core i5-1135G7', '8GB', 15.6, 15, '512GB SSD', 2.2, 7, NULL, NULL, '2024-11-07 19:31:39.608932'),
(88, '100Wh', '2024-11-07 19:31:39.608932', 'MSI Stealth 16', 'NVIDIA GeForce RTX 4080', 'https://tanphat.com.vn/media/product/7225_46015_1.jpg', 'Stealth 16', 'Windows 11', 74500000, 'Intel Core i9-12900H', '32GB', 16, 6, '1TB SSD', 2.3, 7, NULL, NULL, '2024-11-07 19:31:39.608932'),
(89, '72Wh', '2024-11-07 19:31:39.608932', 'MSI Prestige 14 Evo', 'Intel Iris Xe', 'https://cdn.viettablet.com/images/detailed/56/laptop-msi-prestige-14-evo-089vn_3_.jpg', 'Prestige 14 Evo', 'Windows 11', 24490000, 'Intel Core i7-1260P', '16GB', 14, 12, '512GB SSD', 1.8, 7, NULL, NULL, '2024-11-07 19:31:39.608932'),
(90, '54Wh', '2024-11-07 19:31:39.608932', 'Gigabyte Aero 14 OLED', 'NVIDIA GeForce RTX 4050', 'https://laptoppro.vn/wp-content/uploads/2024/07/aero-oled-14-bmf-2023-laptoppro.jpg', 'Aero 14', 'Windows 11', 32990000, 'Intel Core i7-13800H', '16GB', 14, 18, '512GB SSD', 1.25, 8, NULL, NULL, '2024-11-07 19:31:39.608932'),
(91, '78Wh', '2024-11-07 19:31:39.608932', 'Gigabyte G5', 'NVIDIA GeForce RTX 4060', 'https://product.hstatic.net/200000553329/product/laptop-gygabyte-aorus-5-se4-73vn213sh-1_6df54e73c02540bd811f182fa9dde55e.jpg', 'G5', 'Windows 11', 18500000, 'Intel Core i7-13700H', '16GB', 15.6, 10, '1TB SSD', 2, 8, NULL, NULL, '2024-11-07 19:31:39.608932'),
(92, '99Wh', '2024-11-07 19:31:39.608932', 'Gigabyte AORUS 17', 'NVIDIA GeForce RTX 4090', 'https://static.tandoanh.vn/wp-content/uploads/2023/11/Gigabyte-AORUS-17-Intel-12th-Gen-H1.jpg.webp', 'AORUS 17', 'Windows 11', 35990000, 'Intel Core i9-13900HX', '32GB', 17, 8, '2TB SSD', 2.5, 8, NULL, NULL, '2024-11-07 19:31:39.608932'),
(93, '57Wh', '2024-11-07 19:31:39.608932', 'Gigabyte U4', 'Intel Iris Xe', 'https://product.hstatic.net/200000304081/product/1000_63d3dbd02afb4b42b6e81410c48189c8_large_396b810f769f4534891f79f8ed0e62b9_large.png', 'U4', 'Windows 10', 16290000, 'Intel Core i5-1135G7', '8GB', 15.6, 14, '512GB SSD', 2.2, 8, NULL, NULL, '2024-11-07 19:31:39.608932'),
(94, '60Wh', '2024-11-07 19:31:39.608932', 'Gigabyte Aero 16', 'NVIDIA GeForce RTX 3060', 'https://product.hstatic.net/1000233206/product/gigabyte-aero-16-xe5-73vn938ah-i7-12700h_79752fe99fec47c29314f3bf7a6092fd.png', 'Aero 16', 'Windows 11', 30890000, 'Intel Core i7-12700H', '16GB', 16, 12, '1TB SSD', 1.9, 8, NULL, NULL, '2024-11-07 19:31:39.608932'),
(95, '8 giờ', '2024-11-07 19:36:34.311870', 'Lenovo IdeaPad 3, máy tính văn phòng với hiệu suất ổn định.', 'Intel UHD Graphics', 'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2023_8_18_638279529773581655_lenovo-ideapad-3-15iau7-xam-dd.jpg', 'IdeaPad 3', 'Windows 11', 15000000, 'Intel i5', '8', 15.6, 20, '512GB SSD', 1.8, 4, NULL, NULL, '2024-11-07 19:36:34.311870'),
(96, '10 giờ', '2024-11-07 19:36:34.311870', 'Lenovo ThinkPad X1 Carbon, nhẹ nhàng và bền bỉ cho doanh nhân.', 'Intel Iris Xe', 'https://cdn.tgdd.vn/Products/Images/44/313333/lenovo-ideapad-slim-3-15iah8-i5-83er00evn-thumb-600x600.jpg', 'ThinkPad X1 Carbon', 'Windows 11', 18000000, 'Intel i7', '16', 14, 15, '1TB SSD', 1.4, 4, NULL, NULL, '2024-11-07 19:36:34.311870'),
(97, '9 giờ', '2024-11-07 19:36:34.311870', 'Lenovo Legion 5, laptop gaming với hiệu năng cao.', 'NVIDIA GTX 1650', 'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2024_2_21_638441314994873341_lenovo-gaming-legion-5-16irx9-i7-14650hx-dd.jpg', 'Legion 5', 'Windows 11', 20000000, 'AMD Ryzen 5', '16', 15.6, 10, '512GB SSD', 2, 4, NULL, NULL, '2024-11-07 19:36:34.311870'),
(98, '8 giờ', '2024-11-07 19:36:34.311870', 'Lenovo Yoga 7i, máy tính 2 trong 1 đa năng.', 'Intel Iris Xe', 'https://muabanlaptopcuhcm.com/wp-content/uploads/2022/01/Lenovo-Yoga-Slim-7-14-inch-05.jpg', 'Yoga 7i', 'Windows 11', 22000000, 'Intel i7', '16', 15.6, 8, '1TB SSD', 2.2, 4, NULL, NULL, '2024-11-07 19:36:34.311870'),
(99, '10 giờ', '2024-11-07 19:36:34.311870', 'Lenovo IdeaPad Slim 5, thiết kế mỏng nhẹ, phù hợp cho học sinh, sinh viên.', 'Intel Iris Xe', 'https://laptopphuocdat.com/wp-content/uploads/2021/01/yoga-7i-15.jpg', 'IdeaPad Slim 5', 'Windows 11', 17000000, 'Intel i5', '8', 15.6, 12, '256GB SSD', 1.5, 4, NULL, NULL, '2024-11-07 19:36:34.311870'),
(100, '9 giờ', '2024-11-07 19:36:34.311870', 'Lenovo ThinkBook 14, máy tính doanh nhân với bảo mật cao.', 'Intel Iris Xe', 'https://laptop365.vn/pic/product/thinkbook_14-_2023_laptop365-3_638474904705767576.png', 'ThinkBook 14', 'Windows 11', 19000000, 'Intel i5', '16', 14, 10, '512GB SSD', 1.6, 4, NULL, NULL, '2024-11-07 19:36:34.311870'),
(101, '8 giờ', '2024-11-07 19:36:34.311870', 'Lenovo Legion 5 Pro, laptop gaming hiệu năng mạnh mẽ.', 'NVIDIA RTX 3060', 'https://thegioiso365.vn/wp-content/uploads/2023/04/Legion-5-Pro-Y9000P-1.png', 'Legion 5 Pro', 'Windows 11', 21000000, 'AMD Ryzen 7', '16', 15.6, 5, '1TB SSD', 2.5, 4, NULL, NULL, '2024-11-07 19:36:34.311870'),
(102, '10 giờ', '2024-11-07 19:36:34.311870', 'Lenovo ThinkPad T14s, cấu hình cao cho công việc chuyên nghiệp.', 'Intel Iris Xe', 'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2023_7_25_638258928535832111_lenovo-thinkpad-e16-gen-1-den-dd.jpg', 'ThinkPad T14s', 'Windows 11', 24000000, 'Intel i7', '16', 16, 4, '1TB SSD', 2.2, 4, NULL, NULL, '2024-11-07 19:36:34.311870'),
(103, '8 giờ', '2024-11-07 19:36:34.311870', 'Lenovo IdeaPad Gaming 3, laptop gaming giá tốt.', 'NVIDIA GTX 1650', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTbM7GEbOTEbqHYMB03_1L_Wv4Ei1N7yVyMQ&s', 'IdeaPad Gaming 3', 'Windows 11', 16000000, 'Intel i5', '8', 15.6, 15, '512GB SSD', 2, 4, NULL, NULL, '2024-11-07 19:36:34.311870'),
(104, '9 giờ', '2024-11-07 19:36:34.311870', 'Lenovo Legion 7i, hiệu năng cực cao cho game thủ.', 'NVIDIA RTX 3070', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs9zrUdN1Ytv3FhnKKM0n_2DVQsPe1wdgj6Q&s', 'Legion 7i', 'Windows 11', 23000000, 'Intel i7', '32', 15.6, 6, '1TB SSD', 1.9, 4, NULL, NULL, '2024-11-07 19:36:34.311870'),
(105, '10 giờ', '2024-11-07 19:36:34.311870', 'Lenovo ThinkPad E14, máy tính doanh nhân với giá hợp lý.', 'Intel UHD Graphics', 'https://www.tnc.com.vn/uploads/product/sp2024/laptop-lenovo-thinkpad-l14-gen-5-u7-21l1003wva.jpg', 'ThinkPad E14', 'Windows 11', 15000000, 'Intel i5', '8', 14, 10, '256GB SSD', 1.5, 4, NULL, NULL, '2024-11-07 19:36:34.311870'),
(106, '9 giờ', '2024-11-07 19:36:34.311870', 'Lenovo Yoga Slim 7, thiết kế đẹp và hiệu năng tốt.', 'NVIDIA MX450', 'https://p3-ofp.static.pub/ShareResource/ww/landing-pages/yoga-brand-page/img/lenovo-yoga-brand-discover-your-yoga.jpg', 'Yoga Slim 7', 'Windows 11', 18000000, 'AMD Ryzen 5', '16', 15.6, 8, '512GB SSD', 1.8, 4, NULL, NULL, '2024-11-07 19:36:34.311870'),
(107, '10 giờ', '2024-11-07 19:36:34.311870', 'Lenovo ThinkBook 15, máy tính với thiết kế hiện đại.', 'Intel Iris Xe', 'https://bizweb.dktcdn.net/thumb/large/100/362/971/products/screenshot-2024-03-31-193009.png?v=1711888424000', 'ThinkBook 15', 'Windows 11', 20000000, 'Intel i7', '16', 14, 5, '1TB SSD', 1.4, 4, NULL, NULL, '2024-11-07 19:36:34.311870'),
(108, '8 giờ', '2024-11-07 19:36:34.311870', 'Lenovo IdeaPad Flex 5, máy tính 2 trong 1 tiện lợi.', 'AMD Radeon Graphics', 'https://onlylap.vn/wp-content/uploads/2024/04/Lenovo-IdeaPad-Flex-5-15IIL05.webp', 'IdeaPad Flex 5', 'Windows 11', 21000000, 'AMD Ryzen 5', '16', 15.6, 4, '512GB SSD', 2.3, 4, NULL, NULL, '2024-11-07 19:36:34.311870'),
(109, '10 giờ', '2024-11-07 19:36:34.311870', 'Lenovo ThinkPad L14, bền bỉ và hiệu quả cho công việc.', 'Intel UHD Graphics', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/446/400/products/lenovo-t-hinkpad-e570-gia-loc-1.jpg?v=1642580767173', 'ThinkPad L14', 'Windows 11', 19000000, 'Intel i5', '16', 14, 10, '512GB SSD', 1.4, 4, NULL, NULL, '2024-11-07 19:36:34.311870'),
(110, '9 giờ', '2024-11-07 19:36:34.311870', 'Lenovo Legion 5i, laptop gaming với cấu hình khủng.', 'NVIDIA RTX 3060', 'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2024_2_21_638441314994873341_lenovo-gaming-legion-5-16irx9-i7-14650hx-dd.jpg', 'Legion 5i', 'Windows 11', 25000000, 'Intel i7', '16', 15.6, 3, '1TB SSD', 2, 4, NULL, NULL, '2024-11-07 19:36:34.311870'),
(111, '8 giờ', '2024-11-07 19:36:34.311870', 'Lenovo IdeaPad 5, máy tính văn phòng với nhiều tính năng.', 'Intel Iris Xe', 'https://cdn2.fptshop.com.vn/unsafe/564x0/filters:quality(80)/Uploads/images/2015/Tin-Tuc/QuanLNH2/lenovo-ideapad-3-5.jpg', 'IdeaPad 5', 'Windows 11', 22000000, 'Intel i7', '16', 15.6, 6, '512GB SSD', 2, 4, NULL, NULL, '2024-11-07 19:36:34.311870'),
(112, '10 giờ', '2024-11-07 19:36:34.311870', 'Lenovo ThinkBook 13, nhỏ gọn và tiện lợi cho di chuyển.', 'Intel UHD Graphics', 'https://hc.com.vn/i/ecommerce/media/ck15671214-638442134030407457_lenovo-ideapad-1-14alc7-r7-5700u-2.jpg', 'ThinkBook 13', 'Windows 11', 17000000, 'Intel i5', '8', 14, 10, '256GB SSD', 1.5, 4, NULL, NULL, '2024-11-07 19:36:34.311870'),
(113, '8 giờ', '2024-11-07 19:36:34.311870', 'HP Pavilion 15, máy tính cá nhân mạnh mẽ cho nhu cầu văn phòng.', 'Intel UHD Graphics', 'https://cdn.tgdd.vn/Products/Images/44/309565/hp-pavilion-15-eg2081tu-i5-7c0q4pa-thumb-600x600.jpg', 'Pavilion 15', 'Windows 11', 15000000, 'Intel i5', '8', 15.6, 20, '512GB SSD', 1.75, 5, NULL, NULL, '2024-11-07 19:36:34.311870'),
(114, '9 giờ', '2024-11-07 19:36:34.311870', 'HP Spectre x360, máy tính 2 trong 1 sang trọng và hiệu suất cao.', 'Intel Iris Xe', 'https://gamalaptop.vn/wp-content/uploads/2021/07/HP-Spectre-x360-15-01.jpg', 'Spectre x360', 'Windows 11', 18000000, 'Intel i7', '16', 14, 15, '1TB SSD', 1.3, 5, NULL, NULL, '2024-11-07 19:36:34.311870'),
(115, '10 giờ', '2024-11-07 19:36:34.311870', 'HP Omen 15, laptop gaming với cấu hình mạnh mẽ.', 'NVIDIA GTX 1660 Ti', 'https://gamalaptop.vn/wp-content/uploads/2021/09/HP-OMEN-X-15-i7-7700HQ-GTX-1050Ti-01.jpg', 'Omen 15', 'Windows 11', 20000000, 'Intel i7', '16', 15.6, 10, '512GB SSD', 2, 5, NULL, NULL, '2024-11-07 19:36:34.311870'),
(116, '9 giờ', '2024-11-07 19:36:34.311870', 'HP Envy 14, laptop với thiết kế đẹp và hiệu suất tốt.', 'NVIDIA MX450', 'https://mac24h.vn/images/detailed/93/97D13B3E-F10C-4894-8D32-1166F2F2B894_mr23-9o_tzpw-ba.png', 'Envy 14', 'Windows 11', 22000000, 'Intel i7', '16', 15.6, 8, '1TB SSD', 1.5, 5, NULL, NULL, '2024-11-07 19:36:34.311870'),
(117, '10 giờ', '2024-11-07 19:36:34.311870', 'HP 250 G8, laptop văn phòng giá rẻ nhưng hiệu năng ổn.', 'Intel UHD Graphics', 'https://www.tncstore.vn/media/product/250-7365-laptop-hp-250-g8-518u0pa-ava.jpg', '250 G8', 'Windows 11', 17000000, 'Intel i5', '8', 15.6, 12, '256GB SSD', 1.6, 5, NULL, NULL, '2024-11-07 19:36:34.311870'),
(118, '9 giờ', '2024-11-07 19:36:34.311870', 'HP ProBook 440 G8, thiết kế bền bỉ cho doanh nhân.', 'Intel Iris Xe', 'https://laptopprocom.vn/uploads/source/san-pham/hp/hp-probook-440-g8/1.png', 'ProBook 440 G8', 'Windows 11', 19000000, 'Intel i5', '16', 14, 10, '512GB SSD', 1.5, 5, NULL, NULL, '2024-11-07 19:36:34.311870'),
(119, '8 giờ', '2024-11-07 19:36:34.311870', 'HP Omen 17, laptop gaming hiệu năng cực cao.', 'NVIDIA RTX 3060', 'https://laptop365.vn/pic/product/images/hero_omen17_3-Laptop365.png', 'Omen 17', 'Windows 11', 21000000, 'Intel i7', '32', 15.6, 5, '1TB SSD', 2.4, 5, NULL, NULL, '2024-11-07 19:36:34.311870'),
(120, '10 giờ', '2024-11-07 19:36:34.311870', 'HP Spectre 15, laptop cao cấp với hiệu suất mạnh mẽ.', 'NVIDIA GTX 1650 Ti', 'https://laptop365.vn/pic/product/z2625614840893_ac1e9b14b9d1803354610918db00b73c_637623386444050862.jpg', 'Spectre 15', 'Windows 11', 24000000, 'Intel i7', '16', 16, 4, '1TB SSD', 2, 5, NULL, NULL, '2024-11-07 19:36:34.311870'),
(121, '8 giờ', '2024-11-07 19:36:34.311870', 'HP Pavilion Gaming, laptop gaming giá rẻ nhưng hiệu suất tốt.', 'NVIDIA GTX 1650', 'https://anphat.com.vn/media/product/30380_hp_pavilion_gaming_1.jpg ', 'Pavilion Gaming', 'Windows 11', 16000000, 'Intel i5', '8', 15.6, 15, '512GB SSD', 2, 5, NULL, NULL, '2024-11-07 19:36:34.311870'),
(122, '9 giờ', '2024-11-07 19:36:34.311870', 'HP Omen 15 (2022), laptop gaming với cấu hình mạnh.', 'NVIDIA RTX 3070', 'https://laptoplc.com.vn/wp-content/uploads/2022/08/DSC02412.jpg', 'Omen 15 (2022)', 'Windows 11', 23000000, 'Intel i7', '32', 15.6, 6, '1TB SSD', 1.9, 5, NULL, NULL, '2024-11-07 19:36:34.311870'),
(123, '10 giờ', '2024-11-07 19:36:34.311870', 'HP Pavilion x360, máy tính 2 trong 1 tiện lợi cho học sinh, sinh viên.', 'Intel UHD Graphics', 'https://nhatminhlaptop.com/upload/products/2024-07-31-12-25-42/hppavilion14-1.jpg', 'Pavilion x360', 'Windows 11', 15000000, 'Intel i5', '8', 14, 10, '256GB SSD', 1.4, 5, NULL, NULL, '2024-11-07 19:36:34.311870'),
(124, '9 giờ', '2024-11-07 19:36:34.311870', 'HP Envy x360, máy tính 2 trong 1 với thiết kế đẹp.', 'AMD Radeon Graphics', 'https://laptopaz.vn/media/product/3264_2835_6.png', 'Envy x360', 'Windows 11', 18000000, 'AMD Ryzen 5', '16', 15.6, 8, '512GB SSD', 1.8, 5, NULL, NULL, '2024-11-07 19:36:34.311870'),
(125, '10 giờ', '2024-11-07 19:36:34.311870', 'HP EliteBook 840 G8, laptop doanh nhân với hiệu suất cao.', 'Intel Iris Xe', 'https://laptop3mien.vn/wp-content/uploads/2021/01/HP-Elitebook-840-G8-Laptop3mien.vn-2.jpg', 'EliteBook 840 G8', 'Windows 11', 20000000, 'Intel i7', '16', 14, 5, '1TB SSD', 1.5, 5, NULL, NULL, '2024-11-07 19:36:34.311870'),
(126, '8 giờ', '2024-11-07 19:36:34.311870', 'HP ProBook 450 G8, cấu hình mạnh mẽ cho công việc văn phòng.', 'NVIDIA GeForce MX450', 'https://product.hstatic.net/200000553329/product/yd4rtyb7bmkjkhkzqa0yd_2fhrid4oigvleolnaz4xxee6zi2gtaawf8cvprhomxkv1r16_7ff6fb70f76f4a87a0cf4e215aa3beb2.jpg', 'ProBook 450 G8', 'Windows 11', 21000000, 'Intel i7', '16', 15.6, 4, '512GB SSD', 2.1, 5, NULL, NULL, '2024-11-07 19:36:34.311870'),
(127, '10 giờ', '2024-11-07 19:36:34.311870', 'HP Pavilion 14, laptop nhẹ nhàng, phù hợp cho di chuyển.', 'Intel UHD Graphics', 'https://maytinhhoangha.com/uploads/files/Laptop/hp-pavilion-14-ce1008tu-i5-8265u-4gb-1tb-14f-win10-2-org.jpg', 'Pavilion 14', 'Windows 11', 19000000, 'Intel i5', '8', 14, 10, '256GB SSD', 1.5, 5, NULL, NULL, '2024-11-07 19:36:34.311870'),
(128, '9 giờ', '2024-11-07 19:36:34.311870', 'HP Omen 15 (2023), laptop gaming với hiệu suất cao hơn.', 'NVIDIA RTX 3060', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/408/235/products/11.png?v=1729157782123', 'Omen 15 (2023)', 'Windows 11', 25000000, 'Intel i7', '16', 15.6, 3, '1TB SSD', 2.2, 5, NULL, NULL, '2024-11-07 19:36:34.311870'),
(129, '10 giờ', '2024-11-07 19:36:34.311870', 'HP Pavilion 15 (2022), máy tính văn phòng với nhiều tính năng.', 'Intel Iris Xe', 'https://laptopvang.com/wp-content/uploads/2023/10/hp-laptop-15-dy5073dx.jpg', 'Pavilion 15 (2022)', 'Windows 11', 22000000, 'Intel i7', '16', 15.6, 6, '512GB SSD', 2, 5, NULL, NULL, '2024-11-07 19:36:34.311870'),
(130, '10 giờ', '2024-11-07 19:36:34.311870', 'HP ProBook 440 G7, máy tính doanh nhân với thiết kế mỏng nhẹ.', 'Intel UHD Graphics', 'https://anphat.com.vn/media/product/32260_31847_hp_probook_440_g7_9gq14pa_i5_10210u_7f873d0936a04469b4a2166c68c0eb61_master.jpg', 'ProBook 440 G7', 'Windows 11', 17000000, 'Intel i5', '8', 14, 10, '256GB SSD', 1.5, 5, NULL, NULL, '2024-11-07 19:36:34.311870'),
(131, '8 giờ', '2024-11-07 19:36:34.311870', 'Dell Inspiron 15, máy tính văn phòng với hiệu năng ổn định.', 'Intel UHD Graphics', 'https://cdn.tgdd.vn/Products/Images/44/321192/dell-inspiron-15-3520-i5-25p231-1-2-750x500.jpg', 'Inspiron 15', 'Windows 11', 15000000, 'Intel i5', '8', 15.6, 20, '512GB SSD', 1.8, 6, NULL, NULL, '2024-11-07 19:36:34.311870'),
(132, '9 giờ', '2024-11-07 19:36:34.311870', 'Dell XPS 13, laptop cao cấp với thiết kế sang trọng.', 'Intel Iris Xe', 'https://product.hstatic.net/1000331874/product/dell_xps_9320_722c6227ecc04c648c670f1bbb7b7cfd.jpg', 'XPS 13', 'Windows 11', 18000000, 'Intel i7', '16', 14, 15, '1TB SSD', 1.4, 6, NULL, NULL, '2024-11-07 19:36:34.311870'),
(133, '10 giờ', '2024-11-07 19:36:34.311870', 'Dell G5 15, laptop gaming với hiệu năng cao.', 'NVIDIA GTX 1660 Ti', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fzshop.vn%2Fg5590-dell-g5-15-i5-9300h-8gb-ram-256gb-ssd1tb-hdd-gtx-1650-4gb.html&psig=AOvVaw1uyzUY9Xz5022U-9yosFcD&ust=1730810309824000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICfo__YwokDFQAAAAA', 'G5 15', 'Windows 11', 20000000, 'Intel i7', '16', 15.6, 10, '512GB SSD', 2, 6, NULL, NULL, '2024-11-07 19:36:34.311870'),
(134, '9 giờ', '2024-11-07 19:36:34.311870', 'Dell Latitude 7420, laptop doanh nhân bền bỉ với bảo mật tốt.', 'Intel Iris Xe', 'https://product.hstatic.net/1000331874/product/dell_latitude_7420_i5_d5fa299a57ec4305b996ad3ed3b7e752.jpg', 'Latitude 7420', 'Windows 11', 22000000, 'Intel i7', '16', 15.6, 8, '1TB SSD', 1.5, 6, NULL, NULL, '2024-11-07 19:36:34.311870'),
(135, '10 giờ', '2024-11-07 19:36:34.311870', 'Dell Inspiron 14, thiết kế mỏng nhẹ, phù hợp cho học sinh sinh viên.', 'Intel UHD Graphics', 'https://cdn.tgdd.vn/Products/Images/44/325244/dell-inspiron-14-5440-core-7-n4i7204w1-thumb-600x600.jpg', 'Inspiron 14', 'Windows 11', 17000000, 'Intel i5', '8', 15.6, 12, '256GB SSD', 1.6, 6, NULL, NULL, '2024-11-07 19:36:34.311870'),
(136, '9 giờ', '2024-11-07 19:36:34.311870', 'Dell Vostro 3400, laptop doanh nhân với hiệu năng ổn định.', 'Intel Iris Xe', 'https://www.tncstore.vn/media/product/6715-laptop-gaming-dell-vostro-3400-yx51w6-1.jpg', 'Vostro 3400', 'Windows 11', 19000000, 'Intel i5', '16', 14, 10, '512GB SSD', 1.5, 6, NULL, NULL, '2024-11-07 19:36:34.311870'),
(137, '8 giờ', '2024-11-07 19:36:34.311870', 'Dell G7 15, laptop gaming với cấu hình mạnh mẽ.', 'NVIDIA RTX 2060', 'https://www.laptopvip.vn/images/ab__webp/detailed/18/6212435cv1d.webp', 'G7 15', 'Windows 11', 21000000, 'Intel i7', '32', 15.6, 5, '1TB SSD', 2.5, 6, NULL, NULL, '2024-11-07 19:36:34.311870'),
(138, '10 giờ', '2024-11-07 19:36:34.311870', 'Dell XPS 15, hiệu suất cao cho công việc sáng tạo.', 'NVIDIA GTX 1650 Ti', 'https://nhatminhlaptop.com/upload/products/2023-03-23-13-45-56/9530-1.jpg', 'XPS 15', 'Windows 11', 24000000, 'Intel i7', '16', 16, 4, '1TB SSD', 2, 6, NULL, NULL, '2024-11-07 19:36:34.311870'),
(139, '8 giờ', '2024-11-07 19:36:34.311870', 'Dell Inspiron Gaming, laptop gaming giá rẻ với hiệu suất tốt.', 'NVIDIA GTX 1650', 'https://laptoptld.com/wp-content/uploads/2022/05/Laptop-Dell-Gaming-Inspiron-15-7577-.jpg ', 'Inspiron Gaming', 'Windows 11', 16000000, 'Intel i5', '8', 15.6, 15, '512GB SSD', 2, 6, NULL, NULL, '2024-11-07 19:36:34.311870'),
(140, '9 giờ', '2024-11-07 19:36:34.311870', 'Dell Alienware m15, laptop gaming cao cấp với hiệu suất đỉnh.', 'NVIDIA RTX 3070', 'https://laptoptitan.vn/wp-content/uploads/2022/04/Dell-Alienware-M15-Ryzen-Edition-R5-01.jpg', 'Alienware m15', 'Windows 11', 23000000, 'Intel i7', '32', 15.6, 6, '1TB SSD', 1.9, 6, NULL, NULL, '2024-11-07 19:36:34.311870'),
(141, '10 giờ', '2024-11-07 19:36:34.311870', 'Dell Inspiron 13, laptop nhẹ nhàng, phù hợp cho di chuyển.', 'Intel UHD Graphics', 'https://laptopaz.vn/media/product/3163_2798_1.png', 'Inspiron 13', 'Windows 11', 15000000, 'Intel i5', '8', 14, 10, '256GB SSD', 1.5, 6, NULL, NULL, '2024-11-07 19:36:34.311870'),
(142, '9 giờ', '2024-11-07 19:36:34.311870', 'Dell XPS 13 (2022), laptop cao cấp với thiết kế mới.', 'Intel Iris Xe', 'https://hungphatlaptop.com/wp-content/uploads/2022/06/DELL-XPS-13-9315-2022-Features-03.jpeg.webp', 'XPS 13 (2022)', 'Windows 11', 18000000, 'Intel i7', '16', 15.6, 8, '512GB SSD', 1.8, 6, NULL, NULL, '2024-11-07 19:36:34.311870'),
(143, '10 giờ', '2024-11-07 19:36:34.311870', 'Dell Latitude 5420, laptop doanh nhân hiệu suất cao.', 'Intel Iris Xe', 'https://no1computer.vn/images/products/2022/04/22/large/45151_latitude_5420_ha2_1650600360.jpg', 'Latitude 5420', 'Windows 11', 20000000, 'Intel i7', '16', 14, 5, '1TB SSD', 1.4, 6, NULL, NULL, '2024-11-07 19:36:34.311870'),
(144, '8 giờ', '2024-11-07 19:36:34.311870', 'Dell G5 15 (2022), laptop gaming với cấu hình tối ưu.', 'NVIDIA RTX 3050', 'https://zshop.vn/images/companies/1/dell-g5-5590-black.jpg?1589513371683', 'G5 15 (2022)', 'Windows 11', 21000000, 'Intel i7', '16', 15.6, 4, '512GB SSD', 2.1, 6, NULL, NULL, '2024-11-07 19:36:34.311870'),
(145, '10 giờ', '2024-11-07 19:36:34.311870', 'Dell Vostro 3510, laptop văn phòng với giá hợp lý.', 'Intel UHD Graphics', 'https://cdn.tgdd.vn/Products/Images/44/266280/dell-vostro-3510-i5-1135g7-8gb-512gb-2gb-600x600.jpg', 'Vostro 3510', 'Windows 11', 19000000, 'Intel i5', '8', 14, 10, '256GB SSD', 1.5, 6, NULL, NULL, '2024-11-07 19:36:34.311870'),
(146, '9 giờ', '2024-11-07 19:36:34.311870', 'Dell Alienware x15, laptop gaming siêu mỏng với hiệu năng đỉnh.', 'NVIDIA RTX 3080', 'https://laptops.vn/wp-content/uploads/2024/06/dell-alienware-x15-r1-2021_3_1699970952-1.jpg', 'Alienware x15', 'Windows 11', 25000000, 'Intel i9', '32', 15.6, 3, '1TB SSD', 2, 6, NULL, NULL, '2024-11-07 19:36:34.311870'),
(147, '10 giờ', '2024-11-07 19:36:34.311870', 'Dell Inspiron 15 (2022), máy tính văn phòng với nhiều tính năng.', 'Intel Iris Xe', 'https://hungphatlaptop.com/wp-content/uploads/2023/07/DELL-Inspiron-15-3520-2022-Features-04.jpeg.webp', 'Inspiron 15 (2022)', 'Windows 11', 22000000, 'Intel i7', '16', 15.6, 6, '512GB SSD', 2, 6, NULL, NULL, '2024-11-07 19:36:34.311870'),
(148, '10 giờ', '2024-11-07 19:36:34.311870', 'Dell Vostro 3401, laptop doanh nhân với thiết kế mỏng nhẹ.', 'Intel UHD Graphics', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbf-Um2qTO7NMhiTld6pdmvxk24rxnk9-FwA&s', 'Vostro 3401', 'Windows 11', 17000000, 'Intel i5', '8', 14, 10, '256GB SSD', 1.5, 6, NULL, NULL, '2024-11-07 19:36:34.311870'),
(149, '6 giờ', '2024-11-07 19:36:34.311870', 'MSI Modern 15, laptop mỏng nhẹ dành cho công việc văn phòng.', 'Intel UHD Graphics', 'https://cdn.tgdd.vn/Products/Images/44/311016/msi-modern-15-b12mo-i5-628vn-thumb-1-600x600.jpg', 'Modern 15', 'Windows 11', 15000000, 'Intel i5', '8', 15.6, 20, '512GB SSD', 2, 7, NULL, NULL, '2024-11-07 19:36:34.311870'),
(150, '8 giờ', '2024-11-07 19:36:34.311870', 'MSI Prestige 14, máy tính cao cấp với thiết kế sang trọng.', 'Intel Iris Xe', 'https://bizweb.dktcdn.net/thumb/grande/100/386/607/products/laptop-msi-prestige-14-ai-studio-man-hinh.jpg?v=1729008395257', 'Prestige 14', 'Windows 11', 18000000, 'Intel i7', '16', 14, 15, '1TB SSD', 1.3, 7, NULL, NULL, '2024-11-07 19:36:34.311870'),
(151, '7 giờ', '2024-11-07 19:36:34.311870', 'MSI GF63, laptop gaming hiệu suất tốt với giá cả hợp lý.', 'NVIDIA GTX 1650', 'https://cdn.tgdd.vn/Products/Images/44/316941/msi-gaming-gf63-thin-12uc-i7-887vn-glr-thumb-600x600.jpg', 'GF63', 'Windows 11', 20000000, 'Intel i5', '8', 15.6, 10, '512GB SSD', 2.5, 7, NULL, NULL, '2024-11-07 19:36:34.311870'),
(152, '6 giờ', '2024-11-07 19:36:34.311870', 'MSI GS66 Stealth, laptop gaming siêu mỏng với cấu hình cao.', 'NVIDIA RTX 3060', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqhTioUXoSX3zTkB1LrH4YQn9KPhT3tcx2w&s ', 'GS66 Stealth', 'Windows 11', 22000000, 'Intel i7', '16', 15.6, 8, '1TB SSD', 2.2, 7, NULL, NULL, '2024-11-07 19:36:34.311870'),
(153, '8 giờ', '2024-11-07 19:36:34.311870', 'MSI Creator 15, máy tính chuyên dụng cho đồ họa và sáng tạo.', 'NVIDIA GTX 1660 Ti', 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/l/a/laptop-msi-creator-15-a10sdt-1.jpg', 'Creator 15', 'Windows 11', 17000000, 'Intel i5', '16', 15.6, 12, '512GB SSD', 2, 7, NULL, NULL, '2024-11-07 19:36:34.311870'),
(154, '9 giờ', '2024-11-07 19:36:34.311870', 'MSI Summit E14, laptop doanh nhân với tính năng bảo mật cao.', 'Intel Iris Xe', 'https://songphuong.vn/Content/uploads/2022/09/Laptop-MSI-Summit-E14-Flip-Evo-A12MT-songphuong.vn-01.jpg', 'Summit E14', 'Windows 11', 19000000, 'Intel i7', '16', 14, 10, '1TB SSD', 1.5, 7, NULL, NULL, '2024-11-07 19:36:34.311870'),
(155, '7 giờ', '2024-11-07 19:36:34.311870', 'MSI Stealth 15M, laptop gaming hiệu suất cao và thiết kế đẹp.', 'NVIDIA RTX 3050', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Iv6IhQdPb7CI9cFI_Z-HiLK7oLzdt7HQhQ&s ', 'Stealth 15M', 'Windows 11', 21000000, 'Intel i7', '32', 15.6, 5, '1TB SSD', 2.5, 7, NULL, NULL, '2024-11-07 19:36:34.311870'),
(156, '6 giờ', '2024-11-07 19:36:34.311870', 'MSI GE76 Raider, laptop gaming hàng đầu với hiệu suất cực mạnh.', 'NVIDIA RTX 3070', 'https://laptopnow.vn/uploads/products/2024/06/msi-ge76-raider-4-1718186354.jpg ', 'GE76 Raider', 'Windows 11', 24000000, 'Intel i9', '32', 16, 4, '2TB SSD', 2, 7, NULL, NULL, '2024-11-07 19:36:34.311870'),
(157, '8 giờ', '2024-11-07 19:36:34.311870', 'MSI Alpha 15, laptop gaming AMD với hiệu suất ấn tượng.', 'AMD Radeon RX 5500M', 'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2021_9_23_637679951533296877_msi-gaming-alpha-15-den-rgb-1-zone-dd.jpg', 'Alpha 15', 'Windows 11', 16000000, 'AMD Ryzen 5', '16', 15.6, 15, '512GB SSD', 2, 7, NULL, NULL, '2024-11-07 19:36:34.311870'),
(158, '7 giờ', '2024-11-07 19:36:34.311870', 'MSI Raider GE66, laptop gaming với thiết kế đẹp mắt và hiệu năng cao.', 'NVIDIA RTX 3060', 'https://product.hstatic.net/200000453251/product/19422_laptop_msi_ge66_raider_11ug_1_0ab3a33038534c369027ebedb7f198c6.jpg', 'Raider GE66', 'Windows 11', 23000000, 'Intel i7', '32', 15.6, 6, '1TB SSD', 2.1, 7, NULL, NULL, '2024-11-07 19:36:34.311870'),
(159, '8 giờ', '2024-11-07 19:36:34.311870', 'MSI Modern 14, laptop cho sinh viên với thiết kế hiện đại.', 'Intel UHD Graphics', 'https://thegioiso365.vn/wp-content/uploads/2022/04/8997_msi_modern_14_b11m_010vn_5.jpg', 'Modern 14', 'Windows 11', 15000000, 'Intel i5', '8', 14, 10, '256GB SSD', 1.4, 7, NULL, NULL, '2024-11-07 19:36:34.311870'),
(160, '9 giờ', '2024-11-07 19:36:34.311870', 'MSI GL65, laptop gaming với cấu hình mạnh mẽ.', 'NVIDIA GTX 1660 Ti', 'https://cdn.tgdd.vn/Products/Images/44/240518/msi-gl65-leopard-10scxk-i7-217vn-600x600.jpg', 'GL65', 'Windows 11', 18000000, 'Intel i7', '16', 15.6, 8, '512GB SSD', 1.8, 7, NULL, NULL, '2024-11-07 19:36:34.311870'),
(161, '8 giờ', '2024-11-07 19:36:34.311870', 'MSI Creator 17, laptop cao cấp cho nhà sáng tạo nội dung.', 'NVIDIA RTX 3080', 'https://nguyencongpc.vn/media/product/20602-msi-creator-17-b11uh-5.jpg', 'Creator 17', 'Windows 11', 20000000, 'Intel i9', '32', 14, 5, '1TB SSD', 1.5, 7, NULL, NULL, '2024-11-07 19:36:34.311870'),
(162, '7 giờ', '2024-11-07 19:36:34.311870', 'MSI GS75 Stealth, laptop gaming với màn hình lớn và hiệu suất cao.', 'NVIDIA RTX 3070', 'https://owlgaming.vn/wp-content/uploads/2019/06/MSI-GS75-Stealth-1-600x600.jpg ', 'GS75 Stealth', 'Windows 11', 21000000, 'Intel i7', '32', 15.6, 4, '1TB SSD', 2, 7, NULL, NULL, '2024-11-07 19:36:34.311870'),
(163, '9 giờ', '2024-11-07 19:36:34.311870', 'MSI Summit B15, laptop doanh nhân với tính năng vượt trội.', 'Intel Iris Xe', 'https://m.media-amazon.com/images/I/713SWIryRyL.jpg', 'Summit B15', 'Windows 11', 19000000, 'Intel i5', '16', 14, 10, '512GB SSD', 1.5, 7, NULL, NULL, '2024-11-07 19:36:34.311870'),
(164, '6 giờ', '2024-11-07 19:36:34.311870', 'MSI Titan GT76, laptop gaming đỉnh cao với hiệu suất tối đa.', 'NVIDIA RTX 3080', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxaGgA37syHQ0EBXo62TMHF8_eOsF478Qog&s', 'Titan GT76', 'Windows 11', 25000000, 'Intel i9', '32', 15.6, 3, '2TB SSD', 2, 7, NULL, NULL, '2024-11-07 19:36:34.311870'),
(165, '8 giờ', '2024-11-07 19:36:34.311870', 'MSI Bravo 15, laptop gaming giá tốt với cấu hình ấn tượng.', 'AMD Radeon RX 5500M', 'https://laptop88.vn/media/product/6780_msi_bravo_15_b5dd_265vn_r5_5600h_919c422d73604315a617fb4a79299da1_master.png', 'Bravo 15', 'Windows 11', 22000000, 'AMD Ryzen 5', '16', 15.6, 6, '512GB SSD', 2, 7, NULL, NULL, '2024-11-07 19:36:34.311870'),
(166, '8 giờ', '2024-11-07 19:36:34.311870', 'MSI Prestige 15, laptop cao cấp cho nhà sáng tạo.', 'NVIDIA GTX 1650 Ti', 'https://owlgaming.vn/wp-content/uploads/2019/09/MSI-Prestige-15-A10SC.jpg', 'Prestige 15', 'Windows 11', 17000000, 'Intel i7', '16', 14, 10, '1TB SSD', 1.5, 7, NULL, NULL, '2024-11-07 19:36:34.311870'),
(167, '8 giờ', '2024-11-07 19:36:34.311870', 'Gigabyte Aero 15, laptop chuyên nghiệp cho sáng tạo nội dung.', 'NVIDIA GTX 1660 Ti', 'https://pcmarket.vn/media/product/9686_gs_008222_feature_88439.jpg', 'Aero 15', 'Windows 11', 15000000, 'Intel i5', '16', 15.6, 20, '512GB SSD', 2, 8, NULL, NULL, '2024-11-07 19:36:34.311870'),
(168, '9 giờ', '2024-11-07 19:36:34.311870', 'Gigabyte AORUS 15G, laptop gaming với hiệu suất mạnh mẽ.', 'NVIDIA RTX 3060', 'https://tuanphong.vn/pictures/thumb/2021/09/1632464219-676-nang-cap-ssd-ram-cho-laptop-gigabyte-aorus-15g-rtx-30-1-640x640.jpg ', 'AORUS 15G', 'Windows 11', 18000000, 'Intel i7', '16', 14, 15, '1TB SSD', 1.4, 8, NULL, NULL, '2024-11-07 19:36:34.311870'),
(169, '7 giờ', '2024-11-07 19:36:34.311870', 'Gigabyte G5, laptop gaming với giá cả hợp lý.', 'NVIDIA GTX 1650', 'https://laptopworld.vn/media/product/11482_gigabyte_g5_ge_logo.jpg', 'G5', 'Windows 11', 20000000, 'Intel i5', '8', 15.6, 10, '512GB SSD', 2.3, 8, NULL, NULL, '2024-11-07 19:36:34.311870'),
(170, '6 giờ', '2024-11-07 19:36:34.311870', 'Gigabyte AORUS 17G, laptop gaming với màn hình lớn và hiệu suất cao.', 'NVIDIA RTX 3070', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSScxWItFURFW3azY9u5-uHgvkskPGZXG4Jtg&s ', 'AORUS 17G', 'Windows 11', 22000000, 'Intel i7', '32', 15.6, 8, '1TB SSD', 2.2, 8, NULL, NULL, '2024-11-07 19:36:34.311870'),
(171, '8 giờ', '2024-11-07 19:36:34.311870', 'Gigabyte Aero 14, laptop mỏng nhẹ dành cho doanh nhân.', 'Intel UHD Graphics', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDN-whu7HBb-NUioMYH6R6eTvdZCIQvCiT6w&s', 'Aero 14', 'Windows 11', 17000000, 'Intel i5', '16', 15.6, 12, '256GB SSD', 2, 8, NULL, NULL, '2024-11-07 19:36:34.311870'),
(172, '9 giờ', '2024-11-07 19:36:34.311870', 'Gigabyte G7, laptop gaming với thiết kế hiện đại.', 'NVIDIA GTX 1660 Ti', 'https://onlylap.vn/wp-content/uploads/2024/04/Gigabyte-G7-MD-6.webp', 'G7', 'Windows 11', 19000000, 'Intel i5', '16', 14, 10, '512GB SSD', 1.5, 8, NULL, NULL, '2024-11-07 19:36:34.311870'),
(173, '7 giờ', '2024-11-07 19:36:34.311870', 'Gigabyte AORUS 15P, laptop gaming hiệu năng cao với thiết kế bắt mắt.', 'NVIDIA RTX 3060', 'https://product.hstatic.net/200000304081/product/1_8bc1e2c047d84f5d969ffabf4026b2e9_large_943d78d8225341ada46a68efaebb3d3a_grande.png ', 'AORUS 15P', 'Windows 11', 21000000, 'Intel i7', '16', 15.6, 5, '1TB SSD', 2.5, 8, NULL, NULL, '2024-11-07 19:36:34.311870'),
(174, '6 giờ', '2024-11-07 19:36:34.311870', 'Gigabyte Aero 17, laptop 17 inch dành cho sáng tạo nội dung.', 'NVIDIA RTX 3080', 'https://laptoptitan.vn/wp-content/uploads/2021/03/Gigabyte-AERO-17-SA-03.jpg', 'Aero 17', 'Windows 11', 24000000, 'Intel i9', '32', 16, 4, '2TB SSD', 2, 8, NULL, NULL, '2024-11-07 19:36:34.311870'),
(175, '8 giờ', '2024-11-07 19:36:34.311870', 'Gigabyte GIGABYTE 15, laptop gaming giá rẻ với hiệu suất tốt.', 'NVIDIA GTX 1650', 'https://laptopworld.vn/media/product/10196_gigabyte_aorus_15_xe4.jpg', 'GIGABYTE 15', 'Windows 11', 16000000, 'Intel i5', '8', 15.6, 15, '512GB SSD', 2, 8, NULL, NULL, '2024-11-07 19:36:34.311870'),
(176, '7 giờ', '2024-11-07 19:36:34.311870', 'Gigabyte AORUS 5, laptop gaming với cấu hình mạnh mẽ và thiết kế độc đáo.', 'NVIDIA RTX 3050', 'https://npcshop.vn/media/product/4070-laptop-gigabyte-aorus-5-se4-73vn213sh--1-.png', 'AORUS 5', 'Windows 11', 23000000, 'Intel i7', '16', 15.6, 6, '1TB SSD', 2.1, 8, NULL, NULL, '2024-11-07 19:36:34.311870'),
(177, '8 giờ', '2024-11-07 19:36:34.311870', 'Gigabyte Aero 15 (2022), laptop mỏng nhẹ dành cho người sáng tạo.', 'Intel Iris Xe', 'https://media-api-beta.thinkpro.vn/media/social/articles/2022/6/29/5%20(1).jpg', 'Aero 15 (2022)', 'Windows 11', 15000000, 'Intel i5', '16', 14, 10, '256GB SSD', 1.5, 8, NULL, NULL, '2024-11-07 19:36:34.311870'),
(178, '9 giờ', '2024-11-07 19:36:34.311870', 'Gigabyte G5 (2022), laptop gaming mới với cấu hình mạnh.', 'NVIDIA GTX 1650', 'https://cdn2.fptshop.com.vn/unsafe/256x0/filters:quality(100)/2023_5_5_638188828261835779_gigabyte-gaming-g5-kf-e3vn313sh-i5-12500h-den-3.jpg', 'G5 (2022)', 'Windows 11', 18000000, 'Intel i7', '16', 15.6, 8, '512GB SSD', 1.8, 8, NULL, NULL, '2024-11-07 19:36:34.311870'),
(179, '8 giờ', '2024-11-07 19:36:34.311870', 'Gigabyte AORUS 15 (2022), laptop gaming với thiết kế mạnh mẽ.', 'NVIDIA RTX 3060', 'https://i.ytimg.com/vi/Qn86VqDhljs/maxresdefault.jpg', 'AORUS 15 (2022)', 'Windows 11', 20000000, 'Intel i7', '16', 14, 5, '1TB SSD', 1.4, 8, NULL, NULL, '2024-11-07 19:36:34.311870'),
(180, '7 giờ', '2024-11-07 19:36:34.311870', 'Gigabyte G7 (2022), laptop gaming với màn hình lớn và hiệu năng tốt.', 'NVIDIA RTX 3050', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0-07OpxaG0sjJwL7iMYXyH4xbkMUrKsNbQ&s', 'G7 (2022)', 'Windows 11', 21000000, 'Intel i7', '32', 15.6, 4, '1TB SSD', 2, 8, NULL, NULL, '2024-11-07 19:36:34.311870'),
(181, '9 giờ', '2024-11-07 19:36:34.311870', 'Gigabyte Aero 14 (2022), laptop văn phòng mỏng nhẹ với hiệu suất cao.', 'Intel UHD Graphics', 'https://no1computer.vn/images/products/2022/12/07/large/gigabyte-aero-matruoc_1670386347.jpg', 'Aero 14 (2022)', 'Windows 11', 19000000, 'Intel i5', '16', 14, 10, '512GB SSD', 1.5, 8, NULL, NULL, '2024-11-07 19:36:34.311870'),
(182, '6 giờ', '2024-11-07 19:36:34.311870', 'Gigabyte AORUS 17 (2022), laptop gaming cao cấp với cấu hình cực mạnh.', 'NVIDIA RTX 3080', 'https://mypc.vn/wp-content/uploads/2022/10/Danh-gia-Gigabyte-Aorus-17-2022.webp', 'AORUS 17 (2022)', 'Windows 11', 25000000, 'Intel i9', '32', 15.6, 3, '2TB SSD', 2, 8, NULL, NULL, '2024-11-07 19:36:34.311870'),
(183, '8 giờ', '2024-11-07 19:36:34.311870', 'Gigabyte G5 (2023), laptop gaming mới với thiết kế bắt mắt.', 'NVIDIA RTX 3050', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/408/235/products/giga-3.png?v=1688464837157', 'G5 (2023)', 'Windows 11', 22000000, 'Intel i7', '16', 15.6, 6, '1TB SSD', 2, 8, NULL, NULL, '2024-11-07 19:36:34.311870'),
(184, '8 giờ', '2024-11-07 19:36:34.311870', 'Gigabyte AERO 15, laptop dành cho sáng tạo nội dung với hiệu suất cao.', 'NVIDIA GTX 1660 Ti', 'https://www.thienthientan.vn/wp-content/uploads/2021/06/3-6.jpg', 'AERO 15', 'Windows 11', 17000000, 'Intel i5', '16', 14, 10, '256GB SSD', 1.5, 8, NULL, NULL, '2024-11-07 19:36:34.311870');
INSERT INTO `laptops` (`laptopId`, `battery`, `createdAt`, `description`, `gpu`, `image`, `model`, `os`, `price`, `processor`, `ram`, `screenSize`, `stockQuantity`, `storage`, `weight`, `brandId`, `discountId`, `orderId`, `updatedAt`) VALUES
(185, '6 hours', '2024-11-07 19:44:30.138009', 'ASUS VivoBook 15 với hiệu suất tuyệt vời.', 'NVIDIA GTX 1650', 'https://dlcdnwebimgs.asus.com/gain/859297d3-da9f-4807-81e8-7a2fdf14204d/', 'VivoBook 15', 'Windows 10', 23500000, 'Intel i7-9750H', '16', 15.6, 50, '512GB SSD', 1.5, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(186, '8 hours', '2024-11-07 19:44:30.138009', 'ASUS ZenBook 14, mỏng nhẹ và mạnh mẽ.', 'Intel Iris Xe', 'https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/', 'ZenBook 14', 'Windows 10', 22000000, 'Intel i5-1035G1', '8', 14, 30, '256GB SSD', 1.4, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(187, '5 hours', '2024-11-07 19:44:30.138009', 'ASUS ROG Strix G17, laptop gaming hàng đầu.', 'NVIDIA RTX 2060', 'https://laptopre.vn/upload/picture/picture-01650444754.jpg', 'ROG Strix G17', 'Windows 10', 31000000, 'Intel i7-9750H', '16', 17.3, 20, '1TB HDD', 2.5, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(188, '7 hours', '2024-11-07 19:44:30.138009', 'ASUS X407, laptop đa năng cho sinh viên.', 'AMD Radeon R7', 'https://channel.mediacdn.vn/prupload/156/2018/07/img20180731135804470.jpg', 'X407', 'Windows 10', 19500000, 'AMD Ryzen 5 3500U', '8', 15, 45, '512GB SSD', 1.6, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(189, '10 hours', '2024-11-07 19:44:30.138009', 'ASUS ZenBook Flip 13, laptop 2 trong 1 tiện lợi.', 'Intel UHD Graphics', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEe0gEwjo8GYW9L0ckTbtCfKuD1zslQAZZDw&s', 'ZenBook Flip 13', 'Windows 10', 15000000, 'Intel i3-1005G1', '4', 13.3, 25, '128GB SSD', 1.3, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(190, '6 hours', '2024-11-07 19:44:30.138009', 'ASUS VivoBook Gaming, cho game thủ yêu thích.', 'NVIDIA GTX 1650 Ti', 'https://cdn.tgdd.vn/Products/Images/44/226255/asus-vivobook-gaming-f571gt-i5-al851t-226255-600x600.jpg ', 'VivoBook Gaming', 'Windows 10', 17000000, 'Intel i5-9300H', '16', 15.6, 35, '512GB SSD', 1.7, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(191, '12 hours', '2024-11-07 19:44:30.138009', 'ASUS ExpertBook B9, laptop doanh nhân cao cấp.', 'Intel Iris Plus', 'https://anphat.com.vn/media/product/48140_laptop_asus_expertbook_b9_oled_b9403cva_km0351x__2_.jpg', 'ExpertBook B9', 'Windows 10', 24000000, 'Intel i7-1065G7', '16', 14, 40, '1TB SSD', 1.2, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(192, '5 hours', '2024-11-07 19:44:30.138009', 'ASUS TUF Gaming A15, laptop gaming bền bỉ.', 'NVIDIA GTX 1650', 'https://dlcdnwebimgs.asus.com/gain/4cc342ab-c4fa-42a9-8619-a340f6119bec/', 'TUF A15', 'Windows 10', 20490000, 'AMD Ryzen 7 4800H', '16', 15.6, 28, '512GB SSD', 1.8, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(193, '9 hours', '2024-11-07 19:44:30.138009', 'ASUS ZenBook 13, laptop siêu mỏng.', 'Intel UHD Graphics', 'https://anphat.com.vn/media/product/30956_laptop_asus_zenbook_13_ux334flc_a4096t_1.jpg', 'ZenBook 13', 'Windows 10', 17900000, 'Intel i5-1035G4', '8', 13.3, 50, '256GB SSD', 1.4, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(194, '7 hours', '2024-11-07 19:44:30.138009', 'ASUS ROG Zephyrus G14, laptop gaming di động.', 'NVIDIA RTX 2060', 'https://ttcenter.com.vn/uploads/product/iog1yru6-1399-asus-rog-zephyrus-g14-ga403uv-g14-r94060-amd-ryzen-9-8945hs-16gb-1tb-rtx-4060-8gb-14-2k-ips-120hz-new.jpg', 'ROG Zephyrus G14', 'Windows 10', 16990000, 'AMD Ryzen 9 4900HS', '16', 15, 32, '1TB SSD', 1.6, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(195, '8 hours', '2024-11-07 19:44:30.138009', 'ASUS VivoBook S14, laptop phong cách cho sinh viên.', 'Intel Iris Xe', 'https://dlcdnwebimgs.asus.com/gain/94332ee6-a61b-470a-a100-244ef9cfc139/w800', 'VivoBook S14', 'Windows 10', 21990000, 'Intel i5-1135G7', '16', 14, 20, '512GB SSD', 1.5, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(196, '5 hours', '2024-11-07 19:44:30.138009', 'ASUS ROG Strix G15, laptop chơi game hàng đầu.', 'NVIDIA RTX 3060', 'https://ttcenter.com.vn/uploads/photos/1693298189_2110_5e91658f5964e4500b363f8c35161b65.jpg', 'ROG Strix G15', 'Windows 10', 26990000, 'Intel i7-10870H', '16', 17.3, 15, '1TB SSD', 2.4, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(197, '6 hours', '2024-11-07 19:44:30.138009', 'ASUS X515, laptop giá rẻ cho học sinh.', 'AMD Radeon Graphics', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1aU7Zi6NOzWHMgNKnQGzEioOc_uLqjzamsg&s', 'X515', 'Windows 10', 15500000, 'AMD Ryzen 3 4300U', '8', 15.6, 40, '256GB SSD', 1.7, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(198, '10 hours', '2024-11-07 19:44:30.138009', 'ASUS ZenBook Duo, laptop với hai màn hình.', 'NVIDIA MX250', 'https://bizweb.dktcdn.net/100/512/769/files/1-bfbd4885-fbe7-4883-ab35-87b893c117bf.jpg?v=1721897843378 ', 'ZenBook Duo', 'Windows 10', 25850000, 'Intel i7-10510U', '16', 14, 30, '1TB SSD', 1.5, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(199, '7 hours', '2024-11-07 19:44:30.138009', 'ASUS VivoBook 15, laptop cho sinh viên.', 'Intel UHD Graphics', 'https://dlcdnwebimgs.asus.com/gain/859297d3-da9f-4807-81e8-7a2fdf14204d/', 'VivoBook 15', 'Windows 10', 16450000, 'Intel i3-10110U', '4', 15.6, 22, '128GB SSD', 1.6, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(200, '6 hours', '2024-11-07 19:44:30.138009', 'ASUS ROG Zephyrus M16, laptop gaming ấn tượng.', 'NVIDIA RTX 3070', 'https://azaudio.vn/wp-content/uploads/2024/01/asus-rog-zephyrus-m16-2023-1.jpg', 'ROG Zephyrus M16', 'Windows 10', 21590000, 'Intel i7-10870H', '16', 15.6, 18, '512GB SSD', 1.8, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(201, '5 hours', '2024-11-07 19:44:30.138009', 'ASUS ExpertBook P1, laptop cho doanh nhân.', 'NVIDIA GeForce MX330', 'https://laptop88.vn/media/product/5718_18164_asus_expertbook_p1410cja_ek357_1.jpg', 'ExpertBook P1', 'Windows 10', 21550000, 'Intel i7-1065G7', '16', 15, 25, '1TB SSD', 1.9, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(202, '8 hours', '2024-11-07 19:44:30.138009', 'ASUS VivoBook 14, laptop mỏng nhẹ cho công việc.', 'Intel UHD Graphics', 'https://tanphat.com.vn/media/product/6616_asus_vivobook_14_x1404za_nk300w_2.jpg', 'VivoBook 14', 'Windows 10', 23000000, 'Intel i5-1035G4', '8', 14, 20, '512GB SSD', 1.3, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(203, '6 hours', '2024-11-07 19:44:30.138009', 'ASUS TUF Gaming F15, laptop gaming giá tốt.', 'NVIDIA GTX 1650', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFjru5bU0Ql75Y6ZaYCXmE3Uuou39exVTdfA&s', 'TUF F15', 'Windows 10', 22500000, 'Intel i5-9300H', '8', 15.6, 28, '512GB SSD', 1.8, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(204, '9 hours', '2024-11-07 19:44:30.138009', 'ASUS ZenBook 13, laptop cho doanh nhân.', 'Intel UHD Graphics', 'https://anphat.com.vn/media/product/30956_laptop_asus_zenbook_13_ux334flc_a4096t_1.jpg', 'ZenBook 13', 'Windows 10', 17000000, 'Intel i5-1035G1', '8', 13.3, 35, '256GB SSD', 1.5, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(205, '5 hours', '2024-11-07 19:44:30.138009', 'ASUS ROG Strix G17, laptop gaming hiệu suất cao.', 'NVIDIA RTX 3060', 'https://laptopre.vn/upload/picture/picture-01650444754.jpg', 'ROG Strix G17', 'Windows 10', 26000000, 'Intel i7-10870H', '16', 17.3, 15, '1TB SSD', 2.4, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(206, '6 hours', '2024-11-07 19:44:30.138009', 'ASUS X515, laptop dành cho học sinh.', 'AMD Radeon Graphics', 'https://dlcdnwebimgs.asus.com/gain/0918f7bf-db2e-4067-bafb-7d296179ffe0/', 'X515', 'Windows 10', 19500000, 'AMD Ryzen 3 4300U', '8', 15.6, 40, '256GB SSD', 1.7, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(207, '10 hours', '2024-11-07 19:44:30.138009', 'ASUS ZenBook Flip 14, laptop 2 trong 1.', 'NVIDIA MX250', 'https://product.hstatic.net/1000374492/product/6_ef08e25d0a48430ebeccdb34017a4c45_master.png', 'ZenBook Flip 14', 'Windows 10', 26000000, 'Intel i7-10510U', '16', 14, 30, '1TB SSD', 1.5, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(208, '7 hours', '2024-11-07 19:44:30.138009', 'ASUS VivoBook 15, laptop giá rẻ cho học sinh.', 'Intel UHD Graphics', 'https://dlcdnwebimgs.asus.com/gain/859297d3-da9f-4807-81e8-7a2fdf14204d/', 'VivoBook 15', 'Windows 10', 17000000, 'Intel i3-10110U', '4', 15.6, 22, '128GB SSD', 1.6, 1, NULL, NULL, '2024-11-07 19:44:30.138009'),
(209, '6 hours', '2024-11-07 19:44:30.000000', 'Acer Aspire 5, laptop đa năng.', 'NVIDIA GTX 1650', 'https://cdn.tgdd.vn/Products/Images/44/314630/acer-aspire-5-a515-58gm-51lb-i5-nxkq4sv002-170923-015941-600x600.jpg', 'Aspire 5', 'Windows 10', 99999000, 'Intel i5-1035G1', '8', 15.6, 50, '512GB SSD', 1.5, 2, NULL, NULL, '2024-11-07 21:34:17.000000'),
(210, '8 hours', '2024-11-07 19:44:30.138009', 'Acer Swift 3, laptop mỏng nhẹ.', 'Intel Iris Xe', 'https://cdn.tgdd.vn/Products/Images/44/285765/acer-swift-3-sf314-512-56qn-i5-nxk0fsv002-ab-thumb-600x600.jpg', 'Swift 3', 'Windows 10', 84999000, 'Intel i7-1165G7', '16', 14, 30, '256GB SSD', 1.4, 2, NULL, NULL, '2024-11-07 19:44:30.138009'),
(211, '5 hours', '2024-11-07 19:44:30.138009', 'Acer Predator Helios 300, laptop gaming mạnh mẽ.', 'NVIDIA RTX 2060', 'https://product.hstatic.net/200000722513/product/76kg_1433e407838944df88bd906b57729c0a_1024x1024.png', 'Predator Helios 300', 'Windows 10', 129999000, 'Intel i7-9750H', '16', 17.3, 20, '1TB HDD', 2.5, 2, NULL, NULL, '2024-11-07 19:44:30.138009'),
(212, '7 hours', '2024-11-07 19:44:30.138009', 'Acer Aspire 7, laptop gaming giá tốt.', 'NVIDIA GTX 1650', 'https://cdn.tgdd.vn/Products/Images/44/313177/acer-aspire-7-gaming-a715-76g-5806-i5-nhqmfsv002-thumb-600x600.jpg', 'Aspire 7', 'Windows 10', 74999000, 'AMD Ryzen 5 3550H', '8', 15, 45, '512GB SSD', 1.6, 2, NULL, NULL, '2024-11-07 19:44:30.138009'),
(213, '10 hours', '2024-11-07 19:44:30.138009', 'Acer Spin 5, laptop 2 trong 1 tiện lợi.', 'Intel UHD Graphics', 'https://maytinhgiare.vn/hinh-anh/san-pham/Acer%20Spin%205%20SP513%203.jpg', 'Spin 5', 'Windows 10', 59999000, 'Intel i5-1035G4', '8', 13.3, 25, '256GB SSD', 1.3, 2, NULL, NULL, '2024-11-07 19:44:30.138009'),
(214, '6 hours', '2024-11-07 19:44:30.138009', 'Acer Nitro 5, laptop gaming hiệu suất cao.', 'NVIDIA GTX 1650 Ti', 'https://ttcenter.com.vn/uploads/product/vbpz7rhu-989-acer-nitro-5-an515-57-core-i5-11400h-8gb-512gb-rtx-1650-15-fhd-ips-144hz.jpg', 'Nitro 5', 'Windows 10', 89999000, 'Intel i5-9300H', '16', 15.6, 35, '512GB SSD', 1.7, 2, NULL, NULL, '2024-11-07 19:44:30.138009'),
(215, '12 hours', '2024-11-07 19:44:30.138009', 'Acer Swift 7, laptop cao cấp cho doanh nhân.', 'Intel Iris Plus', 'https://cdn.tgdd.vn/Products/Images/44/206568/acer-swift-7-i7-nxh98sv001-130220-030205-600x600.jpg', 'Swift 7', 'Windows 10', 109999000, 'Intel i7-1065G7', '16', 14, 40, '1TB SSD', 1.2, 2, NULL, NULL, '2024-11-07 19:44:30.138009'),
(216, '5 hours', '2024-11-07 19:44:30.138009', 'Acer Aspire 9, laptop sang trọng và hiện đại.', 'NVIDIA GTX 1650', 'https://cdn.tgdd.vn//GameApp/-1//thumb-800x450-38.png', 'Aspire 9', 'Windows 10', 94999000, 'AMD Ryzen 7 4800H', '16', 15.6, 28, '512GB SSD', 1.8, 2, NULL, NULL, '2024-11-07 19:44:30.138009'),
(217, '9 hours', '2024-11-07 19:44:30.138009', 'Acer Swift 3, laptop dành cho học sinh.', 'Intel UHD Graphics', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTykSNz0spf-976Z5ft7xn0K9iFaqnhPpi5nA&s', 'Swift 3', 'Windows 10', 69999000, 'Intel i3-1005G1', '8', 13.3, 50, '256GB SSD', 1.4, 2, NULL, NULL, '2024-11-07 19:44:30.138009'),
(218, '7 hours', '2024-11-07 19:44:30.138009', 'Acer Predator Triton 300, laptop gaming di động.', 'NVIDIA RTX 2060', 'https://bizweb.dktcdn.net/thumb/large/100/362/971/products/screenshot-2023-06-04-191006.png?v=1686754399120', 'Predator Triton 300', 'Windows 10', 79999000, 'Intel i7-10750H', '16', 15, 32, '1TB SSD', 1.6, 2, NULL, NULL, '2024-11-07 19:44:30.138009'),
(219, '8 hours', '2024-11-07 19:44:30.138009', 'Acer Chromebook 14, laptop cho học sinh.', 'Intel HD Graphics', 'https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/NUcAAOSwd-9jQJpe/$_3.JPG', 'Chromebook 14', 'Chrome OS', 84999000, 'Intel Celeron N3350', '4', 14, 20, '64GB eMMC', 1.5, 2, NULL, NULL, '2024-11-07 19:44:30.138009'),
(220, '5 hours', '2024-11-07 19:44:30.138009', 'Acer Predator Helios 500, laptop gaming chuyên nghiệp.', 'NVIDIA RTX 3080', 'https://gamalaptop.vn/wp-content/uploads/2021/09/Acer-Predator-Helios-500-i7-8750H-GTX-1070-01.jpg', 'Predator Helios 500', 'Windows 10', 99999000, 'Intel i9-11980HK', '32', 17.3, 15, '2TB SSD', 2.4, 2, NULL, NULL, '2024-11-07 19:44:30.138009'),
(221, '6 hours', '2024-11-07 19:44:30.138009', 'Acer Aspire 5, laptop giá rẻ cho học sinh.', 'AMD Radeon Graphics', 'https://anphat.com.vn/media/product/47157_acer_aspire_5_a515_58m_951t_nx_kq8sv_001_anphatpc55_1.jpg', 'Aspire 5', 'Windows 10', 64999000, 'AMD Ryzen 3 4300U', '8', 15.6, 40, '256GB SSD', 1.7, 2, NULL, NULL, '2024-11-07 19:44:30.138009'),
(222, '10 hours', '2024-11-07 19:44:30.138009', 'Acer Swift 5, laptop nhẹ nhất thế giới.', 'NVIDIA MX250', 'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2019_6_12_636959565767818811_acer-swift-5-sf514-53t-58pn-dd.png', 'Swift 5', 'Windows 10', 109999000, 'Intel i7-1065G7', '16', 14, 30, '1TB SSD', 1.5, 2, NULL, NULL, '2024-11-07 19:44:30.138009'),
(223, '7 hours', '2024-11-07 19:44:30.138009', 'Acer Aspire 15, laptop cho sinh viên.', 'Intel UHD Graphics', 'https://www.acervietnam.com.vn/wp-content/uploads/2024/04/Acer-Aspire-15-A15-51P-Anh-SP.webp', 'Aspire 15', 'Windows 10', 69999000, 'Intel i3-10110U', '4', 15.6, 22, '128GB SSD', 1.6, 2, NULL, NULL, '2024-11-07 19:44:30.138009'),
(224, '6 hours', '2024-11-07 19:44:30.138009', 'Acer Predator Triton 500, laptop gaming ấn tượng.', 'NVIDIA RTX 3070', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4utFDHJggKbq70VlJwYabuDUVB5Ml-rWJ7Q&s', 'Predator Triton 500', 'Windows 10', 89999000, 'Intel i7-10870H', '16', 15.6, 18, '512GB SSD', 1.8, 2, NULL, NULL, '2024-11-07 19:44:30.138009'),
(225, '5 hours', '2024-11-07 19:44:30.138009', 'Acer ConceptD 7, laptop sáng tạo cho designer.', 'NVIDIA GeForce RTX 2060', 'https://hanoicomputercdn.com/media/product/56767_conceptd_7_ezel__7_.png', 'ConceptD 7', 'Windows 10', 109999000, 'Intel i7-9750H', '32', 15, 25, '1TB SSD', 1.9, 2, NULL, NULL, '2024-11-07 19:44:30.138009'),
(226, '8 hours', '2024-11-07 19:44:30.138009', 'Acer Aspire 14, laptop mỏng nhẹ cho công việc.', 'Intel UHD Graphics', 'https://cdn.tgdd.vn/Products/Images/44/326637/acer-aspire-lite-14-51m-59bn-i5-nxktxsv001-100624-101857-600x600.jpg', 'Aspire 14', 'Windows 10', 79999000, 'Intel i5-1035G4', '8', 14, 20, '512GB SSD', 1.3, 2, NULL, NULL, '2024-11-07 19:44:30.138009'),
(227, '6 hours', '2024-11-07 19:44:30.138009', 'Acer Nitro 7, laptop gaming giá tốt.', 'NVIDIA GTX 1660', 'https://images.acer.com/is/image/acer/acer-nitro-7-ksp-7?$responsive$', 'Nitro 7', 'Windows 10', 89999000, 'Intel i5-9300H', '8', 15.6, 28, '512GB SSD', 1.8, 2, NULL, NULL, '2024-11-07 19:44:30.138009'),
(228, '9 hours', '2024-11-07 19:44:30.138009', 'Acer Swift 3, laptop cho doanh nhân.', 'Intel UHD Graphics', 'https://product.hstatic.net/200000680839/product/sf314-511-55qe-i5-1135g7-16gb-512gb-ssd-14-win11-chinh-hang-1648286256_3f993067768040dca9abc6311440bc0e.jpg', 'Swift 3', 'Windows 10', 74999000, 'Intel i5-1035G1', '8', 13.3, 35, '256GB SSD', 1.5, 2, NULL, NULL, '2024-11-07 19:44:30.138009'),
(229, '5 hours', '2024-11-07 19:44:30.138009', 'Acer Predator Helios 300, laptop gaming hiệu suất cao.', 'NVIDIA RTX 3070', 'https://anphat.com.vn/media/product/38317_', 'Predator Helios 300', 'Windows 10', 99999000, 'Intel i7-10870H', '16', 17.3, 15, '1TB SSD', 2.4, 2, NULL, NULL, '2024-11-07 19:44:30.138009'),
(230, '6 hours', '2024-11-07 19:44:30.138009', 'Acer Aspire 5, laptop dành cho học sinh.', 'AMD Radeon Graphics', 'https://cdn.tgdd.vn/Products/Images/44/314630/acer-aspire-5-a515-58gm-51lb-i5-nxkq4sv002-170923-015941-600x600.jpg', 'Aspire 5', 'Windows 10', 64999000, 'AMD Ryzen 3 4300U', '8', 15.6, 40, '256GB SSD', 1.7, 2, NULL, NULL, '2024-11-07 19:44:30.138009'),
(231, '10 hours', '2024-11-07 19:44:30.138009', 'Acer Spin 7, laptop 2 trong 1.', 'NVIDIA MX250', 'https://lapvip.vn/upload/products/thumb_630x0/acer-spin-7-sp714-61na-s1qa-2020-1710991024.jpg', 'Spin 7', 'Windows 10', 109999000, 'Intel i7-10510U', '16', 14, 30, '1TB SSD', 1.5, 2, NULL, NULL, '2024-11-07 19:44:30.138009'),
(232, '10 giờ', '2024-11-07 19:44:30.138009', 'MacBook Air với chip M1, hiệu năng cao và tiết kiệm năng lượng.', 'Apple M1', 'https://cdn.tgdd.vn/Files/2020/11/12/1306207/1_800x450.jpg', 'MacBook Air M1', 'macOS', 25000000, 'Apple M1', '8', 13.3, 10, '256GB SSD', 1.29, 3, NULL, NULL, '2024-11-07 19:44:30.138009'),
(233, '10 giờ', '2024-11-07 19:44:30.138009', 'MacBook Air với chip M1, dung lượng lưu trữ 512GB.', 'Apple M1', 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111883_macbookair.png', 'MacBook Air M1 (512GB)', 'macOS', 30000000, 'Apple M1', '8', 13.3, 8, '512GB SSD', 1.29, 3, NULL, NULL, '2024-11-07 19:44:30.138009'),
(234, '11 giờ', '2024-11-07 19:44:30.138009', 'MacBook Pro 13 với chip M1, hoàn hảo cho công việc và giải trí.', 'Apple M1', 'https://cdn.tgdd.vn/Files/2020/12/18/1314537/mac_air_m1_800x450.jpg', 'MacBook Pro 13 M1', 'macOS', 35000000, 'Apple M1', '16', 16, 5, '256GB SSD', 2, 3, NULL, NULL, '2024-11-07 19:44:30.138009'),
(235, '10 giờ', '2024-11-07 19:44:30.138009', 'MacBook Pro 13 với chip M1, dung lượng 512GB, hiệu suất mạnh mẽ.', 'Apple M1', 'https://cdn.tgdd.vn/Files/2021/09/26/1385726/7a_1280x720-800-resize.jpg', 'MacBook Pro 13 M1 (512GB)', 'macOS', 40000000, 'Apple M1', '16', 16, 4, '512GB SSD', 1.4, 3, NULL, NULL, '2024-11-07 19:44:30.138009'),
(236, '12 giờ', '2024-11-07 19:44:30.138009', 'MacBook Pro 14 với chip M1 Pro, hiệu năng cao cho người sáng tạo.', 'Apple M1 Pro', 'https://img.websosanh.vn/v10/users/review/images/njkl3rodltzgi/31-6jpg-6.jpg?compress=85', 'MacBook Pro 14 M1 Pro', 'macOS', 45000000, 'Apple M1 Pro', '16', 16, 3, '512GB SSD', 1.4, 3, NULL, NULL, '2024-11-07 19:44:30.138009'),
(237, '11 giờ', '2024-11-07 19:44:30.138009', 'MacBook Pro 16 với chip M1 Pro, lý tưởng cho đồ họa và video.', 'Apple M1 Pro', 'https://stcv4.hnammobile.com/downloads/f/so-sanh-macbook-air-01605290064.jpg', 'MacBook Pro 16 M1 Pro', 'macOS', 50000000, 'Apple M1 Pro', '16', 16, 2, '1TB SSD', 1.6, 3, NULL, NULL, '2024-11-07 19:44:30.138009'),
(238, '10 giờ', '2024-11-07 19:44:30.138009', 'MacBook Pro 14 với chip M1 Max, hiệu suất cực kỳ mạnh mẽ.', 'Apple M1 Max', 'https://queenmobile.net/wp-content/uploads/2024/06/macbook-air-apple-m1-chip-13-3-inch-da-duoc-tai-che-voi-cpu-8-nhan-va-gpu-7-nhan-mau-xam-khong-gian-g1243ll-a-image-1.jpg', 'MacBook Pro 14 M1 Max', 'macOS', 55000000, 'Apple M1 Max', '32', 14, 3, '1TB SSD', 1.4, 3, NULL, NULL, '2024-11-07 19:44:30.138009'),
(239, '10 giờ', '2024-11-07 19:44:30.138009', 'MacBook Pro 16 với chip M1 Max, hoàn hảo cho công việc chuyên nghiệp.', 'Apple M1 Max', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916322507', 'MacBook Pro 16 M1 Max', 'macOS', 60000000, 'Apple M1 Max', '32', 16, 3, '2TB SSD', 2.1, 3, NULL, NULL, '2024-11-07 19:44:30.138009'),
(240, '10 giờ', '2024-11-07 19:44:30.138009', 'MacBook Air M2, mỏng nhẹ và hiệu suất tốt.', 'Apple M2', 'https://ttcenter.com.vn/uploads/product/9np6f4nc-139-macbook-pro-14-m1-pro-16gb-512gb-like-new.jpg', 'MacBook Air M2', 'macOS', 32000000, 'Apple M2', '8', 13.3, 6, '256GB SSD', 1.29, 3, NULL, NULL, '2024-11-07 19:44:30.138009'),
(241, '10 giờ', '2024-11-07 19:44:30.138009', 'MacBook Air M2 với dung lượng 512GB, hiệu suất vượt trội.', 'Apple M2', 'https://nghipro.com/wp-content/uploads/2024/01/MacBook-Pro-16-inch-Intel-Space-Gray-1024x1024-1.png', 'MacBook Air M2 (512GB)', 'macOS', 37000000, 'Apple M2', '8', 13.3, 5, '512GB SSD', 1.29, 3, NULL, NULL, '2024-11-07 19:44:30.138009'),
(242, '11 giờ', '2024-11-07 19:44:30.138009', 'MacBook Pro 14 M2, phù hợp cho người sáng tạo nội dung.', 'Apple M2 Pro', 'https://product.hstatic.net/1000093649/product/macbook-pro-16inch-5_43ebcc0128f748e99793ef188a44d31f_1024x1024.jpg', 'MacBook Pro 14 M2', 'macOS', 43000000, 'Apple M2 Pro', '16', 14, 4, '512GB SSD', 1.4, 3, NULL, NULL, '2024-11-07 19:44:30.138009'),
(243, '12 giờ', '2024-11-07 19:44:30.138009', 'MacBook Pro 14 M2 với dung lượng 1TB, tối ưu cho công việc.', 'Apple M2 Pro', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4sJEDb_lYSOCkqAazodrkdrQ2RwCOLe_1hw&s', 'MacBook Pro 14 M2 (1TB)', 'macOS', 48000000, 'Apple M2 Pro', '16', 14, 3, '1TB SSD', 1.4, 3, NULL, NULL, '2024-11-07 19:44:30.138009'),
(244, '10 giờ', '2024-11-07 19:44:30.138009', 'MacBook Pro 16 M2, mạnh mẽ cho xử lý đồ họa.', 'Apple M2 Pro', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxnr0gIDg36K5CMCAdADzGFT5jDBzLeRWCRQ&s', 'MacBook Pro 16 M2', 'macOS', 53000000, 'Apple M2 Pro', '32', 16, 3, '1TB SSD', 1.6, 3, NULL, NULL, '2024-11-07 19:44:30.138009'),
(245, '11 giờ', '2024-11-07 19:44:30.138009', 'MacBook Pro 16 M2 với dung lượng 2TB, phục vụ cho chuyên gia.', 'Apple M2 Max', 'https://laptopvang.com/wp-content/uploads/2022/12/apple-macbook-pro-16-inch-scaled.jpg', 'MacBook Pro 16 M2 (2TB)', 'macOS', 58000000, 'Apple M2 Max', '32', 16, 3, '2TB SSD', 1.6, 3, NULL, NULL, '2024-11-07 19:44:30.138009'),
(246, '10 giờ', '2024-11-07 19:44:30.138009', 'MacBook Air 2020, thiết kế mỏng nhẹ, phù hợp cho học sinh sinh viên.', 'Intel Iris Plus', 'https://cdn2.cellphones.com.vn/x/media/catalog/product/b/o/bo-dan-full-macbook-pro-16-inch-2021-innostyle-6-in-1-2-2.jpg', 'MacBook Air 2020', 'macOS', 32000000, 'Intel i3', '8', 13.3, 10, '256GB SSD', 1.29, 3, NULL, NULL, '2024-11-07 19:44:30.138009'),
(247, '10 giờ', '2024-11-07 19:44:30.138009', 'MacBook Air 2020 với dung lượng 512GB, hiệu năng ổn định.', 'Intel Iris Plus', 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111340_macbook-pro-2023-14in.png', 'MacBook Air 2020 (512GB)', 'macOS', 36000000, 'Intel i5', '8', 13.3, 8, '512GB SSD', 1.29, 3, NULL, NULL, '2024-11-07 19:44:30.138009'),
(248, '11 giờ', '2024-11-07 19:44:30.138009', 'MacBook Pro 2020 13, cấu hình mạnh mẽ cho công việc văn phòng.', 'Intel Iris Plus', 'https://cdn.tgdd.vn/Products/Images/44/253706/s16/mac-pro-16-m1-bac-650x650.png', 'MacBook Pro 2020 13', 'macOS', 40000000, 'Intel i5', '16', 16, 5, '512GB SSD', 2, 3, NULL, NULL, '2024-11-07 19:44:30.138009');

-- --------------------------------------------------------

--
-- Table structure for table `laptops_orders`
--

CREATE TABLE `laptops_orders` (
  `id` bigint(20) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `totalPrice` int(11) DEFAULT NULL,
  `laptopId` bigint(20) DEFAULT NULL,
  `orderId` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `laptops_orders`
--

INSERT INTO `laptops_orders` (`id`, `quantity`, `totalPrice`, `laptopId`, `orderId`) VALUES
(2, 1, 19000000, 100, 2),
(3, 3, 64770000, 200, 3),
(4, 1, 20000000, 97, 4),
(5, 1, 32990000, 19, 5),
(18, 1, 17000000, 99, 1),
(20, 1, 15490000, 18, 19),
(21, 1, 25000000, 128, 20),
(22, 2, 48000000, 156, 21),
(23, 1, 60000000, 239, 22),
(24, 3, 58500000, 188, 23),
(25, 1, 17000000, 112, 24),
(26, 1, 109999000, 225, 25),
(27, 2, 52000000, 205, 26),
(28, 1, 18000000, 142, 27),
(29, 1, 18000000, 160, 28),
(30, 1, 18000000, 178, 29),
(31, 1, 40000000, 248, 30),
(32, 2, 48000000, 138, 31),
(33, 1, 19000000, 145, 32),
(34, 3, 299997000, 220, 33),
(40, 2, 199998000, 209, NULL),
(41, 1, 84999000, 210, NULL),
(42, 3, 389997000, 211, NULL),
(43, 2, 149998000, 212, NULL),
(44, 4, 239996000, 213, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderId` bigint(20) NOT NULL,
  `orderDate` datetime(6) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `userId` bigint(20) DEFAULT NULL,
  `voucherId` bigint(20) DEFAULT NULL,
  `orderAddress` varchar(255) DEFAULT NULL,
  `orderNote` varchar(255) DEFAULT NULL,
  `paymentMethod` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `shippingMethod` varchar(255) DEFAULT NULL,
  `totalPayment` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`orderId`, `orderDate`, `status`, `userId`, `voucherId`, `orderAddress`, `orderNote`, `paymentMethod`, `phoneNumber`, `shippingMethod`, `totalPayment`) VALUES
(1, '2024-12-27 21:15:42.000000', 'Đang xử lý', 1, NULL, '123 Đường Lê Lợi, Quận 1, TP.HCM', 'Liên hệ trước khi giao', 'Thanh toán khi nhận hàng', '0901234567', 'Giao hàng nhanh', 17000000),
(2, '2024-11-13 21:15:49.000000', 'Đã giao', 1, NULL, '456 Đường Trần Phú, Quận 5, TP.HCM', 'Giao đúng giờ, gói cẩn thận', 'Thẻ tín dụng', '0912345678', 'Giao hàng tiêu chuẩn', 19000000),
(3, '2024-11-13 21:15:56.000000', 'Đang giao', 2, NULL, '789 Đường Nguyễn Trãi, Quận 10, TP.HCM', 'Liên hệ trước khi giao hàng', 'Chuyển khoản', '0923456789', 'Giao hàng nhanh', 64770000),
(4, '2024-11-13 21:16:02.000000', 'Đã Giao', 3, NULL, '101 Đường Hùng Vương, Quận 7, TP.HCM', 'Thành công', 'Thanh toán khi nhận hàng', '0934567890', 'Giao hàng tiêu chuẩn', 20000000),
(5, '2024-11-13 21:16:09.000000', 'Đã giao', 4, NULL, '202 Đường Điện Biên Phủ, Quận 3, TP.HCM', 'Giao đúng hẹn, khách hài lòng', 'Thẻ tín dụng', '0945678901', 'Giao hàng nhanh', 32990000),
(19, '2024-04-08 16:00:00.000000', 'Đang xử lý', 5, NULL, '99 Đường Bạch Đằng, Quận Tân Bình, TP.HCM', 'Gọi trước khi giao', 'Chuyển khoản', '0912123456', 'Giao hàng nhanh', 15490000),
(20, '2024-05-17 21:45:00.000000', 'Đã thanh toán', 6, NULL, '88 Đường Cách Mạng Tháng Tám, Quận 3, TP.HCM', 'Giao hàng vào buổi chiều', 'Thẻ tín dụng', '0923344556', 'Giao hàng tiêu chuẩn', 25000000),
(21, '2024-06-19 18:30:00.000000', 'Đã giao', 7, NULL, '77 Đường Hai Bà Trưng, Quận 1, TP.HCM', 'Giao đúng giờ', 'Thanh toán khi nhận hàng', '0934556677', 'Giao hàng nhanh', 48000000),
(22, '2024-09-11 22:00:00.000000', 'Đã hủy', 8, NULL, '55 Đường Nam Kỳ Khởi Nghĩa, Quận 1, TP.HCM', 'Khách hàng hủy đơn hàng', 'Chuyển khoản', '0944667788', 'Giao hàng tiêu chuẩn', 0),
(23, '2024-08-17 17:00:00.000000', 'Đang giao', 9, NULL, '44 Đường Lê Văn Sỹ, Quận 3, TP.HCM', 'Gói kỹ sản phẩm', 'Thanh toán khi nhận hàng', '0955778899', 'Giao hàng nhanh', 58500000),
(24, '2024-08-15 20:45:00.000000', 'Đã thanh toán', 10, NULL, '33 Đường Nguyễn Đình Chiểu, Quận 3, TP.HCM', 'Gọi trước khi giao', 'Thẻ tín dụng', '0966889900', 'Giao hàng tiêu chuẩn', 17000000),
(25, '2024-08-22 23:00:00.000000', 'Đã giao', 11, NULL, '22 Đường Nguyễn Trãi, Quận 5, TP.HCM', 'Giao hàng đúng giờ', 'Chuyển khoản', '0977990011', 'Giao hàng nhanh', 109999000),
(26, '2024-10-16 19:30:00.000000', 'Đang xử lý', 12, NULL, '11 Đường Nguyễn Thị Minh Khai, Quận 1, TP.HCM', 'Khách hàng yêu cầu giao vào buổi sáng', 'Thanh toán khi nhận hàng', '0988001122', 'Giao hàng tiêu chuẩn', 52000000),
(27, '2024-01-18 18:00:00.000000', 'Đã thanh toán', 13, NULL, '101 Đường Võ Thị Sáu, Quận 3, TP.HCM', 'Khách hàng muốn gói quà', 'Thẻ tín dụng', '0999112233', 'Giao hàng nhanh', 18000000),
(28, '2024-09-20 14:23:31.000000', 'Đã giao', 14, NULL, '404 Đường Phạm Ngũ Lão, Quận 1, TP.HCM', 'Giao đúng địa chỉ', 'Chuyển khoản', '0901234545', 'Giao hàng nhanh', 18000000),
(29, '2024-07-30 14:24:56.000000', 'Đã thanh toán', 15, NULL, '55 Đường Điện Biên Phủ, Quận 3, TP.HCM', 'Khách hàng yêu cầu giao sau 2 giờ chiều', 'Thẻ tín dụng', '0902123456', 'Giao hàng nhanh', 18000000),
(30, '2024-07-10 14:25:04.000000', 'Đang xử lý', 16, NULL, '33 Đường Trần Hưng Đạo, Quận 5, TP.HCM', 'Liên hệ trước khi giao', 'Thanh toán khi nhận hàng', '0911223344', 'Giao hàng tiêu chuẩn', 40000000),
(31, '2024-06-01 14:25:11.000000', 'Đã giao', 17, NULL, '22 Đường Pasteur, Quận 1, TP.HCM', 'Giao vào buổi sáng', 'Chuyển khoản', '0922334455', 'Giao hàng nhanh', 48000000),
(32, '2024-02-10 14:25:16.000000', 'Đã hủy', 18, NULL, '11 Đường Võ Văn Tần, Quận 3, TP.HCM', 'Khách hàng hủy đơn hàng do thay đổi ý định', 'Chuyển khoản', '0933445566', 'Giao hàng tiêu chuẩn', 0),
(33, '2024-10-21 14:25:22.000000', 'Đang giao', 1, NULL, '44 Đường Nguyễn Văn Cừ, Quận 5, TP.HCM', 'Giao sau 1 giờ chiều', 'Thanh toán khi nhận hàng', '0944556677', 'Giao hàng nhanh', 299997000),
(39, '2024-11-13 15:57:27.000000', 'Đang xử lý', 4, NULL, '101 Đường Nguyễn Trãi, Quận 1, TP.HCM', 'Giao hàng vào buổi sáng', 'Thanh toán khi nhận hàng', '0901234567', 'Giao hàng nhanh', 5000000),
(40, '2024-11-13 15:57:38.000000', 'Đã giao', 5, NULL, '123 Đường Lê Lợi, Quận 3, TP.HCM', 'Giao hàng đúng hẹn', 'Thẻ tín dụng', '0912345678', 'Giao hàng tiêu chuẩn', 7500000),
(41, '2024-11-13 15:57:47.000000', 'Đã hủy', 7, NULL, '456 Đường Trần Phú, Quận 5, TP.HCM', 'Khách hàng thay đổi ý định', 'Chuyển khoản', '0923456789', 'Giao hàng nhanh', 0),
(42, '2024-11-13 15:57:54.000000', 'Đang giao', 8, NULL, '789 Đường Nguyễn Trãi, Quận 10, TP.HCM', 'Khách hàng yêu cầu giao buổi chiều', 'Thanh toán khi nhận hàng', '0934567890', 'Giao hàng nhanh', 6500000),
(43, '2024-11-13 15:58:01.000000', 'Đã thanh toán', 9, NULL, '202 Đường Điện Biên Phủ, Quận 2, TP.HCM', 'Giao đúng địa chỉ', 'Thẻ tín dụng', '0945678901', 'Giao hàng tiêu chuẩn', 5000000);

-- --------------------------------------------------------

--
-- Table structure for table `refresh_token`
--

CREATE TABLE `refreshtokens` (
	`userId` varchar(255),
  `token` varchar(255) NOT NULL primary key
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------


-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` bigint(20) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `dateOfBirth` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `addressDetail` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `ward` varchar(255) DEFAULT NULL,
  `role` varchar(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `address`, `createdAt`, `dateOfBirth`, `email`, `fullname`, `password`, `phone`, `username`, `updatedAt`, `addressDetail`, `district`, `province`, `ward`, `role`) VALUES
(1, '123 Đường ABC, Quận 1, TP.HCM', '2024-11-07 23:09:27.000000', NULL, 'nguyenvana@example.com', 'Nguyễn Văn A', '$2a$10$PG7TgfyRDUnuhpSbyu5ikOfFR.jR6zHGfpVpYfXWD..IiMmhnmJR.', '0909123456', 'nguyenvana', '2024-11-07 23:09:27.000000', 'Số 123, Đường ABC', 'Quận 1', 'TP.HCM', 'Phường 1', 'user'),
(2, '456 Đường DEF, Quận 2, TP.HCM', '2024-11-07 23:09:38.000000', NULL, 'tranthib@example.com', 'Trần Thị B', '$2a$10$WmcgUUVtiMJmjgUtsvmjq.J/2bt7u8rhpHgeCzRmUnJf65CznvSWe', '0912345678', 'tranthib', '2024-11-07 23:09:38.000000', 'Số 456, Đường DEF', 'Quận 2', 'TP.HCM', 'Phường 2', 'user'),
(3, '789 Đường GHI, Quận 3, TP.HCM', '2024-11-07 23:10:12.000000', NULL, 'lequocd@example.com', 'Lê Quốc D', '$2a$10$S6MJGG38PYYQkdsw13oNqKO7Rl6aPQzJSnx5U4.EYhI4R0Ppxe36W', '0923456789', 'lequocd', '2024-11-07 23:10:12.000000', 'Số 789, Đường GHI', 'Quận 3', 'TP.HCM', 'Phường 3', 'user'),
(4, '1011 Đường JKL, Quận 4, TP.HCM', '2024-11-07 23:10:45.000000', NULL, 'hoangphuoa@example.com', 'Hoàng Phú A', '$2a$10$YxcK4fTPWvFmmZuXjP0vmuH6Bfv4lLwR1t7jzTSV9nQ67v1V.lRS6', '0934567890', 'hoangphuoa', '2024-11-07 23:10:45.000000', 'Số 1011, Đường JKL', 'Quận 4', 'TP.HCM', 'Phường 4', 'user'),
(5, '1213 Đường MNO, Quận 5, TP.HCM', '2024-11-07 23:11:03.000000', NULL, 'phamminh@example.com', 'Phạm Minh C', '$2a$10$QiYfgclg2qkjf0qLX5wVnKK.k5nnDR2jsRiworTQfgqXM0Al0oHa6', '0945678901', 'phamminh', '2024-11-07 23:11:03.000000', 'Số 1213, Đường MNO', 'Quận 5', 'TP.HCM', 'Phường 5', 'user'),
(6, '1415 Đường PQR, Quận 6, TP.HCM', '2024-11-07 23:11:35.000000', NULL, 'ngocdung@example.com', 'Ngọc Dung', '$2a$10$F9BTrglWnT5dq6nUdLO4B2mI6pXhf1LfSbMN3nwiFOtXIQEj1Xe4', '0956789012', 'ngocdung', '2024-11-07 23:11:35.000000', 'Số 1415, Đường PQR', 'Quận 6', 'TP.HCM', 'Phường 6', 'user'),
(7, '1617 Đường STU, Quận 7, TP.HCM', '2024-11-07 23:11:58.000000', NULL, 'trangthao@example.com', 'Trần Thảo', '$2a$10$Imt79OQyWpGHXX8fXDPbGOxeRUQXk03jrt7tYZnx7G0F0w1Xh1Zf2', '0967890123', 'trangthao', '2024-11-07 23:11:58.000000', 'Số 1617, Đường STU', 'Quận 7', 'TP.HCM', 'Phường 7', 'user'),
(8, '1819 Đường VWX, Quận 8, TP.HCM', '2024-11-07 23:12:24.000000', NULL, 'hoanglan@example.com', 'Hoàng Lan', '$2a$10$Gb9oeLNnWs52Fz9q35en0c.W8GghH5ajMT4hKj9wdGfpw.BQoe0xS', '0978901234', 'hoanglan', '2024-11-07 23:12:24.000000', 'Số 1819, Đường VWX', 'Quận 8', 'TP.HCM', 'Phường 8', 'user'),
(9, '2021 Đường YZA, Quận 9, TP.HCM', '2024-11-07 23:12:46.000000', NULL, 'vuthanha@example.com', 'Vũ Thanh A', '$2a$10$HUBNGXk5k5zVVtnXcdhjfg0ORoK5yftP5u7U2TzOSjzzHkR56b1xa', '0989012345', 'vuthanha', '2024-11-07 23:12:46.000000', 'Số 2021, Đường YZA', 'Quận 9', 'TP.HCM', 'Phường 9', 'user'),
(10, '2223 Đường BCD, Quận 10, TP.HCM', '2024-11-07 23:13:03.000000', NULL, 'lethuong@example.com', 'Lê Thương', '$2a$10$FpEn5jxW8IXlD3l8g5Z5k5kJkkVwrGjOLlg8g5jrRSvZD38nZa6k6', '0990123456', 'lethuong', '2024-11-07 23:13:03.000000', 'Số 2223, Đường BCD', 'Quận 10', 'TP.HCM', 'Phường 10', 'user'),
(11, '2425 Đường EFG, Quận 11, TP.HCM', '2024-11-07 23:13:35.000000', NULL, 'lethi@example.com', 'Lê Thị D', '$2a$10$A2JgFDPusVx8KxFw2jQ4tABOGkOht3BrubAomjL9l.58mY47e9byu', '0912345678', 'lethi', '2024-11-07 23:13:35.000000', 'Số 2425, Đường EFG', 'Quận 11', 'TP.HCM', 'Phường 11', 'user'),
(12, '2627 Đường HIJ, Quận 12, TP.HCM', '2024-11-07 23:13:56.000000', NULL, 'nguyenhoang@example.com', 'Nguyễn Hoàng', '$2a$10$BFHp1xtJhA8eF7HEJt/JKD9n4Vcd1jy1e8xUbe6wJbD7.FJftvLzW', '0903456789', 'nguyenhoang', '2024-11-07 23:13:56.000000', 'Số 2627, Đường HIJ', 'Quận 12', 'TP.HCM', 'Phường 12', 'user'),
(13, '2829 Đường KLM, Quận 13, TP.HCM', '2024-11-07 23:14:16.000000', NULL, 'trangduong@example.com', 'Trần Dương', '$2a$10$LkZaFLtGhzDpfpJntKoMf5jm8e7evcyt5flx1A6d5SPlA0zRUFX1G', '0923456789', 'trangduong', '2024-11-07 23:14:16.000000', 'Số 2829, Đường KLM', 'Quận 13', 'TP.HCM', 'Phường 13', 'user'),
(14, '3031 Đường NOP, Quận 14, TP.HCM', '2024-11-07 23:14:35.000000', NULL, 'lethuy@example.com', 'Lê Thúy', '$2a$10$Mbjf3onufkm72I3AYQ5Bjm9U2h0z88T0SHlJX6S2v7pKcvQraXaZG', '0934567890', 'lethuy', '2024-11-07 23:14:35.000000', 'Số 3031, Đường NOP', 'Quận 14', 'TP.HCM', 'Phường 14', 'user'),
(15, '3233 Đường PQR, Quận 15, TP.HCM', '2024-11-07 23:14:56.000000', NULL, 'phanlong@example.com', 'Phan Long', '$2a$10$JxoEjpXyDZpP8JxXZp4tNm8T9iGs6YVoGC2z8pFndfl7Ch9ML7guu', '0945678901', 'phanlong', '2024-11-07 23:14:56.000000', 'Số 3233, Đường PQR', 'Quận 15', 'TP.HCM', 'Phường 15', 'user'),
(16, '3435 Đường STV, Quận 16, TP.HCM', '2024-11-07 23:15:16.000000', NULL, 'nguyenhoang@example.com', 'Nguyễn Hoàng', '$2a$10$S3FVpU8v9FXf7ROdRT5o3DGGVx.7wdbwH9YJAtU4AiEkub2WiTebm', '0978901234', 'nguyenhoang', '2024-11-07 23:15:16.000000', 'Số 3435, Đường STV', 'Quận 16', 'TP.HCM', 'Phường 16', 'user'),
(17, '123 Đường ABC, Quận 1, TP.HCM', NOW(), '1980-01-01', 'admin@example.com', 'Admin User', '$2a$10$FWOQhMt6eJOcfV5z9OAqAOaICJxbtAVcmzvQ8OKuihpv3QzIY1/qW', '0901234567', 'admin', NOW(), 'Số 123, Đường ABC', 'Quận 1', 'TP.HCM', 'Phường 1', 'admin'),
(18, '456 Đường DEF, Quận 2, TP.HCM', NOW(), '1990-05-15', 'user@example.com', 'User A', '$2a$10$FWOQhMt6eJOcfV5z9OAqAOaICJxbtAVcmzvQ8OKuihpv3QzIY1/qW', '0912345678', 'user', NOW(), 'Số 456, Đường DEF', 'Quận 2', 'TP.HCM', 'Phường 2', 'user');


-- --------------------------------------------------------


--
-- Table structure for table `vouchers`
--

CREATE TABLE `vouchers` (
  `voucherId` bigint(20) NOT NULL,
  `voucherCode` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `voucherDiscount` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vouchers`
--

INSERT INTO `vouchers` (`voucherId`, `voucherCode`, `description`, `voucherDiscount`) VALUES
(1, 'SUMMER10', 'Giảm 10% cho đợt khuyến mãi mùa hè', 10),
(2, 'WELCOME15', 'Giảm 15% cho lần mua hàng đầu tiên', 15),
(3, 'FREESHIP', 'Miễn phí vận chuyển cho đơn hàng trên 50$', NULL),
(4, 'NEWYEAR20', 'Giảm 20% mừng năm mới', 20),
(5, 'BLACKFRI30', 'Giảm 30% vào ngày Black Friday', 30),
(6, 'SPRINGSALE', 'Khuyến mãi đặc biệt cho mùa xuân', 5),
(7, 'STUDENT5', 'Giảm 5% cho sinh viên', 5),
(8, 'VIPMEMBER', 'Giảm giá đặc biệt cho thành viên VIP', 25),
(9, 'CYBER10', 'Giảm 10% vào ngày Cyber Monday', 10),
(10, 'HALLOWEEN15', 'Giảm 15% vào dịp Halloween', 15);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`brandId`);

--
-- Indexes for table `discounts`
--
ALTER TABLE `discounts`
  ADD PRIMARY KEY (`discountId`);

--
-- Indexes for table `installment_plans`
--
ALTER TABLE `installment_plans`
  ADD PRIMARY KEY (`installmentId`);

--
-- Indexes for table `laptops`
--
ALTER TABLE `laptops`
  ADD PRIMARY KEY (`laptopId`),
  ADD KEY `FKsc7r28uspm79n5kbhxjcsr9cp` (`brandId`),
  ADD KEY `FKjvr03drwdiuy9m0egjor6waqd` (`discountId`),
  ADD KEY `FKp4jq5cs764mlc14bx6ycg858q` (`orderId`);

--
-- Indexes for table `laptops_orders`
--
ALTER TABLE `laptops_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK7w9aeq5x3adc7pa65033v5jt9` (`laptopId`),
  ADD KEY `FKry3n9ncks0lewbiyo76q5t417` (`orderId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`),
  ADD UNIQUE KEY `UKp3w35w4nx6f4qt5m9me6hn84e` (`voucherId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- Indexes for table `user_role`
--


--
-- Indexes for table `vouchers`
--
ALTER TABLE `vouchers`
  ADD PRIMARY KEY (`voucherId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `brandId` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `discounts`
--
ALTER TABLE `discounts`
  MODIFY `discountId` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `installment_plans`
--
ALTER TABLE `installment_plans`
  MODIFY `installmentId` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `laptops`
--
ALTER TABLE `laptops`
  MODIFY `laptopId` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=249;

--
-- AUTO_INCREMENT for table `laptops_orders`
--
ALTER TABLE `laptops_orders`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderId` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `vouchers`
--
ALTER TABLE `vouchers`
  MODIFY `voucherId` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `laptops`
--
ALTER TABLE `laptops`
  ADD CONSTRAINT `FKjvr03drwdiuy9m0egjor6waqd` FOREIGN KEY (`discountId`) REFERENCES `discounts` (`discountId`),
  ADD CONSTRAINT `FKp4jq5cs764mlc14bx6ycg858q` FOREIGN KEY (`orderId`) REFERENCES `orders` (`orderId`),
  ADD CONSTRAINT `FKsc7r28uspm79n5kbhxjcsr9cp` FOREIGN KEY (`brandId`) REFERENCES `brands` (`brandId`);

--
-- Constraints for table `laptops_orders`
--
ALTER TABLE `laptops_orders`
  ADD CONSTRAINT `FK7w9aeq5x3adc7pa65033v5jt9` FOREIGN KEY (`laptopId`) REFERENCES `laptops` (`laptopId`),
  ADD CONSTRAINT `FKry3n9ncks0lewbiyo76q5t417` FOREIGN KEY (`orderId`) REFERENCES `orders` (`orderId`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `FK6co8q7ko456baksb6tdjq2dfv` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`),
  ADD CONSTRAINT `FKgpwojd1dbx2rns87d67pydkv6` FOREIGN KEY (`voucherId`) REFERENCES `vouchers` (`voucherId`);


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
