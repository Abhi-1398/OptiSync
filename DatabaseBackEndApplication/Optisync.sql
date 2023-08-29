CREATE DATABASE  IF NOT EXISTS `optisync1` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `optisync1`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: optisync1
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
  `assembly_entry_no` int NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT (curdate()),
  `order_id` int NOT NULL,
  `part_id` int NOT NULL,
  `received_part_qty` int NOT NULL,
  `targeted_value` int NOT NULL,
  `achieve` int NOT NULL,
  `current_qty` int DEFAULT NULL,
  PRIMARY KEY (`assembly_entry_no`),
  KEY `a1_idx` (`order_id`),
  KEY `a2_idx` (`part_id`),
  CONSTRAINT `a1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  CONSTRAINT `a2` FOREIGN KEY (`part_id`) REFERENCES `parts` (`part_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assembly`
--

LOCK TABLES `assembly` WRITE;
/*!40000 ALTER TABLE `assembly` DISABLE KEYS */;
INSERT INTO `assembly` VALUES (1,'2023-08-26',2,10,1,100,98,500);
/*!40000 ALTER TABLE `assembly` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client` (
  `client_id` int NOT NULL AUTO_INCREMENT,
  `client_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (1,'Royal Enfield'),(2,'Bajaj Auto'),(3,'Maruti Suzuki Limited'),(4,'Godrej Group'),(5,'Mahindra & Mahindra Limited'),(6,'Larsent & Toubro Limited'),(7,'Dabur India Limited'),(8,'Hindustan Unilever Limited'),(9,'Apollo Tyres');
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `company_id` int NOT NULL AUTO_INCREMENT,
  `company_name` varchar(255) NOT NULL,
  `person_name` varchar(255) NOT NULL,
  `contact_no` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `registration_date` datetime(6) DEFAULT NULL,
  `plan_id` int NOT NULL,
  `payment_status` bit(1) DEFAULT NULL,
  `plan_startdate` datetime(6) DEFAULT NULL,
  `plan_enddate` datetime(6) DEFAULT NULL,
  `admin_approval` bit(1) NOT NULL DEFAULT b'0',
  `mode_of_transaction` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`company_id`),
  KEY `c1_idx` (`plan_id`),
  CONSTRAINT `co1` FOREIGN KEY (`plan_id`) REFERENCES `plans` (`plan_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'1K2K Dosing & Dispensing Pvt Ltd. Pune','Suryakant Dhamdhere','8793456789','surya@gmail.com','2023-08-22 00:00:00.000000',1,_binary '','2023-08-23 00:00:00.000000','2024-05-22 00:00:00.000000',_binary '','Online'),(2,'360 Degree Media. Pune','Akash Thosar','98794561599','akash1@gmail.com','2023-08-22 00:00:00.000000',2,_binary '','2023-08-23 00:00:00.000000',NULL,_binary '\0','Online'),(3,'3c It Solutions & Telecoms India Pvt Ltd.','Punnet Pinto','8793567895','pintopuneet@gmail.com','2023-08-22 00:00:00.000000',3,_binary '','2023-08-23 00:00:00.000000',NULL,_binary '\0','Online'),(4,'Optisync Pvt Ltd.','Shirish gaikwad','8793467456','rajeshirish123@gmail.com','2023-08-22 00:00:00.000000',1,_binary '','2023-02-12 00:00:00.000000','2025-12-25 00:00:00.000000',_binary '\0','Online'),(5,'Ashok Leyland','Karan Thakare','9979152420','karansthakare96@gmail.com','2023-08-23 00:00:00.000000',2,_binary '','2023-08-23 00:00:00.000000',NULL,_binary '','Online'),(10,'Advita Biotech','Advita Mali','8521479652','godschild@gmail.com',NULL,3,_binary '','2023-08-23 00:00:00.000000','2023-11-22 00:00:00.000000',_binary '','Online'),(11,'ChatGPT Manufacturing','Venkteshwara Sutar','1234567895','rajeshirish123@gmail.com',NULL,2,_binary '','2023-08-24 00:00:00.000000','2024-02-20 00:00:00.000000',_binary '',NULL),(12,'nwqfkje','Karan Thakare','1234567895','vaibhavbhoge@gmail.com',NULL,2,_binary '','2023-08-24 00:00:00.000000',NULL,_binary '\0','Online'),(13,'sfhdsgfhhrj','Abhinav Dubey','1234562589','rajeshirish123@gmail.com','2023-08-24 05:30:00.000000',2,_binary '','2023-08-24 00:00:00.000000',NULL,_binary '\0','Online'),(14,'3kg weight gain','Venky Sir','9979152420','vaibhavbhoge@gmail.com','2023-08-24 05:30:00.000000',2,_binary '','2023-08-24 00:00:00.000000',NULL,_binary '\0','online'),(15,'Shirish Gaikwad','Karan Thakare','9979152420','vaibhavbhoge@gmail.com','2023-08-24 05:30:00.000000',2,_binary '','2023-08-24 00:00:00.000000',NULL,_binary '\0','online'),(16,'dfvdv','Venky Sir','9979152420','rajeshirish123@gmail.com','2023-08-24 05:30:00.000000',2,_binary '','2023-08-24 00:00:00.000000',NULL,_binary '\0','online'),(17,'efhevwfhv','Ashish Thakur','789456123','rajeshirish123@gmail.com','2023-08-25 05:30:00.000000',2,_binary '','2023-08-25 00:00:00.000000','2024-02-21 00:00:00.000000',_binary '','online'),(18,'Styaam induastries','Abdul Ahire','789456135','vaibhavbhoge@gmail.com','2023-08-25 05:30:00.000000',2,_binary '','2023-08-26 00:00:00.000000','2024-02-22 00:00:00.000000',_binary '','online'),(19,'Ajayay & naru companies','Ajay Narkhede','7894561258','ajay@gmail.com','2023-08-25 05:30:00.000000',3,_binary '','2023-08-26 00:00:00.000000','2023-11-24 00:00:00.000000',_binary '','online');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cpm`
--

DROP TABLE IF EXISTS `cpm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cpm` (
  `cpm_id` int NOT NULL AUTO_INCREMENT,
  `company_id` int NOT NULL,
  `product_id` int NOT NULL,
  `part_id` int NOT NULL,
  `store_ct` int NOT NULL,
  `production_ct` int NOT NULL,
  `vendor_ct` int NOT NULL,
  `assembly_ct` int NOT NULL,
  `dispatch_ct` int NOT NULL,
  PRIMARY KEY (`cpm_id`),
  KEY `c_idx` (`company_id`),
  KEY `c1_idx` (`product_id`),
  KEY `c2_idx` (`part_id`),
  CONSTRAINT `c` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`),
  CONSTRAINT `c1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  CONSTRAINT `c2` FOREIGN KEY (`part_id`) REFERENCES `parts` (`part_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cpm`
--

LOCK TABLES `cpm` WRITE;
/*!40000 ALTER TABLE `cpm` DISABLE KEYS */;
INSERT INTO `cpm` VALUES (1,5,5,10,2,2,2,2,2),(2,18,12,16,2,2,2,2,2);
/*!40000 ALTER TABLE `cpm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dispatch`
--

DROP TABLE IF EXISTS `dispatch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dispatch` (
  `dispatch_entry_no` int NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `received_product_qty` int DEFAULT NULL,
  `tageted_value` int DEFAULT NULL,
  `achieved` int DEFAULT NULL,
  `dispatcher_name` varchar(45) DEFAULT NULL,
  `dispatch_status` int DEFAULT NULL,
  PRIMARY KEY (`dispatch_entry_no`),
  KEY `d_idx` (`order_id`),
  KEY `d1_idx` (`product_id`),
  KEY `d2_idx` (`dispatch_status`),
  CONSTRAINT `d` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  CONSTRAINT `d1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  CONSTRAINT `d2` FOREIGN KEY (`dispatch_status`) REFERENCES `dispatch_status` (`dispatch_status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dispatch`
--

LOCK TABLES `dispatch` WRITE;
/*!40000 ALTER TABLE `dispatch` DISABLE KEYS */;
INSERT INTO `dispatch` VALUES (1,'2023-08-31',2,4,12,0,0,NULL,NULL),(2,'2023-08-26',3,9,15,0,0,NULL,NULL),(3,'2023-08-26',2,6,150,0,0,NULL,NULL),(4,'2023-08-26',2,6,150,0,0,NULL,NULL),(5,'2023-08-27',3,6,99,0,0,NULL,NULL);
/*!40000 ALTER TABLE `dispatch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dispatch_status`
--

DROP TABLE IF EXISTS `dispatch_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dispatch_status` (
  `dispatch_status_id` int NOT NULL AUTO_INCREMENT,
  `status_meaning` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`dispatch_status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dispatch_status`
--

LOCK TABLES `dispatch_status` WRITE;
/*!40000 ALTER TABLE `dispatch_status` DISABLE KEYS */;
INSERT INTO `dispatch_status` VALUES (1,'Product Ready'),(2,' Approval Send to Manager'),(3,'Awaiting Approval'),(4,'Approved by Manager'),(5,'Dispatched');
/*!40000 ALTER TABLE `dispatch_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forward`
--

DROP TABLE IF EXISTS `forward`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forward` (
  `forward_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`forward_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forward`
--

LOCK TABLES `forward` WRITE;
/*!40000 ALTER TABLE `forward` DISABLE KEYS */;
INSERT INTO `forward` VALUES (1,'Production'),(2,'Assembly'),(3,'vendor'),(4,'Dispatch');
/*!40000 ALTER TABLE `forward` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `login_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `company_id` int NOT NULL,
  `role_id` int NOT NULL,
  `forgetpass_status` bit(1) DEFAULT b'0',
  `setup_status` bit(1) DEFAULT b'0',
  PRIMARY KEY (`login_id`),
  KEY `l1_idx` (`company_id`),
  KEY `l2_idx` (`role_id`),
  CONSTRAINT `l1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`),
  CONSTRAINT `l2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'Shirish.admin','Shirish@admin',4,1,_binary '\0',_binary ''),(83,'Ashok .store','Ashok @store',5,3,_binary '\0',_binary '\0'),(84,'Ashok .manager','Ashok @manager',5,2,_binary '\0',_binary '\0'),(85,'Ashok .production','Ashok @production',5,4,_binary '\0',_binary '\0'),(86,'Ashok .assembly','Ashok @assembly',5,5,_binary '\0',_binary '\0'),(87,'Ashok .dispatch','Ashok @dispatch',5,6,_binary '\0',_binary '\0'),(108,'efhevw.store','efhevw@store',17,3,_binary '\0',_binary '\0'),(109,'efhevw.manager','efhevw@manager',17,2,_binary '\0',_binary '\0'),(110,'efhevw.production','efhevw@production',17,4,_binary '\0',_binary '\0'),(111,'efhevw.assembly','efhevw@assembly',17,5,_binary '\0',_binary '\0'),(112,'efhevw.dispatch','efhevw@dispatch',17,6,_binary '\0',_binary '\0'),(113,'Ajayay.store','Ajayay@store',19,3,_binary '\0',_binary '\0'),(114,'Ajayay.manager','Ajayay@manager',19,2,_binary '\0',_binary '\0'),(115,'Ajayay.production','Ajayay@production',19,4,_binary '\0',_binary '\0'),(116,'Ajayay.assembly','Ajayay@assembly',19,5,_binary '\0',_binary '\0'),(117,'Ajayay.dispatch','Ajayay@dispatch',19,6,_binary '\0',_binary '\0'),(118,'Styaam.store','Styaam@store',18,3,_binary '\0',_binary '\0'),(119,'Styaam.manager','Styaam@manager',18,2,_binary '\0',_binary '\0'),(120,'Styaam.production','Styaam@production',18,4,_binary '\0',_binary '\0'),(121,'Styaam.assembly','Styaam@assembly',18,5,_binary '\0',_binary '\0'),(122,'Styaam.dispatch','Styaam@dispatch',18,6,_binary '\0',_binary '\0'),(123,'1K2K D.store','1K2K D@store',1,3,_binary '\0',_binary '\0'),(124,'1K2K D.manager','1K2K D@manager',1,2,_binary '\0',_binary '\0'),(125,'1K2K D.production','1K2K D@production',1,4,_binary '\0',_binary '\0'),(126,'1K2K D.assembly','1K2K D@assembly',1,5,_binary '\0',_binary '\0'),(127,'1K2K D.dispatch','1K2K D@dispatch',1,6,_binary '\0',_binary '\0');
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
  `machine_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `machine_description` varchar(255) DEFAULT NULL,
  `company_id` int NOT NULL,
  PRIMARY KEY (`machine_id`),
  KEY `m1_idx` (`company_id`),
  CONSTRAINT `m1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `machines`
--

LOCK TABLES `machines` WRITE;
/*!40000 ALTER TABLE `machines` DISABLE KEYS */;
INSERT INTO `machines` VALUES (1,'VMC','vmc machine',5),(2,'Grinding','frinding machine',5),(3,'drill machine','Industial drill machine',5),(4,'Hand Polishimg','Hand poslishing machine',5),(5,'ScrewDriver','to fit screws',5),(6,'Top Drill machine','Drilling machine',5),(7,'Lathe Machine','lathe machine to perform different Operation',5),(8,'','',5),(9,'Lathe machine','Lathe Machine',18);
/*!40000 ALTER TABLE `machines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `master_vendor`
--

DROP TABLE IF EXISTS `master_vendor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `master_vendor` (
  `master_vendor_id` int NOT NULL AUTO_INCREMENT,
  `master_vendor_name` varchar(255) DEFAULT NULL,
  `master_vendor_part_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`master_vendor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `master_vendor`
--

LOCK TABLES `master_vendor` WRITE;
/*!40000 ALTER TABLE `master_vendor` DISABLE KEYS */;
INSERT INTO `master_vendor` VALUES (1,'Karan','screws'),(2,'Karan','screws'),(3,'Karan','screws'),(4,'Karan','screws'),(5,'',''),(6,'Karan','screws'),(7,'Karan','screws'),(8,'','1');
/*!40000 ALTER TABLE `master_vendor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `client_id` int NOT NULL,
  `company_id` int NOT NULL,
  `product_id` int NOT NULL,
  `product_qty` int NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `dispatch_qty` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`order_id`),
  KEY `o1_idx` (`company_id`),
  KEY `o2_idx` (`client_id`),
  KEY `o3_idx` (`product_id`),
  CONSTRAINT `o1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`),
  CONSTRAINT `o2` FOREIGN KEY (`client_id`) REFERENCES `client` (`client_id`),
  CONSTRAINT `o3` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,2,1,100,'2023-08-23','2023-09-23',500),(2,1,5,5,100,'2023-08-29','2023-08-29',100),(3,4,5,5,170,'2023-08-29','2023-08-31',100),(4,1,5,6,150,'2023-08-26','2023-08-30',40),(5,3,18,12,150,'2023-08-28','2027-10-27',0);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parts`
--

DROP TABLE IF EXISTS `parts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parts` (
  `part_id` int NOT NULL AUTO_INCREMENT,
  `part_name` varchar(255) DEFAULT NULL,
  `part_description` varchar(255) DEFAULT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`part_id`),
  KEY `p1_idx` (`product_id`),
  CONSTRAINT `p1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parts`
--

LOCK TABLES `parts` WRITE;
/*!40000 ALTER TABLE `parts` DISABLE KEYS */;
INSERT INTO `parts` VALUES (10,'fef','crevr',5),(11,'dfdbf','dbfdb',5),(12,'xxxxcc','xxxvv',3),(13,'fork ','4130 steel 300mm OD x270mm ID',6),(14,'pin ','pin',6),(15,'Cake','Blueberry',7),(16,'chager','5v ac adapter',12);
/*!40000 ALTER TABLE `parts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plans`
--

DROP TABLE IF EXISTS `plans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plans` (
  `plan_id` int NOT NULL AUTO_INCREMENT,
  `plan_name` varchar(255) DEFAULT NULL,
  `user_no` int NOT NULL,
  `duration` int NOT NULL,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`plan_id`)
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
  `product_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) DEFAULT NULL,
  `product_description` varchar(255) DEFAULT NULL,
  `company_id` int DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `pr1_idx` (`company_id`),
  CONSTRAINT `pr1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'spur gear','xxx',2),(2,'spur gear','xxx',3),(3,'hfjdh','hdghfg',5),(4,'','',5),(5,'karan ','thakare',5),(6,'flage coupling','ms casted steel 43108 iso graded coupling',5),(7,'Shirish','did\'nt wish me on my birthday.....',5),(8,'','',19),(9,'Join coupling','ISO 3420 ',19),(10,'','',5),(11,'kfjf','kdkkf',5),(12,'Laptop','xxvvvxvx',18);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `production`
--

DROP TABLE IF EXISTS `production`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `production` (
  `entry_no` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `raw_material_id` int NOT NULL,
  `received_qty` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `target_value` int DEFAULT NULL,
  `achieve` int DEFAULT NULL,
  `current_qty` int DEFAULT NULL,
  `operator_name` varchar(200) DEFAULT NULL,
  `machine_id` int DEFAULT NULL,
  PRIMARY KEY (`entry_no`),
  KEY `p1_idx` (`order_id`),
  KEY `p2_idx` (`raw_material_id`),
  KEY `p3_idx` (`machine_id`),
  CONSTRAINT `pd1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  CONSTRAINT `pd2` FOREIGN KEY (`raw_material_id`) REFERENCES `raw_materials` (`raw_material_id`),
  CONSTRAINT `pd3` FOREIGN KEY (`machine_id`) REFERENCES `machines` (`machine_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `production`
--

LOCK TABLES `production` WRITE;
/*!40000 ALTER TABLE `production` DISABLE KEYS */;
INSERT INTO `production` VALUES (1,2,1,100,'2023-08-26',100,90,500,'Abhishek',1);
/*!40000 ALTER TABLE `production` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `raw_materials`
--

DROP TABLE IF EXISTS `raw_materials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `raw_materials` (
  `raw_material_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `part_id` int NOT NULL,
  PRIMARY KEY (`raw_material_id`),
  KEY `raw1_idx` (`part_id`),
  CONSTRAINT `raw1` FOREIGN KEY (`part_id`) REFERENCES `parts` (`part_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `raw_materials`
--

LOCK TABLES `raw_materials` WRITE;
/*!40000 ALTER TABLE `raw_materials` DISABLE KEYS */;
INSERT INTO `raw_materials` VALUES (1,'xs','cvcvc',13),(2,'casted steel ','casted steel block',13),(3,'bread','mkelwe',15),(4,'SMPS','DC supply of 240ac current 50Hz',16);
/*!40000 ALTER TABLE `raw_materials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin'),(2,'Manager'),(3,'Store'),(4,'Production'),(5,'Assembly'),(6,'Dispatch');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock` (
  `stock_entry_no` int NOT NULL AUTO_INCREMENT,
  `stock_date` datetime(6) DEFAULT NULL,
  `raw_material_id` int DEFAULT NULL,
  `raw_material_qty` int DEFAULT NULL,
  `final_raw_material_qty` int DEFAULT NULL,
  `part_id` int DEFAULT NULL,
  `part_qty` int DEFAULT NULL,
  `final_part_qty` int DEFAULT NULL,
  `company_id` int DEFAULT NULL,
  PRIMARY KEY (`stock_entry_no`),
  KEY `s1_idx` (`company_id`),
  KEY `s2_idx` (`raw_material_id`),
  KEY `s3_idx` (`part_id`),
  CONSTRAINT `s1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`),
  CONSTRAINT `s2` FOREIGN KEY (`raw_material_id`) REFERENCES `raw_materials` (`raw_material_id`),
  CONSTRAINT `s3` FOREIGN KEY (`part_id`) REFERENCES `parts` (`part_id`)
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
  `store_entry_no` int NOT NULL AUTO_INCREMENT,
  `store_date` date DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  `raw_material_id` int DEFAULT NULL,
  `raw_material_qty` int DEFAULT NULL,
  `forward_id` int DEFAULT NULL,
  `part_id` int DEFAULT NULL,
  `part_qty` int DEFAULT NULL,
  PRIMARY KEY (`store_entry_no`),
  KEY `st_idx` (`order_id`),
  KEY `st1_idx` (`raw_material_id`),
  KEY `st2_idx` (`part_id`),
  KEY `st3_idx` (`forward_id`),
  CONSTRAINT `st` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  CONSTRAINT `st1` FOREIGN KEY (`raw_material_id`) REFERENCES `raw_materials` (`raw_material_id`),
  CONSTRAINT `st2` FOREIGN KEY (`part_id`) REFERENCES `parts` (`part_id`),
  CONSTRAINT `st3` FOREIGN KEY (`forward_id`) REFERENCES `forward` (`forward_id`)
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
  `vendormap_id` int NOT NULL AUTO_INCREMENT,
  `part_id` int NOT NULL,
  PRIMARY KEY (`vendormap_id`),
  KEY `v2_idx` (`company_id`),
  KEY `v1` (`vendor_id`),
  CONSTRAINT `v1` FOREIGN KEY (`vendor_id`) REFERENCES `master_vendor` (`master_vendor_id`),
  CONSTRAINT `v2` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendormap`
--

LOCK TABLES `vendormap` WRITE;
/*!40000 ALTER TABLE `vendormap` DISABLE KEYS */;
INSERT INTO `vendormap` VALUES (1,1,1,10);
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

-- Dump completed on 2023-08-26 18:02:57
