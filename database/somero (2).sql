-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 21, 2020 at 08:40 AM
-- Server version: 5.5.24-log
-- PHP Version: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `somero`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `uname` varchar(100) NOT NULL,
  `pswd` varchar(100) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `postal` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `sno` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pswd` (`pswd`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sno` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `level` int(11) NOT NULL,
  `status` varchar(10) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `sno`, `name`, `level`, `status`, `timestamp`) VALUES
(1, '5f1341ae845af', 'nursery', 1, 'yes', '2020-09-07 15:34:10'),
(2, '5f1341bcafd73', 'primary', 2, 'yes', '2020-09-07 15:34:23'),
(3, '5f1341c7ec318', 'secondary_uce', 3, 'yes', '2020-09-07 15:34:17'),
(4, '5f1341d4a1aea', 'secondary_uace', 4, 'yes', '2020-09-07 15:34:46'),
(5, '5f13420a968ab', 'tertiary', 5, 'yes', '2020-09-07 15:34:59');

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE IF NOT EXISTS `logs` (
  `id` bigint(30) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `date` date NOT NULL,
  `year` varchar(4) NOT NULL,
  `term` varchar(10) NOT NULL,
  `action` text,
  `class` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `log_users`
--

CREATE TABLE IF NOT EXISTS `log_users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `uname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `session_id` varchar(255) NOT NULL,
  `category` varchar(100) NOT NULL,
  `level` int(4) NOT NULL,
  `var1` varchar(255) NOT NULL,
  `var2` varchar(255) NOT NULL,
  `var3` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pswd` (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE IF NOT EXISTS `questions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sno` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `category` varchar(255) NOT NULL,
  `question` text NOT NULL,
  `answer` varchar(255) DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `sno`, `name`, `address`, `category`, `question`, `answer`, `timestamp`, `status`) VALUES
(1, '5f1d6637bf1ed', '', '', '--Select Category--', '', NULL, '0000-00-00 00:00:00', 'yes'),
(2, '5f1d682860d60', 'Micheal Magoola', 'Nabulagala - Bulange', 'Finance', 'Whe should a christian pay tithe?', NULL, '2020-07-26 11:25:28', 'yes'),
(3, '5f1d6cfcb1df0', 'Micheal Magoola', 'Nabulagala - Bulange', 'finance', 'When should a christian pay tithe?', NULL, '2020-07-26 11:46:04', 'yes'),
(4, '5f1d6d05a5b0a', 'Micheal Magoola', 'Nabulagala - Bulange', 'finance', 'Why should a christian pay tithe?', NULL, '2020-07-26 11:46:13', 'yes'),
(5, '5f1d6f6999c7e', 'Micheal Magoola', 'Nabulagala - Bulange', '', 'Is it okay to fall in love with your neighbours wife?', NULL, '2020-07-26 11:56:25', 'yes'),
(6, '5f1d7031c5f57', 'Micheal Magoola', 'Nabulagala - Bulange', '', 'Is it okay to fall in love with your neighbour''s wife?', NULL, '2020-07-26 11:59:45', 'yes'),
(7, '5f1d71b40a600', 'Nabwami Sarak Kamya', 'Namungoona', '5f145da698a1c', 'Until when should i endure the trials in my life?', NULL, '2020-07-26 12:06:12', 'yes'),
(8, '5f1d71df9d9d6', 'Nabwami Sarak Kamya', 'Namungoona', '5f145da698a1c', 'Until when should i endure the life''s trials in my life?', NULL, '2020-07-26 12:06:55', 'yes'),
(9, '5f1d754aab4e2', 'Henry', 'Mengo', '', 'Who am I?', NULL, '2020-07-26 12:21:30', 'yes'),
(10, '5f1d761c012db', 'Mulindwa', 'Nateete', '5f134233e2cc7', 'When should I start ministry?', NULL, '2020-07-26 12:25:00', 'yes'),
(11, '5f1d81bc83bbd', 'What is faith', '', '5f1341ae845af', '', NULL, '2020-07-26 13:14:36', 'yes'),
(12, '5f1d81e080e4b', 'What is faith', '', '5f1341ae845af', '', NULL, '2020-07-26 13:15:12', 'yes'),
(13, '5f1d81f134b01', 'What is faith', '', '5f1341ae845af', '', NULL, '2020-07-26 13:15:29', 'yes'),
(14, '5f1d82d0ade22', 'Sarah', '', '5f134233e2cc7', 'What is Faith?', NULL, '2020-07-26 13:19:12', 'yes'),
(15, '5f1d877faa6a4', 'Sarah', 'Wakaliga', '5f1341bcafd73', 'What''s tithe?', NULL, '2020-07-26 13:39:11', 'yes'),
(16, '5f1db570bf96b', 'Sarah', 'Kaka', '', 'What''s marriage\n', NULL, '2020-07-26 16:55:12', 'yes'),
(17, '5f1db609c1c07', 'Sarah', 'Kaka', '5f1341c7ec318', 'What''s marriage\n', NULL, '2020-07-26 16:57:45', 'yes'),
(18, '5f1db63ed7686', 'Sarah', 'Kaka', '5f134233e2cc7', 'What are the qualities of a good minister\n', NULL, '2020-07-26 16:58:38', 'yes'),
(19, '5f1db686e05cb', 'Sarah', 'Kaka', '5f134233e2cc7', 'Why do ministers fast\n', NULL, '2020-07-26 16:59:50', 'yes');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE IF NOT EXISTS `sessions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `uname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `session_id` varchar(255) NOT NULL,
  `category` varchar(100) NOT NULL,
  `level` int(4) NOT NULL,
  `var1` varchar(255) NOT NULL,
  `var2` varchar(255) NOT NULL,
  `var3` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pswd` (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(100) NOT NULL,
  `sname` varchar(100) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `cat` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `tel` varchar(25) NOT NULL,
  `pswd` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `postal` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `sno` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fname`, `sname`, `gender`, `cat`, `email`, `tel`, `pswd`, `address`, `country`, `postal`, `timestamp`, `sno`) VALUES
(1, 'Henry', 'Kamya', 'male', 'uce', 'andamahenry1@gmail.com', '0774649407', 'e1e6578f691cf439ec6b9d0d7ff6b66041e2be01cc2ec96b8dd63230d95ba8f15f7f23f294d76ff15dc4e2e0f8acdb7ded2d495cf2590833a1ae2fcf78dddeb8', '', '', 0, '2020-09-16 13:58:40', '5f621a10bd159'),
(2, 'Richard', 'Kato', 'male', 'uace', 'mwengeza@gmail.com', '0774555185', 'e1e6578f691cf439ec6b9d0d7ff6b66041e2be01cc2ec96b8dd63230d95ba8f15f7f23f294d76ff15dc4e2e0f8acdb7ded2d495cf2590833a1ae2fcf78dddeb8', '', '', 0, '2020-09-16 14:46:22', '5f62253e276d7'),
(3, 'Glayn', 'Bukman', 'male', 'uace', '', '0701173049', '3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2', '', '', 0, '2020-09-17 11:12:53', '5f6344b5042ee');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
