-- phpMyAdmin SQL Dump
-- version 3.4.10.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 31, 2023 at 04:34 AM
-- Server version: 5.5.20
-- PHP Version: 5.3.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `arghapedia`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(20) NOT NULL,
  `departemen` varchar(35) DEFAULT NULL,
  `email` varchar(30) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `typeUser` int(10) unsigned NOT NULL DEFAULT '0',
  `point` int(11) NOT NULL DEFAULT '0',
  `kunjungan` smallint(6) NOT NULL DEFAULT '0',
  UNIQUE KEY `email` (`email`),
  KEY `ID` (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14522 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `first_name`, `departemen`, `email`, `pass`, `typeUser`, `point`, `kunjungan`) VALUES
(14257, '', 'QC-QA', '', 'd41d8cd98f00b204e9800998ecf8427e', 34, 875, 175),
(14111, 'eko prasetyo', 'Engineering Big Slitter', '060912', '78ee3b1803b267caf6c55f0c14a91f6e', 17, 5, 1),
(1000, 'guest', 'Process Big Slitter', '1000', 'e10adc3949ba59abbe56e057f20f883e', 27, 170, 34),
(11476, 'bambang wijatmoko', 'Process Small Slitter', '11476', 'aee517d6e2c714a5a7160dbd66d835f1', 26, 15, 3),
(11800, 'Andik Pariyono', 'Process Big Slitter', '11800', '0db32de7aed05af092becfc3789e7700', 27, 5, 1),
(12024, 'Heru Sulis', 'QC-QA', '12024', 'c8837b23ff8aaa8a2dde915473ce0991', 34, 10, 2),
(12025, 'Hendro Puji Triyono', 'QC-QA', '12025', '5a304615e59a56335292b5016a70603d', 34, 10, 2),
(12475, 'hendra rukmana', 'Engineering Big Slitter', '12475', 'ebea2325dc670423afe9a1f4d9d1aef5', 27, 255, 51),
(13025, 'fathulamin', 'Engineering Metalize & Coating', '13025', '58426cf937eb05143f82b6d41e8968bd', 15, 10, 2),
(227, 'Imam Hambali', 'Process Line 6 & 7', '13163', 'd41d8cd98f00b204e9800998ecf8427e', 23, 0, 0),
(13168, 'Erga Rahmat', 'Engineering Extrussion', '13168', '902b11deaf94126bd5245080a50ac3b2', 12, 10, 2),
(13291, 'Partomuan Napitupulu', 'Process Big Slitter', '13291', '0d698849ad83692b2336249c2e0777a8', 27, 5, 1),
(13381, 'Abdul Jakaria', 'Process Small Slitter', '13381', '7d0710824ff191f6a0086a7e3891641e', 26, 0, 0),
(237, '13500', 'Process Small Slitter', '13500', 'd41d8cd98f00b204e9800998ecf8427e', 26, 0, 0),
(13563, 'hasan basri  ', 'Process Small Slitter', '13563', 'bef8e54f341fc49bccb895942d3fd2e4', 26, 0, 0),
(13703, 'Veby Isabel Noventri', 'QC-QA', '13703', '0e5e9c2062c1fc0129fbd4befe4b9267', 34, 5, 1),
(13725, 'Didik Purwanto', 'Engineering Winder', '13725', '76b5c74c0160c4300d77ee0fd04dca1b', 14, 40, 8),
(13802, 'saepul apandi', 'Engineering Metalize & Coating', '13802', 'f687fe6272dcec3562f9c2e6a78a2110', 15, 10, 2),
(13829, 'budi', 'Engineering Winder', '13829', 'c46489a2d5a9a9ecfc53b17610926ddd', 14, 5, 1),
(13437, 'Hariyadi', 'QC-QA', '13hari', '1ae1ba92665a52e442dc608840988930', 34, 10, 2),
(14001, 'Ayub Iskanto', 'Engineering Stretching', '14001', '6567251a91a5d9d7f34bb66d7462a0fa', 13, 20, 4),
(242, 'Afrizal', 'Process Line BOPET', '14037', 'd41d8cd98f00b204e9800998ecf8427e', 24, 0, 0),
(14060, 'masruri yahya', 'Engineering Extrussion', '14060', '827ccb0eea8a706c4c34a16891f84e7b', 12, 0, 0),
(14077, 'Muhammad Irfan Nazmi', 'Engineering Regran', '14077', 'e77989ed21758e78331b20e477fc5582', 14, 30, 6),
(14162, 'esa ferry', 'Engineering Big Slitter', '14162', '8a790449d53d56013c5a5d351c332879', 17, 5, 1),
(14194, 'Gian Ni''matulloh kos', 'Engineering Stretching', '14194', 'fd47ef904d92b88514dc5287530213ab', 13, 45, 9),
(14197, 'Andi Purwanto', 'Engineering Winder', '14197', '11b892b14ce04b398b9b47b0f573ff5b', 14, 45, 9),
(14211, 'rifky alrasyid', 'Engineering Winder', '14211', '2abb2be31843adb40ce0f388ef7ac095', 14, 10, 2),
(14212, 'Toebagus Hendri I', 'Engineering Extrussion', '14212', '37b00d9747f890094970345da46bceaf', 12, 0, 0),
(14256, 'Haris Erdyanto', 'Engineering Big Slitter', '14256', '645fcd2dfa6a65e960c6a0cfa4be98d6', 2, 70, 14),
(14273, 'Amoghasakti Abinawa', 'QC-QA', '14273', 'e949caddedd40c2708bc15f9ffbcefbb', 34, 5, 1),
(14318, 'Muhamad Muhlisin', 'Engineering Extrussion', '14318', 'a15f9896c1b92e7adc7d0232afb30816', 12, 5, 1),
(14355, 'Alex Pratama', 'Engineering Stretching', '14355', 'e4558d6f64d7afa02497c3c8af271349', 13, 0, 0),
(14463, 'Mumpuni ArghaKarya', 'QC-QA', '14463', '655abc72c9a56d3f9de7a53af3a9623f', 34, 0, 0),
(14521, 'EVAN FADILLAH', 'Engineering Big Slitter', '14521', '8c5781246fcb0296e1f11cd4e2eee68d', 17, 0, 0),
(1, 'Arghapedia Admin', 'ENGINEERING', 'admin', '8ed7dfcff4e017e4f61d36bbbf1f08bc', 2, 310, 42),
(116, 'Agus Eko Prayogo', 'Process Line 4 & 5', 'AEP', '1a8a84e2b44c2dd7be8910dfbaf70465', 22, 71, 19),
(28, 'Agus Gunarso', 'Engineering Metalize & Coating', 'agunarso', '42b61e2c4e0d4b1ccce37d9e09410439', 15, 65, 13),
(14274, '14197', 'Engineering Winder', 'Andi Purwanto', 'dcddb75469b4b4875094e14561e573d8', 14, 15, 3),
(211, 'Sagar Pardianto', 'Engineering Development', 'Anto', 'e10adc3949ba59abbe56e057f20f883e', 2, 0, 0),
(189, 'Aris Munandar', 'Engineering Line 6 & 7', 'Aris', '54d81991cfb66d4158ecf488f3d1a980', 13, 5, 1),
(47, 'Edi Bustaman', 'Utility', 'bustaman', '992f0fed0720dbb9d4e060d03ed531ba', 35, 5, 1),
(42, 'Dindin Saefudin', 'Utility', 'dindin', '8f87878fd33e07ea418c37fa7ac69b73', 35, 65, 13),
(41, 'Edo Baskoro', 'Utility', 'edo', 'da212c910c00b5a9e945f4b129d44549', 35, 10, 2),
(33, 'Eko Hermawan', 'Process Development', 'eko', 'f659d005276678c0696b7f6beda66454', 33, 5070, 1014),
(107, 'eko hermawan', 'Engineering Development', 'eko.hermawan', 'f2acb68c5cd218d258a8f9a5b3beadd2', 2, 951, 191),
(7, 'Fuad Hasan', 'Engineering Development', 'fuad', '37dfc12bb40aef7e0912ac0a006b21a8', 2, 1005, 64),
(234, 'Hariyadi', 'QC-QA', 'Hari', '0b8796fa0b9e4340bbcc18b21bbfc445', 34, 5, 1),
(48, 'Harry Mulyana', 'Process Line 4 & 5', 'harry', 'ae97cad218fc1460f367cb360f4a5461', 22, 25, 5),
(90, 'Haryadi gondo', 'Engineering Line 6 & 7', 'harya', '4d1ef7cecd594cdf27c76f06d6da19ad', 13, 0, 0),
(43, 'Hendra Gunawan', 'Utility', 'hendra', '8c458fc1ed9bb89c1cd16889cb7e7e68', 35, 0, 0),
(25, 'Ishak Manuel', 'Process Line BOPET', 'ishak', '0a656cc19f3f5b41530182a9e03982a4', 24, 595, 119),
(2, 'Iwan Hermawan', 'Engineering Development', 'iwanhermawan', '0daa032397e1c6060409a6d64636d3a8', 2, 6360, 366),
(51, 'Jalal Ansory', 'QC-QA', 'jansory', '529ec1f7ea830a51f00dafb5b06cf091', 34, 90, 18),
(14464, 'Line 8', '', 'Line 8', 'd41d8cd98f00b204e9800998ecf8427e', 0, 0, 0),
(221, 'M.HANNANI', 'Process Small Slitter', 'M.HANNANI', 'af31bc10d1b9eeb2f33faddeeb48526d', 26, 0, 0),
(14254, 'Mario Stefanus Rezky', 'QC-QA', 'Mariostefanus', '74b95029f284b8bb1d38ff6b2fca814a', 34, 65, 13),
(14275, '14060', 'Engineering Extrussion', 'masruri yahya', '4a7d1ed414474e4033ac29ccb8653d9b', 12, 0, 0),
(45, 'Mulyadi', 'Process Line 6 & 7', 'mulyadi', '0bd4cddb7692ab6e39732c404f093a2a', 23, 16, 4),
(212, 'Partomuan', 'Process Line 6 & 7', 'Napitupulu', '208b4d4c3972a338b2fa2c156204c49e', 23, 0, 0),
(46, 'Nofiardi Eka Putra', 'Utility', 'nofiardi', '1e0b802d5c0e1e8434a771ba7ff2c301', 35, 20, 4),
(14358, 'ARIYANTO', 'Process Line 4 & 5', 'RAHMAT', 'cc318238bf3fb561aa2e0e5182222586', 22, 5, 1),
(105, 'Riswandi barus', 'Process Small Slitter', 'riswandibarus', '9fb8259aad5f8a6a08dc30979e6fe56f', 26, 810, 162),
(13802, 'saepul apandi', 'Engineering Metalize & Coating', 'saepul', 'f687fe6272dcec3562f9c2e6a78a2110', 15, 10, 2),
(40, 'Santosi', 'Utility', 'santosi', '05b0ea6e9b8e791347dfe157d54d679f', 35, 50, 10),
(222, 'iwan', 'Engineering Line 6 & 7', 'setiawan', 'd0e7b521c18b09876cb7693e42880dba', 13, 0, 0),
(4, 'Sigit Purwanto', 'Engineering Line 2 & 3', 'sigit', 'eb2538078fc0e47beef6c4bd5188c471', 12, 860, 42),
(10, 'Sumadja', 'Engineering Development', 'smj', '170f22f2d331241cb0480a8c4c416dda', 2, 110, 22),
(27, 'Sudiyono', 'Process Line BOPET', 'sudiyono', '570badcfe14697bf2a244e2e25b93e59', 27, 1285, 257),
(13986, 'Teddy Syafitrianto', 'QC-QA', 'Teddy', '51e942f1f0f6179175443e68de7a70e0', 34, 5, 1),
(23, 'Teten Sutendi', 'Process Line BOPET', 'teten', '24a29a235c0678859695b10896513b3d', 24, 0, 0),
(53, 'Tetty S. Manik', 'Utility', 'tety', '324450bbc4885ae02b0fc2e7f589374b', 35, 20, 4),
(44, 'Tolik Arifin', 'Utility', 'tolik', 'e3292c4c18eae706134c3a5874c6384e', 35, 10, 2),
(14135, 'riantar vianto', 'Engineering Big Slitter', 'vian', 'd6f169701ce019bd00b98aa2da85eb68', 17, 10, 2),
(99, 'Yessy natalia', 'Project', 'yessyq', 'd8578edf8458ce06fbc5bb76a58c5ca4', 35, 0, 0),
(209, 'moch fazry', 'Process Line 6 & 7', 'zamzamy', 'e10adc3949ba59abbe56e057f20f883e', 23, 0, 0),
(9, 'Zulkifli Ramadhan', 'Engineering Development', 'zulkifli', 'a412963e013751a90654aa344bc26efe', 2, 1305, 261);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
