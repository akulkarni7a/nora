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
-- Table structure for table `parents`
--

DROP TABLE IF EXISTS `parents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `parents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `school` varchar(255) NOT NULL,
  `Parent1_first_name` varchar(255) NOT NULL,
  `Parent1_last_name` varchar(255) NOT NULL,
  `Parent2_first_name` varchar(255) DEFAULT NULL,
  `Parent2_last_name` varchar(255) DEFAULT NULL,
  `Parent_phone` varchar(255) NOT NULL,
  `Parent_email` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parents`
--

LOCK TABLES `parents` WRITE;
/*!40000 ALTER TABLE `parents` DISABLE KEYS */;
INSERT INTO `parents` VALUES (1,'Test A','Parent First','Parent Last','Parent 2 First','Parent 2 Last','6304865278','s@s.com','2017-10-30 02:01:51','2017-10-30 02:01:51'),(2,'Test B','c','d','e','f','324','s@g.com','2017-10-30 02:25:37','2017-10-30 02:25:37'),(3,'Test C','b','c','d','e','232','s@g.com','2017-10-30 02:28:18','2017-10-30 02:28:18'),(4,'Test B','c','d','e','f','23','sd@gll.com','2017-10-30 02:30:29','2017-10-30 02:30:29'),(5,'Test A','j','k','l','i','42','s@a.com','2017-10-30 02:33:13','2017-10-30 02:33:13'),(6,'Test A','bk','sl','df','df','133','as@gma.com','2017-10-30 02:37:15','2017-10-30 02:37:15'),(7,'Test A','Max','Max','Max','Max','42529','Max@Max.com','2017-11-02 23:24:47','2017-11-02 23:24:47'),(8,'Test A','Ellie','Ellie','Ellie','Ellie','242','Ellie@Ellie.com','2017-11-02 23:30:19','2017-11-02 23:30:19'),(9,'Test A','State','State','State','State','23','State@State.com','2017-11-02 23:32:03','2017-11-02 23:32:03'),(10,'Test A','Holly','Holly','Holly','Holly','23','Holly@Holly.com','2017-11-02 23:40:47','2017-11-02 23:40:47'),(11,'Test A','Madame','Madame','Madame','Madame','ew','Madame@Madame.com','2017-11-02 23:42:07','2017-11-02 23:42:07'),(12,'Test A','Danielle','Danielle','Danielle','Danielle','232','Danielle@Danielle.com','2017-11-02 23:45:20','2017-11-02 23:45:20'),(13,'Test A','Robby','Robby','Robby','Robby','242','Robby@Robby.com','2017-11-02 23:46:49','2017-11-02 23:46:49'),(14,'Test A','Didi','Didi','Didi','Didi','243','Didi@Didi.com','2017-11-02 23:47:54','2017-11-02 23:47:54'),(15,'Test A','Franky','Franky','Franky','Franky','2424','Franky@Franky.com','2017-11-02 23:49:36','2017-11-02 23:49:36'),(16,'Test A','Nara','Nara','Nara','Nara','2422','Nara@Nara.com','2017-11-02 23:52:09','2017-11-02 23:52:09'),(17,'Test A','a','s','a','a','sdfs','a4224@a.com','2017-11-02 23:53:29','2017-11-02 23:53:29'),(18,'Test A','resi','resi','resi','resi','424','resi@resi.com','2017-11-02 23:54:20','2017-11-02 23:54:20'),(19,'Test A','Frankie','Frankie','Frankie','Frankie','4242','Frankie@Frankie.com','2017-11-02 23:56:07','2017-11-02 23:56:07'),(20,'Test A','boolean','boolean','boolean','boolean','242','boolean@boolean.com','2017-11-02 23:58:39','2017-11-02 23:58:39'),(21,'Test A','newfam','newfam','newfam','newfam','4242','newfam@newfam.com','2017-11-03 00:00:01','2017-11-03 00:00:01'),(22,'Test A','count','count','count','count','2424','count@count.com','2017-11-03 00:01:44','2017-11-03 00:01:44'),(23,'Test A','Stack','Stack','Stack','Stack','424','Stack@Stack.com','2017-11-09 19:42:28','2017-11-09 19:42:28');
/*!40000 ALTER TABLE `parents` ENABLE KEYS */;
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
