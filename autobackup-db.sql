-- MySQL dump 10.19  Distrib 10.3.39-MariaDB, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: auto-backup
-- ------------------------------------------------------
-- Server version	11.2.4-MariaDB-ubu2204

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `backup_traces`
--

DROP TABLE IF EXISTS `backup_traces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `backup_traces` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_backup` int(11) DEFAULT NULL,
  `last_status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT curtime(),
  `updatedAt` datetime NOT NULL DEFAULT curtime(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `backup_traces`
--

LOCK TABLES `backup_traces` WRITE;
/*!40000 ALTER TABLE `backup_traces` DISABLE KEYS */;
INSERT INTO `backup_traces` VALUES (1,1,'[ALL OK]','2024-06-21 18:35:37','2024-06-21 18:35:37'),(2,1,'[ALL OK]','2024-06-21 18:35:39','2024-06-21 18:35:39'),(3,1,'[ALL OK]','2024-06-21 18:35:39','2024-06-21 18:35:39'),(4,1,'[ALL OK]','2024-06-21 18:35:40','2024-06-21 18:35:40'),(5,1,'[ALL OK]','2024-06-21 18:35:40','2024-06-21 18:35:40'),(6,1,'[ALL OK]','2024-06-21 18:35:40','2024-06-21 18:35:40'),(7,1,'[ALL OK]','2024-06-21 18:35:41','2024-06-21 18:35:41'),(8,1,'[ALL OK]','2024-06-21 18:35:41','2024-06-21 18:35:41'),(9,1,'[ALL OK]','2024-06-21 18:35:41','2024-06-21 18:35:41'),(10,70,'[RUNNING]','2024-06-21 18:39:57','2024-06-21 18:39:57'),(11,70,'[ALL OK]','2024-06-21 18:39:57','2024-06-21 18:39:57'),(12,70,'[RUNNING]','2024-06-21 18:40:30','2024-06-21 18:40:30'),(13,70,'[FINISHED WITH ERRORS]','2024-06-21 18:40:30','2024-06-21 18:40:30'),(14,70,'[RUNNING]','2024-06-21 18:40:55','2024-06-21 18:40:55'),(15,70,'[FINISHED WITH ERRORS]','2024-06-21 18:40:56','2024-06-21 18:40:56'),(16,70,'[RUNNING]','2024-06-21 18:41:13','2024-06-21 18:41:13'),(17,70,'[FINISHED WITH ERRORS]','2024-06-21 18:41:13','2024-06-21 18:41:13'),(18,70,'[RUNNING]','2024-06-21 18:41:34','2024-06-21 18:41:34'),(19,70,'[ALL OK]','2024-06-21 18:41:34','2024-06-21 18:41:34'),(20,70,'[RUNNING]','2024-06-21 18:41:53','2024-06-21 18:41:53'),(21,70,'[NOT OK]','2024-06-21 18:41:53','2024-06-21 18:41:53'),(22,70,'[RUNNING]','2024-06-21 18:49:35','2024-06-21 18:49:35'),(23,70,'[ALL OK]','2024-06-21 18:49:36','2024-06-21 18:49:36'),(24,70,'[RUNNING]','2024-06-21 18:49:40','2024-06-21 18:49:40'),(25,70,'[ALL OK]','2024-06-21 18:49:40','2024-06-21 18:49:40'),(26,70,'[RUNNING]','2024-06-21 18:49:41','2024-06-21 18:49:41'),(27,70,'[ALL OK]','2024-06-21 18:49:42','2024-06-21 18:49:42'),(28,70,'[RUNNING]','2024-06-21 18:49:44','2024-06-21 18:49:44'),(29,70,'[ALL OK]','2024-06-21 18:49:44','2024-06-21 18:49:44'),(30,70,'[RUNNING]','2024-06-21 18:49:47','2024-06-21 18:49:47'),(31,70,'[ALL OK]','2024-06-21 18:49:47','2024-06-21 18:49:47'),(32,70,'[RUNNING]','2024-06-21 18:49:48','2024-06-21 18:49:48'),(33,70,'[ALL OK]','2024-06-21 18:49:49','2024-06-21 18:49:49'),(34,70,'[RUNNING]','2024-06-21 18:49:50','2024-06-21 18:49:50'),(35,70,'[ALL OK]','2024-06-21 18:49:50','2024-06-21 18:49:50'),(36,70,'[RUNNING]','2024-06-21 18:49:51','2024-06-21 18:49:51'),(37,70,'[ALL OK]','2024-06-21 18:49:52','2024-06-21 18:49:52'),(38,70,'[RUNNING]','2024-06-21 18:50:11','2024-06-21 18:50:11'),(39,70,'[ALL OK]','2024-06-21 18:50:19','2024-06-21 18:50:19'),(40,70,'[RUNNING]','2024-06-21 22:15:28','2024-06-21 22:15:28'),(41,70,'[ALL OK]','2024-06-21 22:15:37','2024-06-21 22:15:37');
/*!40000 ALTER TABLE `backup_traces` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `backups`
--

DROP TABLE IF EXISTS `backups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `backups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `backups`
--

LOCK TABLES `backups` WRITE;
/*!40000 ALTER TABLE `backups` DISABLE KEYS */;
INSERT INTO `backups` VALUES (1,'siara-paralelo','2024-06-12 00:00:00','2024-06-12 00:00:00'),(70,'prueba local','2024-06-20 18:18:15','2024-06-20 18:18:15');
/*!40000 ALTER TABLE `backups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `codigos`
--

