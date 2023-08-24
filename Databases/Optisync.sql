drop database optisync;

create database optisync;

use optisync;

CREATE TABLE `client` (
  `client_id` int NOT NULL AUTO_INCREMENT,
  `client_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`client_id`)
);

CREATE TABLE `plans` (
  `plan_id` int NOT NULL AUTO_INCREMENT,
  `plan_name` varchar(255) DEFAULT NULL,
  `user_no` int NOT NULL,
  `duration` int NOT NULL,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`plan_id`)
); 


CREATE TABLE `company` (
  `company_id` int NOT NULL AUTO_INCREMENT,
  `company_name` varchar(45) NOT NULL,
  `person_name` varchar(45) NOT NULL,
  `contact_no` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `registration_date` date NOT NULL,
  `plan_id` int NOT NULL,
  `payment_status` tinyint DEFAULT NULL,
  `plan_startdate` date DEFAULT NULL,
  `plan_enddate` date DEFAULT NULL,
  `admin_approval` tinyint NOT NULL DEFAULT '0',
  `mode_of_transaction` varchar(45) DEFAULT 'Online',
  PRIMARY KEY (`company_id`),
  KEY `c1_idx` (`plan_id`),
  CONSTRAINT `co1` FOREIGN KEY (`plan_id`) REFERENCES `plans` (`plan_id`)
); 

CREATE TABLE `product` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(45) DEFAULT NULL,
  `product_description` varchar(500) DEFAULT NULL,
  `company_id` int DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `pr1_idx` (`company_id`),
  CONSTRAINT `pr1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`)
); 


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
); 


CREATE TABLE `parts` (
  `part_id` int NOT NULL AUTO_INCREMENT,
  `part_name` varchar(45) NOT NULL,
  `part_description` varchar(500) DEFAULT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`part_id`),
  KEY `p1_idx` (`product_id`),
  CONSTRAINT `p1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`)
);  




CREATE TABLE `assembly` (
  `assembly_entry_no` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `order_id` int NOT NULL,
  `part_id` int NOT NULL,
  `received_part_qty` int NOT NULL,
  `targeted_value` int NOT NULL,
  `achieve` int NOT NULL,
  PRIMARY KEY (`assembly_entry_no`),
  KEY `a1_idx` (`order_id`),
  KEY `a2_idx` (`part_id`),
  CONSTRAINT `a1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  CONSTRAINT `a2` FOREIGN KEY (`part_id`) REFERENCES `parts` (`part_id`)
); 


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
);


CREATE TABLE `dispatch_status` (
  `dispatch_status_id` int NOT NULL AUTO_INCREMENT,
  `status_meaning` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`dispatch_status_id`)
); 

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
); 



CREATE TABLE `forward` (
  `forward_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`forward_id`)
); 

CREATE TABLE `roles` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
); 


CREATE TABLE `login` (
  `login_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `company_id` int NOT NULL,
  `role_id` int NOT NULL,
  `forgetpass_status` bit(1) DEFAULT NULL,
  `setup_status` bit(1) DEFAULT NULL,
  PRIMARY KEY (`login_id`),
  KEY `l1_idx` (`company_id`),
  KEY `l2_idx` (`role_id`),
  CONSTRAINT `l1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`),
  CONSTRAINT `l2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`)
); 



CREATE TABLE `machines` (
  `machine_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(45) NOT NULL,
  `machine_description` varchar(500) DEFAULT NULL,
  `company_id` int NOT NULL,
  PRIMARY KEY (`machine_id`),
  KEY `m1_idx` (`company_id`),
  CONSTRAINT `m1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`)
); 

CREATE TABLE `master_vendor` (
  `master_vendor_id` int NOT NULL AUTO_INCREMENT,
  `master_vendor_name` varchar(45) DEFAULT NULL,
  `master_vendor_part_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`master_vendor_id`)
); 

INSERT INTO `plans` VALUES (1,'Gold',5,270,5000),(2,'Silver',5,180,4000),(3,'Bronze',5,90,3000);

CREATE TABLE `raw_materials` (
  `raw_material_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `part_id` int NOT NULL,
  PRIMARY KEY (`raw_material_id`),
  KEY `raw1_idx` (`part_id`),
  CONSTRAINT `raw1` FOREIGN KEY (`part_id`) REFERENCES `parts` (`part_id`)
); 

CREATE TABLE `production` (
  `entry_no` int NOT NULL AUTO_INCREMENT,
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
  CONSTRAINT `pd1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  CONSTRAINT `pd2` FOREIGN KEY (`raw_material_id`) REFERENCES `raw_materials` (`raw_material_id`),
  CONSTRAINT `pd3` FOREIGN KEY (`machine_id`) REFERENCES `machines` (`machine_id`)
); 


CREATE TABLE `stock` (
  `stock_entry_no` int NOT NULL AUTO_INCREMENT,
  `stock_date` date DEFAULT NULL,
  `raw_material_id` int NOT NULL,
  `raw_material_qty` int NOT NULL,
  `final_raw_material_qty` int NOT NULL,
  `part_id` int NOT NULL,
  `part_qty` int NOT NULL,
  `final_part_qty` int NOT NULL,
  `company_id` int NOT NULL,
  PRIMARY KEY (`stock_entry_no`),
  KEY `s1_idx` (`company_id`),
  KEY `s2_idx` (`raw_material_id`),
  KEY `s3_idx` (`part_id`),
  CONSTRAINT `s1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`),
  CONSTRAINT `s2` FOREIGN KEY (`raw_material_id`) REFERENCES `raw_materials` (`raw_material_id`),
  CONSTRAINT `s3` FOREIGN KEY (`part_id`) REFERENCES `parts` (`part_id`)
); 

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
);

CREATE TABLE `vendormap` (
  `vendor_id` int NOT NULL ,
  `company_id` int NOT NULL,
  `vendormap_id` int NOT NULL AUTO_INCREMENT,	
  PRIMARY KEY (`vendormap_id`),
  KEY `v2_idx` (`company_id`),
  CONSTRAINT `v1` FOREIGN KEY (`vendor_id`) REFERENCES `master_vendor` (`master_vendor_id`),
  CONSTRAINT `v2` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`)
);