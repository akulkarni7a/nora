-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: my_schema
-- ------------------------------------------------------
-- Server version	5.7.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `children`
--

DROP TABLE IF EXISTS `children`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `children` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `school` varchar(255) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `child_first_name` varchar(255) DEFAULT NULL,
  `child_last_name` varchar(255) DEFAULT NULL,
  `child_birthday` datetime DEFAULT NULL,
  `child_gender` varchar(255) DEFAULT NULL,
  `child_start_date` datetime DEFAULT NULL,
  `child_status1` varchar(255) DEFAULT NULL,
  `child_status1date` datetime DEFAULT NULL,
  `child_status2` varchar(255) DEFAULT NULL,
  `child_status2date` datetime DEFAULT NULL,
  `child_status3` varchar(255) DEFAULT NULL,
  `child_status3date` datetime DEFAULT NULL,
  `child_status4` varchar(255) DEFAULT NULL,
  `child_status4date` datetime DEFAULT NULL,
  `child_status5` varchar(255) DEFAULT NULL,
  `child_status5date` datetime DEFAULT NULL,
  `child_status6` varchar(255) DEFAULT NULL,
  `child_status6date` datetime DEFAULT NULL,
  `child_status7` varchar(255) DEFAULT NULL,
  `child_status7date` datetime DEFAULT NULL,
  `child_status8` varchar(255) DEFAULT NULL,
  `child_status8date` datetime DEFAULT NULL,
  `child_status9` varchar(255) DEFAULT NULL,
  `child_status9date` datetime DEFAULT NULL,
  `child_status10` varchar(255) DEFAULT NULL,
  `child_status10date` datetime DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `parent_id` (`parent_id`),
  CONSTRAINT `children_ibfk_1` FOREIGN KEY (`parent_id`) REFERENCES `parents` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `children`
--

LOCK TABLES `children` WRITE;
/*!40000 ALTER TABLE `children` DISABLE KEYS */;
INSERT INTO `children` VALUES (1,'CDPA',3,'Frank','Sarah','2013-03-03 00:00:00','Male','1993-04-02 00:00:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2017-10-30 02:46:36','2017-10-30 02:46:36'),(2,'AMIS',4,'Frank','Franky','2010-09-10 00:00:00','male','2001-10-10 00:00:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2017-10-31 04:10:55','2017-10-31 04:10:55'),(3,'TEST',5,'TeST','TEST','2000-10-10 00:00:00','Male','2001-06-06 00:00:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2017-10-31 04:16:45','2017-10-31 04:16:45'),(4,'Test A',2,'b','b','2017-10-08 00:00:00','male','2017-10-19 00:00:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2017-10-31 04:40:03','2017-10-31 04:40:03'),(5,'Test A',2,'Danielle','Danielle','2017-11-06 00:00:00','Female','2017-11-30 00:00:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2017-11-02 23:45:20','2017-11-02 23:45:20'),(6,'Test A',23,'Stack','Stack','2017-11-12 00:00:00','Male','2017-11-13 00:00:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2017-11-09 19:42:28','2017-11-09 19:42:28');
/*!40000 ALTER TABLE `children` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-10 17:06:35
