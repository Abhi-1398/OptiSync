CREATE DATABASE  IF NOT EXISTS `optisync` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `optisync`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: optisync
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `assembly`
--

DROP TABLE IF EXISTS `assembly`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assembly` (
  `entry_no` int NOT NULL,
  `date` date NOT NULL,
  `order_id` int NOT NULL,
  `part_id` int NOT NULL,
  `received_part_qty` int NOT NULL,
  `targeted_value` int NOT NULL,
  `achieve` int NOT NULL,
  PRIMARY KEY (`entry_no`),
  KEY `a1_idx` (`order_id`),
  KEY `a2_idx` (`part_id`),
  CONSTRAINT `a1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `a2` FOREIGN KEY (`part_id`) REFERENCES `parts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assembly`
--

LOCK TABLES `assembly` WRITE;
/*!40000 ALTER TABLE `assembly` DISABLE KEYS */;
/*!40000 ALTER TABLE `assembly` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (1,'Shirish Gaikwad'),(2,'Abhishek Patil');
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `person_name` varchar(45) NOT NULL,
  `contact_no` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `registration_date` date NOT NULL,
  `plan_id` int NOT NULL,
  `payment_status` tinyint DEFAULT NULL,
  `plan_startdate` date DEFAULT NULL,
  `plan_enddate` date DEFAULT NULL,
  `admin_approval` tinyint NOT NULL DEFAULT '0',
  `mode_of_ transaction` varchar(45) DEFAULT 'Online',
  PRIMARY KEY (`id`),
  KEY `c1_idx` (`plan_id`),
  CONSTRAINT `co1` FOREIGN KEY (`plan_id`) REFERENCES `plans` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cpm`
--

DROP TABLE IF EXISTS `cpm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cpm` (
  `id` int NOT NULL,
  `company_id` int NOT NULL,
  `product_id` int NOT NULL,
  `part_id` int NOT NULL,
  `store_ct` int NOT NULL,
  `production_ct` int NOT NULL,
  `vendor_ct` int NOT NULL,
  `assembly_ct` int NOT NULL,
  `dispatch_ct` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `c_idx` (`company_id`),
  KEY `c1_idx` (`product_id`),
  KEY `c2_idx` (`part_id`),
  CONSTRAINT `c` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`),
  CONSTRAINT `c1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  CONSTRAINT `c2` FOREIGN KEY (`part_id`) REFERENCES `parts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cpm`
--

LOCK TABLES `cpm` WRITE;
/*!40000 ALTER TABLE `cpm` DISABLE KEYS */;
/*!40000 ALTER TABLE `cpm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dispatch`
--

DROP TABLE IF EXISTS `dispatch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dispatch` (
  `entry_no` int NOT NULL,
  `date` date DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `received_product_qty` int DEFAULT NULL,
  `tageted_value` int DEFAULT NULL,
  `achieved` int DEFAULT NULL,
  `dispatcher_name` varchar(45) DEFAULT NULL,
  `dispatch_status` int DEFAULT NULL,
  PRIMARY KEY (`entry_no`),
  KEY `d_idx` (`order_id`),
  KEY `d1_idx` (`product_id`),
  KEY `d2_idx` (`dispatch_status`),
  CONSTRAINT `d` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `d1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  CONSTRAINT `d2` FOREIGN KEY (`dispatch_status`) REFERENCES `dispatch_status` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dispatch`
--

LOCK TABLES `dispatch` WRITE;
/*!40000 ALTER TABLE `dispatch` DISABLE KEYS */;
/*!40000 ALTER TABLE `dispatch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dispatch_status`
--

DROP TABLE IF EXISTS `dispatch_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dispatch_status` (
  `id` int NOT NULL,
  `status_meaning` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dispatch_status`
--

LOCK TABLES `dispatch_status` WRITE;
/*!40000 ALTER TABLE `dispatch_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `dispatch_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forward`
--

DROP TABLE IF EXISTS `forward`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forward` (
  `id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forward`
--

LOCK TABLES `forward` WRITE;
/*!40000 ALTER TABLE `forward` DISABLE KEYS */;
/*!40000 ALTER TABLE `forward` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `id` int NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `company_id` int NOT NULL,
  `role_id` int NOT NULL,
  `forgetpass_status` bit(1) DEFAULT NULL,
  `setup_status` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `l1_idx` (`company_id`),
  KEY `l2_idx` (`role_id`),
  CONSTRAINT `l1` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`),
  CONSTRAINT `l2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_seq`
--

DROP TABLE IF EXISTS `login_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_seq`
--

LOCK TABLES `login_seq` WRITE;
/*!40000 ALTER TABLE `login_seq` DISABLE KEYS */;
INSERT INTO `login_seq` VALUES (1);
/*!40000 ALTER TABLE `login_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `machines`
--

DROP TABLE IF EXISTS `machines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `machines` (
  `id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `company_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `m1_idx` (`company_id`),
  CONSTRAINT `m1` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `machines`
--

LOCK TABLES `machines` WRITE;
/*!40000 ALTER TABLE `machines` DISABLE KEYS */;
/*!40000 ALTER TABLE `machines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `master_vendor`
--

DROP TABLE IF EXISTS `master_vendor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `master_vendor` (
  `id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `part_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `master_vendor`
--

LOCK TABLES `master_vendor` WRITE;
/*!40000 ALTER TABLE `master_vendor` DISABLE KEYS */;
/*!40000 ALTER TABLE `master_vendor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL,
  `client_id` int NOT NULL,
  `company_id` int NOT NULL,
  `product_id` int NOT NULL,
  `product_qty` int NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `dispatch_qty` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `o1_idx` (`company_id`),
  KEY `o2_idx` (`client_id`),
  KEY `o3_idx` (`product_id`),
  CONSTRAINT `o1` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`),
  CONSTRAINT `o2` FOREIGN KEY (`client_id`) REFERENCES `client` (`id`),
  CONSTRAINT `o3` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parts`
--

DROP TABLE IF EXISTS `parts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parts` (
  `id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `p1_idx` (`product_id`),
  CONSTRAINT `p1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parts`
--

LOCK TABLES `parts` WRITE;
/*!40000 ALTER TABLE `parts` DISABLE KEYS */;
/*!40000 ALTER TABLE `parts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plans`
--

DROP TABLE IF EXISTS `plans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plans` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `user_no` int NOT NULL,
  `duration` int NOT NULL,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plans`
--

LOCK TABLES `plans` WRITE;
/*!40000 ALTER TABLE `plans` DISABLE KEYS */;
INSERT INTO `plans` VALUES (1,'Gold',5,270,5000),(2,'Silver',5,180,4000),(3,'Bronze',5,90,3000);
/*!40000 ALTER TABLE `plans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `company_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pr1_idx` (`company_id`),
  CONSTRAINT `pr1` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `production`
--

DROP TABLE IF EXISTS `production`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `production` (
  `entry_no` int NOT NULL,
  `order_id` int NOT NULL,
  `raw_material_id` int NOT NULL,
  `received_qty` int NOT NULL,
  `date` date NOT NULL,
  `target_value` int NOT NULL,
  `achieve` int NOT NULL,
  `current_qty` int NOT NULL,
  `operator_name` varchar(200) NOT NULL,
  `machine_id` int NOT NULL,
  PRIMARY KEY (`entry_no`),
  KEY `p1_idx` (`order_id`),
  KEY `p2_idx` (`raw_material_id`),
  KEY `p3_idx` (`machine_id`),
  CONSTRAINT `pd1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `pd2` FOREIGN KEY (`raw_material_id`) REFERENCES `raw_materials` (`id`),
  CONSTRAINT `pd3` FOREIGN KEY (`machine_id`) REFERENCES `machines` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `production`
--

LOCK TABLES `production` WRITE;
/*!40000 ALTER TABLE `production` DISABLE KEYS */;
/*!40000 ALTER TABLE `production` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `raw_materials`
--

DROP TABLE IF EXISTS `raw_materials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `raw_materials` (
  `id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `part_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `raw1_idx` (`part_id`),
  CONSTRAINT `raw1` FOREIGN KEY (`part_id`) REFERENCES `parts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `raw_materials`
--

LOCK TABLES `raw_materials` WRITE;
/*!40000 ALTER TABLE `raw_materials` DISABLE KEYS */;
/*!40000 ALTER TABLE `raw_materials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Manager'),(2,'Store');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles_seq`
--

DROP TABLE IF EXISTS `roles_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles_seq`
--

LOCK TABLES `roles_seq` WRITE;
/*!40000 ALTER TABLE `roles_seq` DISABLE KEYS */;
INSERT INTO `roles_seq` VALUES (51);
/*!40000 ALTER TABLE `roles_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock` (
  `entry_no` int NOT NULL,
  `date` date DEFAULT NULL,
  `raw_material_id` int NOT NULL,
  `raw_material_qty` int NOT NULL,
  `final_raw_material_qty` int NOT NULL,
  `part_id` int NOT NULL,
  `part_qty` int NOT NULL,
  `final_part_qty` int NOT NULL,
  `company_id` int NOT NULL,
  PRIMARY KEY (`entry_no`),
  KEY `s1_idx` (`company_id`),
  KEY `s2_idx` (`raw_material_id`),
  KEY `s3_idx` (`part_id`),
  CONSTRAINT `s1` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`),
  CONSTRAINT `s2` FOREIGN KEY (`raw_material_id`) REFERENCES `raw_materials` (`id`),
  CONSTRAINT `s3` FOREIGN KEY (`part_id`) REFERENCES `parts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stores`
--

DROP TABLE IF EXISTS `stores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stores` (
  `enrty_no` int NOT NULL,
  `date` date DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  `raw_material_id` int DEFAULT NULL,
  `raw_material_qty` int DEFAULT NULL,
  `forward_id` int DEFAULT NULL,
  `part_id` int DEFAULT NULL,
  `part_qty` int DEFAULT NULL,
  PRIMARY KEY (`enrty_no`),
  KEY `st_idx` (`order_id`),
  KEY `st1_idx` (`raw_material_id`),
  KEY `st2_idx` (`part_id`),
  KEY `st3_idx` (`forward_id`),
  CONSTRAINT `st` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `st1` FOREIGN KEY (`raw_material_id`) REFERENCES `raw_materials` (`id`),
  CONSTRAINT `st2` FOREIGN KEY (`part_id`) REFERENCES `parts` (`id`),
  CONSTRAINT `st3` FOREIGN KEY (`forward_id`) REFERENCES `forward` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stores`
--

LOCK TABLES `stores` WRITE;
/*!40000 ALTER TABLE `stores` DISABLE KEYS */;
/*!40000 ALTER TABLE `stores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendormap`
--

DROP TABLE IF EXISTS `vendormap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendormap` (
  `vendor_id` int NOT NULL,
  `company_id` int NOT NULL,
  PRIMARY KEY (`vendor_id`),
  KEY `v2_idx` (`company_id`),
  CONSTRAINT `v1` FOREIGN KEY (`vendor_id`) REFERENCES `master_vendor` (`id`),
  CONSTRAINT `v2` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendormap`
--

LOCK TABLES `vendormap` WRITE;
/*!40000 ALTER TABLE `vendormap` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendormap` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-19  8:36:47