DROP TABLE IF EXISTS `codigos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `codigos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_backup` int(11) DEFAULT NULL,
  `no_bloque` int(11) DEFAULT NULL,
  `no_linea` int(11) DEFAULT NULL,
  `linea` varchar(255) DEFAULT NULL,
  `run_as_sudo` tinyint(1) DEFAULT NULL,
  `paralelo` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT curdate(),
  `updatedAt` datetime NOT NULL DEFAULT curdate(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=250 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `codigos`
--

LOCK TABLES `codigos` WRITE;
/*!40000 ALTER TABLE `codigos` DISABLE KEYS */;
INSERT INTO `codigos` VALUES (1,1,1,1,'mkdir /tmp/respaldo-siara_$(date \'+%d\')$(date \'+%m\')$(date \'+%Y\')',1,0,'2024-06-12 00:00:00','2024-06-20 17:24:29'),(2,1,2,1,'rsync -a /var/www/html/owncloud resp@10.0.2.12:/mnt/pool1/respaldos/dbfiles/',1,1,'2024-06-12 00:00:00','2024-06-20 18:05:22'),(3,1,2,2,'mariabackup --backup --target-dir=/tmp/respaldo-siara_$(date \'+%d\')$(date \'+%m\')$(date \'+%Y\')/mysql --user=backup --password=4dm1n1str4d0r. --host=10.0.2.10',1,1,'2024-06-12 00:00:00','2024-06-20 18:05:22'),(4,1,3,1,'tar -cf /tmp/respaldo-siara_$(date \'+%d\')$(date \'+%m\')$(date \'+%Y\').tar.gz /tmp/respaldo-siara_$(date \'+%d\')$(date \'+%m\')$(date \'+%Y\')',1,0,'2024-06-12 00:00:00','2024-06-20 18:02:57'),(5,1,3,2,'rsync -a /tmp/respaldo-siara_$(date \'+%d\')$(date \'+%m\')$(date \'+%Y\').tar.gz resp@10.0.2.12:/mnt/pool1/respaldos/db',1,0,'2024-06-12 00:00:00','2024-06-20 18:02:57'),(6,1,3,3,'du -s /tmp/respaldo-siara_$(date \'+%d\')$(date \'+%m\')$(date \'+%Y\').tar.gz',1,0,'2024-06-12 00:00:00','2024-06-20 18:02:57'),(7,1,3,4,'rm -rf /tmp/respaldo-siara_$(date \'+%d\')$(date \'+%m\')$(date \'+%Y\')*',1,0,'2024-06-12 00:00:00','2024-06-20 18:02:57'),(8,2,1,1,'docker exec GestionTemporal mkdir -p /var/log/mysql/respaldo/mysql',1,0,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(9,2,1,2,'docker exec GestionTemporal mariabackup --backup --user=root --password=Acceso123 --target-dir=/var/log/mysql/respaldo/mysql',1,0,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(10,2,1,3,'tar -cvf GESTION_31052024.tar.gz /home/shernandez/Gestion01042023/logs/',1,0,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(11,2,1,4,'du -sh GESTION_31052024.tar.gz',1,0,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(12,2,1,5,'rsync -a --rsync-path=\'mkdir -p /mnt/Respaldos_Pure/Test/10_22_157_42/$(date \'+%Y\')/$(date \'+%B\') && rsync\' GESTION_31052024.tar.gz backups@10.22.157.67:/mnt/Respaldos_Pure/Test/10_22_157_42/$(date \'+%Y\')/$(date \'+%B\')',1,0,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(13,2,1,6,'rm -rf GESTION_31052024.tar.gz',1,0,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(14,2,1,7,'rm -rf /home/shernandez/Gestion01042023/logs/respaldo',1,0,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(15,3,1,1,'cd /tmp/',0,0,'2024-06-12 00:00:00','2024-06-20 18:06:04'),(16,3,1,2,'docker exec -t bd-postgres pg_dump -U postgres > /tmp/biometricos.sql',1,0,'2024-06-12 00:00:00','2024-06-20 18:06:04'),(17,3,1,3,'tar -czvf BIOMETRICOS_$(date \"+%d\")$(date \"+%m\")$(date \"+%Y\").tar.gz /tmp/biometricos.sql',1,0,'2024-06-12 00:00:00','2024-06-20 18:06:04'),(18,3,1,4,'du -sh BIOMETRICOS_*.tar.gz',1,0,'2024-06-12 00:00:00','2024-06-20 18:06:04'),(19,3,1,5,'rsync -a --rsync-path=\"mkdir -p /mnt/Respaldos_Pure/Test/$(date \"+%Y\")/$(date \"+%B\") && rsync\" BIOMETRICOS_*.tar.gz backups@10.22.157.67:/mnt/Respaldos_Pure/Test/$(date \"+%Y\")/$(date \"+%B\")',1,0,'2024-06-12 00:00:00','2024-06-20 18:06:04'),(20,3,1,6,'rm -rf BIOMETRICOS_*.tar.gz',1,0,'2024-06-12 00:00:00','2024-06-20 18:06:04'),(21,4,1,1,'echo \"hola\"',1,0,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(22,4,2,1,'echo \"adios\"',1,1,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(24,4,1,2,'hola 2',1,0,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(25,8,1,1,'cd /tmp/',0,0,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(26,8,1,2,'docker exec -t bd-postgres pg_dump -U postgres > /tmp/biometricos.sql',1,0,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(27,8,1,3,'tar -czvf BIOMETRICOS_$(date \"+%d\")$(date \"+%m\")$(date \"+%Y\").tar.gz /tmp/biometricos.sql',1,0,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(28,8,1,4,'du -sh BIOMETRICOS_*.tar.gz',1,0,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(29,8,1,5,'rsync -a --rsync-path=\"mkdir -p /mnt/Respaldos_Pure/Test/$(date \"+%Y\")/$(date \"+%B\") && rsync\" BIOMETRICOS_*.tar.gz backups@10.22.157.67:/mnt/Respaldos_Pure/Test/$(date \"+%Y\")/$(date \"+%B\")',1,0,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(30,8,1,6,'du -s /tmp/biometricos.sql',1,0,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(31,8,1,7,'rm -rf /tmp/BIOMETRICOS_*.tar.gz',1,0,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(32,8,1,8,'rm -rf /tmp/biometricos.sql',1,0,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(113,999,666,1,'sudo su -',1,0,'2024-06-18 00:00:00','2024-06-18 00:00:00'),(203,54,1,1,'mkdir /tmp/$(date %Y)/$(date %B)/$(date %d%m%Y)/',0,0,'2024-06-19 00:00:00','2024-06-19 00:00:00'),(204,54,1,2,'mysqldump -uroot htsj_gestion > /tmp/$(date %Y)/$(date %B)/$(date %d%m%Y)/htsj_gestion.sql',0,0,'2024-06-19 00:00:00','2024-06-19 00:00:00'),(206,54,1,3,'tar -czf /tmp/RESPALDO$(date %d%m%Y).tar.gz /tmp/$(date %Y)/$(date %B)/$(date %d%m%Y)/htsj_gestion.sql',0,0,'2024-06-19 00:00:00','2024-06-19 00:00:00'),(207,54,1,4,'du -s /tmp/RESPALDO$(date %d%m%Y).tar.gz',0,0,'2024-06-19 00:00:00','2024-06-19 00:00:00'),(208,54,1,5,'rsync -ah /tmp/RESPALDO$(date %d%m%Y).tar.gz /mnt/Respaldos_Pure/Test/$(date %Y)/',0,0,'2024-06-19 00:00:00','2024-06-19 00:00:00'),(209,55,1,1,'cd /tmp',1,0,'2024-06-19 00:00:00','2024-06-20 16:11:52'),(210,55,2,2,'ga',0,0,'2024-06-19 00:00:00','2024-06-20 16:09:32'),(211,55,3,3,'g45rgeg',1,0,'2024-06-19 00:00:00','2024-06-20 16:11:59'),(213,55,1,2,'tar -cvf algo.tar.gz /tmp',0,0,'2024-06-20 00:00:00','2024-06-20 16:11:57'),(214,62,1,1,'asd',1,0,'2024-06-20 00:00:00','2024-06-20 18:03:47'),(215,68,1,1,'gdfggf',0,1,'2024-06-20 00:00:00','2024-06-20 18:02:49'),(216,63,1,1,'asdasd',0,1,'2024-06-20 00:00:00','2024-06-20 18:03:30'),(217,69,1,1,'cd /tmp/',0,0,'2024-06-20 00:00:00','2024-06-20 00:00:00'),(218,69,1,2,'docker exec -t bd-postgres pg_dump -U postgres > /tmp/biometricos.sql',1,0,'2024-06-20 00:00:00','2024-06-20 18:11:36'),(219,69,1,3,'tar -czvf BIOMETRICOS_$(date \"+%d\")$(date \"+%m\")$(date \"+%Y\").tar.gz /tmp/biometricos.sql',1,0,'2024-06-20 00:00:00','2024-06-20 18:11:36'),(220,69,1,4,'du -sh BIOMETRICOS_*.tar.gz',1,0,'2024-06-20 00:00:00','2024-06-20 18:11:37'),(221,69,1,5,'rsync -a --rsync-path=\"mkdir -p /mnt/Respaldos_Pure/Test/$(date \"+%Y\")/$(date \"+%B\") && rsync\" BIOMETRICOS_*.tar.gz backups@10.22.157.67:/mnt/Respaldos_Pure/Test/$(date \"+%Y\")/$(date \"+%B\")',1,0,'2024-06-20 00:00:00','2024-06-20 18:11:38'),(222,69,1,6,'du -s /tmp/biometricos.sql',1,0,'2024-06-20 00:00:00','2024-06-20 18:11:38'),(223,69,1,7,'rm -rf /tmp/BIOMETRICOS_*.tar.gz',1,0,'2024-06-20 00:00:00','2024-06-20 18:11:39'),(224,69,1,8,'rm -rf /tmp/biometricos.sql',1,0,'2024-06-20 00:00:00','2024-06-20 18:11:39'),(243,70,1,1,'xfs_mkfile 10G hola_mundo.txt',0,0,'2024-06-21 00:00:00','2024-06-21 18:50:06'),(244,70,1,2,'du -s /root/hola_mundo.txt',0,0,'2024-06-21 00:00:00','2024-06-21 18:41:10'),(245,70,1,3,'rm -rf hola_mundo.txt',0,0,'2024-06-21 00:00:00','2024-06-21 18:41:10'),(246,70,1,4,'xfs_mkfile 10G adios_mundo.txt',0,0,'2024-06-21 00:00:00','2024-06-21 18:50:09'),(247,70,1,5,'du -s /root/adios_mundo.txt',0,0,'2024-06-21 00:00:00','2024-06-21 18:41:10'),(248,70,1,6,'rm -rf /root/adios_mundo.txt',0,0,'2024-06-21 00:00:00','2024-06-21 22:11:36');
/*!40000 ALTER TABLE `codigos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `file_traces`
--

