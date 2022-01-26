-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 26, 2022 at 12:43 PM
-- Server version: 8.0.27-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `binar_challenge_6`
--

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20220123145524-create-user-game.js'),
('20220123145847-create-user-game-biodata.js'),
('20220126033813-create-user-game-history.js');

-- --------------------------------------------------------

--
-- Table structure for table `user_games`
--

CREATE TABLE `user_games` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_games`
--

INSERT INTO `user_games` (`id`, `name`, `age`, `address`, `created_at`, `updated_at`) VALUES
(12, 'Ilham', NULL, NULL, '2022-01-26 01:44:35', '2022-01-26 01:44:35'),
(13, 'test', NULL, NULL, '2022-01-26 01:49:18', '2022-01-26 01:49:18'),
(14, 'test', NULL, NULL, '2022-01-26 01:50:00', '2022-01-26 01:50:00'),
(15, '', NULL, NULL, '2022-01-26 01:50:34', '2022-01-26 01:50:34'),
(16, 'test', NULL, NULL, '2022-01-26 01:51:49', '2022-01-26 01:51:49'),
(17, 'Ilham', NULL, NULL, '2022-01-26 02:10:22', '2022-01-26 02:10:22'),
(18, 'Fauzi', 23, 'Bontang', '2022-01-26 03:45:07', '2022-01-26 03:45:07'),
(19, 'Haruna', 23, 'Bontang', '2022-01-26 03:45:07', '2022-01-26 03:45:07'),
(21, 'ukm baru', NULL, NULL, '2022-01-26 04:03:31', '2022-01-26 04:03:31'),
(22, 'test', NULL, NULL, '2022-01-26 04:04:15', '2022-01-26 04:04:15'),
(23, 'test', NULL, NULL, '2022-01-26 04:09:08', '2022-01-26 04:09:08'),
(24, 'test', NULL, NULL, '2022-01-26 04:11:03', '2022-01-26 04:11:03'),
(25, 'roby', NULL, NULL, '2022-01-26 04:13:45', '2022-01-26 04:13:45'),
(26, 'sdff', NULL, NULL, '2022-01-26 04:32:08', '2022-01-26 04:32:08');

-- --------------------------------------------------------

--
-- Table structure for table `user_game_biodata`
--

CREATE TABLE `user_game_biodata` (
  `id` int NOT NULL,
  `user_game_id` int DEFAULT NULL,
  `hobby` varchar(255) DEFAULT NULL,
  `favorite_game` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_game_biodata`
--

INSERT INTO `user_game_biodata` (`id`, `user_game_id`, `hobby`, `favorite_game`, `created_at`, `updated_at`) VALUES
(12, 12, 'coding', 'pubg', '2022-01-26 01:44:35', '2022-01-26 01:44:35'),
(13, 13, 'tesst', 'call of duty ', '2022-01-26 01:49:18', '2022-01-26 01:49:18'),
(14, 14, 'tesst', 'call of duty ', '2022-01-26 01:50:00', '2022-01-26 01:50:00'),
(15, 15, '', '', '2022-01-26 01:50:34', '2022-01-26 01:50:34'),
(16, 16, 'tesst', 'call of duty ', '2022-01-26 01:51:49', '2022-01-26 01:51:49'),
(17, 17, 'coding', 'pubg', '2022-01-26 02:10:22', '2022-01-26 02:10:22'),
(20, 20, 'coding', 'pubg', '2022-01-26 03:50:49', '2022-01-26 03:50:49'),
(21, 21, 'tesst', 'call of duty ', '2022-01-26 04:03:31', '2022-01-26 04:03:31'),
(22, 22, 'tesst', 'call of duty ', '2022-01-26 04:04:15', '2022-01-26 04:04:15'),
(23, 23, 'tesst', 'call of duty ', '2022-01-26 04:09:08', '2022-01-26 04:09:08'),
(24, 24, 'tesst', 'call of duty ', '2022-01-26 04:11:03', '2022-01-26 04:11:03'),
(25, 25, 'tesst', 'call of duty ', '2022-01-26 04:13:45', '2022-01-26 04:13:45'),
(26, 26, 'sfse', '121', '2022-01-26 04:32:08', '2022-01-26 04:32:08');

-- --------------------------------------------------------

--
-- Table structure for table `user_game_history`
--

CREATE TABLE `user_game_history` (
  `id` int NOT NULL,
  `user_game_id` int DEFAULT NULL,
  `skor` int DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_game_history`
--

INSERT INTO `user_game_history` (`id`, `user_game_id`, `skor`, `created_at`, `updated_at`) VALUES
(3, 18, 100, '2022-01-26 03:46:32', '2022-01-26 03:46:32'),
(4, 23, 100, '2022-01-26 04:09:08', '2022-01-26 04:09:08'),
(5, 24, 100, '2022-01-26 04:11:03', '2022-01-26 04:11:03'),
(6, 25, 100, '2022-01-26 04:13:45', '2022-01-26 04:13:45'),
(7, 26, NULL, '2022-01-26 04:32:08', '2022-01-26 04:32:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `user_games`
--
ALTER TABLE `user_games`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_game_biodata`
--
ALTER TABLE `user_game_biodata`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_game_id` (`user_game_id`);

--
-- Indexes for table `user_game_history`
--
ALTER TABLE `user_game_history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_game_id` (`user_game_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_games`
--
ALTER TABLE `user_games`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `user_game_biodata`
--
ALTER TABLE `user_game_biodata`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `user_game_history`
--
ALTER TABLE `user_game_history`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_game_biodata`
--
ALTER TABLE `user_game_biodata`
  ADD CONSTRAINT `user_game_biodata_ibfk_1` FOREIGN KEY (`user_game_id`) REFERENCES `user_games` (`id`);

--
-- Constraints for table `user_game_history`
--
ALTER TABLE `user_game_history`
  ADD CONSTRAINT `user_game_history_ibfk_1` FOREIGN KEY (`user_game_id`) REFERENCES `user_games` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