DROP TABLE IF EXISTS `file_traces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `file_traces` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_backup` bigint(20) DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT curtime(),
  `updatedAt` datetime NOT NULL DEFAULT curtime(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file_traces`
--

LOCK TABLES `file_traces` WRITE;
/*!40000 ALTER TABLE `file_traces` DISABLE KEYS */;
INSERT INTO `file_traces` VALUES (1,1,'algo.tar.gz',382938,'2024-06-21 00:00:00','2024-06-21 00:00:00'),(2,1,'algo.tar.gz',382938,'2024-06-21 00:00:00','2024-06-21 00:00:00'),(3,1,'algo.tar.gz',382938,'2024-06-21 00:00:00','2024-06-21 00:00:00'),(4,1,'algo.tar.gz',382938,'2024-06-21 00:00:00','2024-06-21 00:00:00'),(5,1,'algo.tar.gz',382938,'2024-06-21 00:00:00','2024-06-21 00:00:00'),(6,1,'algo.tar.gz',382938,'2024-06-21 00:00:00','2024-06-21 00:00:00'),(7,1,'algo.tar.gz',382938,'2024-06-21 00:00:00','2024-06-21 00:00:00'),(8,70,'hola_mundo.txt',4,'2024-06-21 00:00:00','2024-06-21 00:00:00'),(9,70,'hola_mundo.txt',51200,'2024-06-21 00:00:00','2024-06-21 00:00:00'),(10,70,'hola_mundo.txt',51200,'2024-06-21 00:00:00','2024-06-21 00:00:00'),(11,70,'hola_mundo.txt',51200,'2024-06-21 00:00:00','2024-06-21 00:00:00'),(12,70,'hola_mundo.txt',51200,'2024-06-21 00:00:00','2024-06-21 00:00:00'),(13,70,'hola_mundo.txt',51200,'2024-06-21 00:00:00','2024-06-21 00:00:00'),(14,70,'/root/hola_mundo.txt',51200,'2024-06-21 00:00:00','2024-06-21 00:00:00'),(15,70,'/root/hola_mundo.txt',51200,'2024-06-21 00:00:00','2024-06-21 00:00:00'),(16,70,'/root/hola_mundo.txt',51200,'2024-06-21 00:00:00','2024-06-21 00:00:00'),(17,70,'/root/hola_mundo.txt',66560,'2024-06-21 00:00:00','2024-06-21 00:00:00'),(18,70,'/root/hola_mundo.txt',102400,'2024-06-21 00:00:00','2024-06-21 00:00:00'),(19,70,'/root/hola_mundo.txt',204800,'2024-06-21 00:00:00','2024-06-21 00:00:00'),(20,70,'/root/hola_mundo.txt',1048576,'2024-06-21 00:00:00','2024-06-21 00:00:00'),(21,70,'/root/hola_mundo.txt',1048576,'2024-06-21 00:00:00','2024-06-21 00:00:00'),(22,70,'/root/hola_mundo.txt',10485760,'2024-06-21 00:00:00','2024-06-21 00:00:00'),(23,70,'/root/hola_mundo.txt',15728640,'2024-06-21 17:39:16','2024-06-21 17:39:16'),(24,70,'/root/hola_mundo.txt',15728640,'2024-06-21 17:41:40','2024-06-21 17:41:40'),(25,70,'/root/adios_mundo.txt',16777216,'2024-06-21 17:41:47','2024-06-21 17:41:47'),(26,70,'/root/hola_mundo.txt',102400,'2024-06-21 17:43:08','2024-06-21 17:43:08'),(27,70,'/root/adios_mundo.txt',256000,'2024-06-21 17:43:08','2024-06-21 17:43:08'),(28,70,'/root/hola_mundo.txt',102400,'2024-06-21 17:43:35','2024-06-21 17:43:35'),(29,70,'/root/adios_mundo.txt',256000,'2024-06-21 17:43:35','2024-06-21 17:43:35'),(30,70,'/root/hola_mundo.txt',102400,'2024-06-21 17:43:38','2024-06-21 17:43:38'),(31,70,'/root/adios_mundo.txt',256000,'2024-06-21 17:43:39','2024-06-21 17:43:39'),(32,70,'/root/hola_mundo.txt',102400,'2024-06-21 17:43:43','2024-06-21 17:43:43'),(33,70,'/root/adios_mundo.txt',256000,'2024-06-21 17:43:43','2024-06-21 17:43:43'),(34,70,'/root/hola_mundo.txt',102400,'2024-06-21 17:43:47','2024-06-21 17:43:47'),(35,70,'/root/adios_mundo.txt',256000,'2024-06-21 17:43:47','2024-06-21 17:43:47'),(36,70,'/root/hola_mundo.txt',102400,'2024-06-21 17:43:49','2024-06-21 17:43:49'),(37,70,'/root/adios_mundo.txt',256000,'2024-06-21 17:43:49','2024-06-21 17:43:49'),(38,70,'/root/hola_mundo.txt',102400,'2024-06-21 17:43:50','2024-06-21 17:43:50'),(39,70,'/root/adios_mundo.txt',256000,'2024-06-21 17:43:50','2024-06-21 17:43:50'),(40,70,'/root/hola_mundo.txt',102400,'2024-06-21 17:43:52','2024-06-21 17:43:52'),(41,70,'/root/adios_mundo.txt',256000,'2024-06-21 17:43:52','2024-06-21 17:43:52'),(42,70,'/root/hola_mundo.txt',102400,'2024-06-21 18:39:57','2024-06-21 18:39:57'),(43,70,'/root/adios_mundo.txt',256000,'2024-06-21 18:39:57','2024-06-21 18:39:57'),(44,70,'/root/hola_mundo.txt',102400,'2024-06-21 18:40:30','2024-06-21 18:40:30'),(45,70,'/root/adios_mundo.txt',256000,'2024-06-21 18:40:30','2024-06-21 18:40:30'),(46,70,'/root/hola_mundo.txt',102400,'2024-06-21 18:41:13','2024-06-21 18:41:13'),(47,70,'/root/adios_mundo.txt',256000,'2024-06-21 18:41:13','2024-06-21 18:41:13'),(48,70,'/root/hola_mundo.txt',102400,'2024-06-21 18:41:34','2024-06-21 18:41:34'),(49,70,'/root/adios_mundo.txt',256000,'2024-06-21 18:41:34','2024-06-21 18:41:34'),(50,70,'/root/hola_mundo.txt',102400,'2024-06-21 18:49:36','2024-06-21 18:49:36'),(51,70,'/root/adios_mundo.txt',256000,'2024-06-21 18:49:36','2024-06-21 18:49:36'),(52,70,'/root/hola_mundo.txt',102400,'2024-06-21 18:49:40','2024-06-21 18:49:40'),(53,70,'/root/adios_mundo.txt',256000,'2024-06-21 18:49:40','2024-06-21 18:49:40'),(54,70,'/root/hola_mundo.txt',102400,'2024-06-21 18:49:41','2024-06-21 18:49:41'),(55,70,'/root/adios_mundo.txt',256000,'2024-06-21 18:49:41','2024-06-21 18:49:41'),(56,70,'/root/hola_mundo.txt',102400,'2024-06-21 18:49:44','2024-06-21 18:49:44'),(57,70,'/root/adios_mundo.txt',256000,'2024-06-21 18:49:44','2024-06-21 18:49:44'),(58,70,'/root/hola_mundo.txt',102400,'2024-06-21 18:49:47','2024-06-21 18:49:47'),(59,70,'/root/adios_mundo.txt',256000,'2024-06-21 18:49:47','2024-06-21 18:49:47'),(60,70,'/root/hola_mundo.txt',102400,'2024-06-21 18:49:49','2024-06-21 18:49:49'),(61,70,'/root/adios_mundo.txt',256000,'2024-06-21 18:49:49','2024-06-21 18:49:49'),(62,70,'/root/hola_mundo.txt',102400,'2024-06-21 18:49:50','2024-06-21 18:49:50'),(63,70,'/root/adios_mundo.txt',256000,'2024-06-21 18:49:50','2024-06-21 18:49:50'),(64,70,'/root/hola_mundo.txt',102400,'2024-06-21 18:49:52','2024-06-21 18:49:52'),(65,70,'/root/adios_mundo.txt',256000,'2024-06-21 18:49:52','2024-06-21 18:49:52'),(66,70,'/root/hola_mundo.txt',10485760,'2024-06-21 18:50:15','2024-06-21 18:50:15'),(67,70,'/root/adios_mundo.txt',10485760,'2024-06-21 18:50:19','2024-06-21 18:50:19'),(68,70,'/root/hola_mundo.txt',10485760,'2024-06-21 22:15:33','2024-06-21 22:15:33'),(69,70,'/root/adios_mundo.txt',10485760,'2024-06-21 22:15:37','2024-06-21 22:15:37');
/*!40000 ALTER TABLE `file_traces` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `metadatas`
--

DROP TABLE IF EXISTS `metadatas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `metadatas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_backup` int(11) DEFAULT NULL,
  `ruta_respaldo` varchar(255) DEFAULT NULL,
  `ip_servidor` varchar(255) DEFAULT NULL,
  `ip_nas` varchar(255) DEFAULT NULL,
  `rash` varchar(255) DEFAULT NULL,
  `user_servidor` varchar(255) DEFAULT NULL,
  `pw_servidor` varchar(255) DEFAULT NULL,
  `port` int(11) DEFAULT NULL,
  `reintentos_maximos` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT curdate(),
  `updatedAt` datetime NOT NULL DEFAULT curdate(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `metadatas`
--

LOCK TABLES `metadatas` WRITE;
/*!40000 ALTER TABLE `metadatas` DISABLE KEYS */;
INSERT INTO `metadatas` VALUES (1,1,'/mnt/pool1/respaldos/db','localhost','10.0.2.12','echo GF_92K_Dpp | sudo -S ','siaraocuser','GF_92K_Dpp',5226,3,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(2,3,'/mnt/Respaldos_Pure/Test/10_22_157_42','10.22.157.42','10.22.157.67','echo Acceso123 | sudo -S ','biorespaldos','Acceso123',22,2,'2024-06-12 00:00:00','2024-06-14 20:53:15'),(3,2,'wef','asdgert','asdyht','asddfzb','','',45,665,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(4,4,'asd','sdf','dfg','ffgh','','',1,2,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(5,7,'','','','','','',0,0,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(6,8,'/mnt/Respaldos_Pure/Test/','10.22.157.42','10.22.157.67','echo Acceso123 | sudo -S ','backups','Acceso123',22,2,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(7,5,'asdads','asdads','asdasd','echo <password> | sudo -S ','asdasd','asdads',0,0,'2024-06-12 00:00:00','2024-06-12 00:00:00'),(8,13,'','','','','','',NULL,NULL,'2024-06-14 20:23:32','2024-06-14 20:23:32'),(9,13,'','','','','','',NULL,NULL,'2024-06-14 20:23:53','2024-06-14 20:23:53'),(10,14,'qwe','qwe','qwe','e32g','hjytj6','shts56',22,2,'2024-06-14 20:28:52','2024-06-14 20:28:52'),(11,15,'adsfgagdfs','asdrgrag','adsfgag','asrgasrg','asrgasrg','asrgsarg',33,33,'2024-06-14 20:29:50','2024-06-14 20:29:50'),(12,16,'sdfgdgf','sdfgsdgf','fdg','sdfgdsgf','sdfgdsfg','sdfgsdfg',434,44,'2024-06-14 20:30:10','2024-06-14 20:30:10'),(13,17,'asdfasfd','asdfasdf','asdfas','asdfasdf','asdfasfd','asdfasdf',33,23,'2024-06-14 20:31:15','2024-06-14 20:31:15'),(14,18,'asd','asd','asd','asd','asd','asd',22,22,'2024-06-14 20:35:09','2024-06-14 20:35:09'),(15,19,'/var/log/httpd','192.168.1.254','fefnas.com','echo passwd -S sudo su','bob','bob, haz algo',22,2,'2024-06-14 20:36:28','2024-06-14 20:54:27'),(16,20,'','','','','','',NULL,NULL,'2024-06-14 20:36:41','2024-06-14 20:36:41'),(17,21,'','','','','','',NULL,NULL,'2024-06-14 20:38:26','2024-06-14 20:38:26'),(18,22,'','','','','','',NULL,NULL,'2024-06-14 20:38:57','2024-06-14 20:38:57'),(19,23,'','','','','','',NULL,NULL,'2024-06-14 20:39:33','2024-06-14 20:39:33'),(20,24,'','','','','','',NULL,NULL,'2024-06-14 20:44:20','2024-06-14 20:44:20'),(21,50,'/asd/asd/asff','hostname.com','hostname.com','','','',22,2,'2024-06-18 16:21:25','2024-06-18 16:21:25'),(22,52,'','','','','','',NULL,NULL,'2024-06-18 17:22:25','2024-06-18 17:22:25'),(23,53,'','','','','','',NULL,NULL,'2024-06-18 23:17:42','2024-06-18 23:17:42'),(24,54,'/mnt/Respaldos_Pure/Test/','10.22.157.67','10.22.157.67','','backups1','Acceso123',NULL,NULL,'2024-06-19 16:09:17','2024-06-19 16:18:08'),(25,55,'/a/b/v/d','localhost','localhost','echo','root','P4ss',22,2,'2024-06-19 22:38:41','2024-06-19 23:24:08'),(26,56,'','','','','','',NULL,NULL,'2024-06-19 22:38:43','2024-06-19 22:38:43'),(27,57,'','','','','','',NULL,NULL,'2024-06-19 22:38:44','2024-06-19 22:38:44'),(28,58,'','','','','','',NULL,NULL,'2024-06-19 22:38:45','2024-06-19 22:38:45'),(29,59,'','','','','','',NULL,NULL,'2024-06-19 22:38:46','2024-06-19 22:38:46'),(30,60,'','','','','','',NULL,NULL,'2024-06-19 22:38:48','2024-06-19 22:38:48'),(31,62,'asfd','asfd','asdf','asdf','asdf','asfd',22,2,'2024-06-19 23:24:52','2024-06-19 23:24:52'),(32,61,'aaaaaaa','asdasd','aaaa','asdad','dasads','dasdas',22,2,'2024-06-19 23:25:18','2024-06-19 23:26:20'),(33,63,'afaef','asfasf','dsafdae','aewfaf','afasf','asfawf',22,2,'2024-06-19 23:25:28','2024-06-19 23:25:28'),(34,64,'hgfsh6','hfgsh','hgfhfs','65jsrj','aestrh','aehtrahetr',22,2,'2024-06-19 23:25:38','2024-06-19 23:26:18'),(35,65,'htshtshrt','athehtr','thhtrs','eheh','rherha','hrearh',22,2,'2024-06-19 23:26:28','2024-06-19 23:28:06'),(36,66,'sdf','sdf','sdf','sdf','sdf','sdf',22,2,'2024-06-19 23:27:11','2024-06-19 23:27:49'),(37,67,'','','','','','',NULL,NULL,'2024-06-19 23:34:52','2024-06-19 23:34:52'),(38,68,'','','','','','',NULL,NULL,'2024-06-19 23:35:23','2024-06-19 23:35:23'),(39,69,'/mnt/Respaldos_Pure/Test/10_22_157_42','10.22.157.42','10.22.157.67','echo Acceso123 | sudo -S ','backups','Acceso123',22,2,'2024-06-20 18:10:46','2024-06-20 18:10:46'),(40,70,'','10.22.165.29','','echo <Pr0c3s0.> | sudo -S ','root','Pr0c3s0.',2224,1,'2024-06-20 18:25:40','2024-06-21 18:49:33');
/*!40000 ALTER TABLE `metadatas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'auto-backup'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-24  9:57:45
