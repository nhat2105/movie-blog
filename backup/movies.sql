-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 03, 2024 at 07:44 AM
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
-- Database: `movies`
--

-- --------------------------------------------------------

--
-- Table structure for table `list`
--

CREATE TABLE `list` (
  `lid` int(255) NOT NULL,
  `title` varchar(1000) NOT NULL,
  `description` text NOT NULL,
  `poster` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `list`
--

INSERT INTO `list` (`lid`, `title`, `description`, `poster`) VALUES
(1, 'Best Movies of 2023', 'What a great year for movies. Here is a list of our top 10. ', 'https://th.bing.com/th?id=OIF.IHuZO40Nirlv5%2fV2Ssl8ew&rs=1&pid=ImgDetMain');

-- --------------------------------------------------------

--
-- Table structure for table `list_movie`
--

CREATE TABLE `list_movie` (
  `lid` int(255) NOT NULL,
  `mid` int(255) NOT NULL,
  `item_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `list_movie`
--

INSERT INTO `list_movie` (`lid`, `mid`, `item_id`) VALUES
(1, 1111, 1),
(1, 1508, 6),
(1, 2110, 2),
(1, 2612, 7),
(1, 2701, 3);

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `mid` int(255) NOT NULL,
  `title` varchar(1000) NOT NULL,
  `review` longtext NOT NULL,
  `poster` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`mid`, `title`, `review`, `poster`) VALUES
(1111, 'Oppenheimer', '', 'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_FMjpg_UX1000_.jpg'),
(1201, 'Renaissance: A Film by Beyoncé', '', 'https://m.media-amazon.com/images/M/MV5BNDBhODM5MjMtNTdkYy00ZTIxLWEwNWYtZTA1MDBkYjAzZjJhXkEyXkFqcGdeQXVyMTY0Njc2MTUx._V1_FMjpg_UX1000_.jpg'),
(1508, 'Monster', '', 'https://m.media-amazon.com/images/M/MV5BNDA3NTQ1YWItZDg4Ny00ZDYxLWJmZDYtODY4MTcwYWFlMDYwXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg'),
(1989, 'The Eras Tour: A Gift to \"You Guys\"', 'Visual feasts, sparkling costumes and cheerful crowds, sure, but 2 hours and 45 minutes run time\r\nfeels long if you aren\'t into Taylor Swift.\r\nThe Eras Tour Movie composites of Taylor Swift’s last stop of her same-titled tour, taken place in\r\nSofi Stadium, Los Angeles. The performances are separated into 10 different acts, each represents 1 of\r\nher past albums. Starting sweetly with Lover, softly progressing to Fearless, the country music continuing\r\nwith Evermore, switching gear to Reputation, going back to chill music with Speak Now, youthfully\r\ncontinuing with Red, calming down with Folklore, entering her biggest commercial success era of 1989,\r\ntopping it off with 2 surprising songs and finally ending it with her latest album Midnights.\r\nI never thought the cinema could become an event itself in today’s time: seeing all the Swifties\r\ndressing up, chanting, singing along in the auditorium, certainly, this is a dream come true to all the fans\r\nand I would appreciate it more if I were one. As a non-fan myself, this musical event felt long, as I could\r\nonly enjoy and sing along to ⅔ of the songs and immersed myself in the visuals and Taylor Swift’s gifted\r\nsharp lyrics that shaped her musical identity for the rest of the time. Nevertheless, it was a nice\r\nexperience. I found myself cheering all the time and just vibing to the music. At the end of the movie, a\r\nsense of joy took over me - seeing Taylor effortlessly confident and pulling off all these well-thought\r\nperformances on stage, which traces to her 17 years long career and the fact just to witness how far she\r\nhas come in the industry made me felt so so proud of Taylor. One of the greatest musical events of the\r\nyear indeed', 'https://m.media-amazon.com/images/M/MV5BMTU1Y2EzYTQtNDE2Zi00YmY0LTlhOTMtNjA1NzVlZTczMTFlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg'),
(2110, 'Killers of the Flower Moon', '', 'https://www.dvdsreleasedates.com/posters/800/K/Killers-of-the-Flower-Moon-2023-movie-poster.jpg'),
(2612, 'The Boy and the Heron', '', 'https://m.media-amazon.com/images/M/MV5BZjZkNThjNTMtOGU0Ni00ZDliLThmNGUtZmMxNWQ3YzAxZTQ1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg'),
(2701, 'Poor Things', '', 'https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `movie_references`
--

CREATE TABLE `movie_references` (
  `mid` int(255) NOT NULL,
  `url` varchar(1000) NOT NULL,
  `poster` varchar(1000) NOT NULL,
  `rid` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `movie_references`
--

INSERT INTO `movie_references` (`mid`, `url`, `poster`, `rid`) VALUES
(1989, 'https://abcnews.go.com/GMA/Culture/review-taylor-swift-eras-tour-accentuates-gift-artistic/story?id=104008965', 'https://content.fortune.com/wp-content/uploads/2023/03/Taylor-Swift-Eras-Tour-GettyImages-1474459622.jpg', 'Peter Travers (GMA) Review');

-- --------------------------------------------------------

--
-- Table structure for table `movie_shots`
--

CREATE TABLE `movie_shots` (
  `mid` int(255) NOT NULL,
  `sid` int(255) NOT NULL,
  `url` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `movie_shots`
--

INSERT INTO `movie_shots` (`mid`, `sid`, `url`) VALUES
(1989, 1, 'https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/424638519_122101777268198574_2308029881586961182_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=p4GGjRe0BT8AX96LFi6&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfBHMf_KosEf5ruFFjnwl45HLtxwZJH6VwJaaiNlcr4s_g&oe=65C252E8'),
(1989, 2, 'https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/423249864_122101777274198574_6610757710962830647_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=G_8kmH2o7HUAX-e71ww&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfBNLXn976jMvSQrqaOKz1LGvfpKkJCrQxueiD2aE_BCxw&oe=65C1E0F4'),
(1989, 3, 'https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/424637612_122101777262198574_5617822096441840524_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=VYzY4HnB-jIAX8F3hre&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfAHraOCu9rCNZ0Ou6PR6W7F7gMOdgwfICQk94d7E8Exkg&oe=65C266A2'),
(1989, 4, 'https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/423312501_122101777370198574_410988980111455521_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=MeYizBfRGf0AX_lzTlZ&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfCBXTsWBGGdcnZn80n6gDjS-BBK1UoP4sEei7h2dax4lg&oe=65C2DA5D'),
(1989, 5, 'https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/423236559_122101777406198574_9207878990950579489_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=T0m6QJwDSuMAX_L1KAU&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfCUZHdJr5uDB3287mW0anDe0Tfw7Noz07xIu-ecz86koQ&oe=65C29540'),
(1989, 6, 'https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/422705069_122101777400198574_2528679889289960747_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=xFxK4fILp58AX8sSUX9&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfCqUUmZ9mkQvK4K-0aCFNJmePAKaVGMNjpcA6-bJR0FTg&oe=65C1D7E0'),
(1989, 7, 'https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/424543360_122101777562198574_2257903834997668124_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=RNYA6ekEaHgAX96T68T&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfDC-Hht3uCp90_UTHaoUatXl8ZnPpHtI0pc7BYAz4UEtQ&oe=65C206B2'),
(1989, 8, 'https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/424547152_122101777556198574_8445668783240804436_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=9e0JVHj2-7MAX9zedwL&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfBu-TgKI9Zjit6SE1hOo4Q5GM2gezue2uJCE93Xx8iBng&oe=65C36CB2'),
(1989, 9, 'https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/423312549_122101777580198574_5346103462639462860_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=eJ_xmSlgXjwAX_i0IfN&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfBzPWHb48RVShcRCPRfMdLuZPfyvVsiav1IfuuTBeJfyA&oe=65C2DF6B'),
(2701, 1, 'https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/423006695_122102280998198574_7678101834122645526_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=gAvX6tsM1GcAX-BIIaY&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfAvKw9r4QtkZL0vjMy5pMVweTDJPJijoKD8y3iFqVrkSw&oe=65C35630'),
(2701, 2, 'https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/423715748_122102280710198574_1653897064586232269_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=gX6tm0QpWrQAX-kLvWd&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfBN61IkZOB4on7oFeYlxXXYQP9Hrl-Hm7gWK6vlAGOGzg&oe=65C2B13E'),
(2701, 3, 'https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/424524656_122102631710198574_1538394682786110913_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=wEi9j15AjkQAX80UCCt&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfALXUEEDYxoOeIdhaOnQwKn5sZVaIKZGFuCtYwxtoqZbg&oe=65C3A3C0'),
(2701, 4, 'https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/424553994_122102635970198574_1010539599685203482_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=524774&_nc_ohc=HDPLdNR6CbAAX-H2EY4&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfALgkRBfRN-TotNXodHAxyeRsAXoA5T_cScBtUSpxZeVQ&oe=65C2B1C0'),
(2701, 5, 'https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/423132803_122102281028198574_2747997830710845811_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=WLTvRM05cagAX83oQM1&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfCl6eWcyipfiB0tB8w2TDPCKX8pxQCWL9L_0d0DN723kw&oe=65C275E1'),
(2701, 6, 'https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/424557704_122102631830198574_187364960520990837_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=BpYMalVAorAAX8-W9rI&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfDtBVGLSZxSrt5QCnhE0tysU6wSjkzMNV6U3lsyH4U8Yw&oe=65C2BCDC'),
(2701, 7, 'https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/424747612_122102632004198574_5142831253238219462_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=6n4QZzHwGZQAX86IF4L&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfANEZCXtPvh9jYKSsTRDm-7KOhs8UswPivgKPiHIkuu0Q&oe=65C247A8'),
(2701, 8, 'https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/424554350_122102631854198574_2042855537382755047_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=sVIWbdqKQ6EAX9aiMAi&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfAYEgB5E-jJVzHPyJi6VpN7G-AYwsIHdgi2eYumiMHHyQ&oe=65C26B36');

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `pid` int(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `rating` int(255) NOT NULL,
  `mid` int(255) NOT NULL,
  `poster` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`pid`, `type`, `description`, `rating`, `mid`, `poster`) VALUES
(1, 'Analysis', 'Section 1: Identification and requirements\r\nBackground environment:\r\nThe fitness and wellness industry is experiencing a rising demand for personalized health monitoring. With a diverse user base engaging in home, gym, and outdoor workouts, our company is developing a personal fitness tracker to address this trend. The system aims to streamline fitness tracking and program management, providing users with a unified platform for effortless monitoring and analysis of their physical activities. This solution is designed to enhance user engagement, promote healthier lifestyles, and contribute to overall well-being. <br/>\r\n\r\nOur company is dedicated to empowering individuals to lead healthier lifestyles through the integration of technology and fitness. The company envisions a world where technology plays a pivotal role in making fitness accessible, enjoyable, and personalized for everyone.\r\n\r\nThe organizational philosophy revolves around the belief that everyone deserves a tool that can assist them in achieving their fitness goals, regardless of their fitness level or background. FitTech Solutions is committed to developing user-friendly and effective solutions that cater to the diverse needs of its users.\r\n\r\n\r\nSystem Usage and Expectations:\r\n\r\nThe fitness tracker system will serve as a multifunctional tool to track, analyze, and manage various aspects of users\' physical activities. The general expectations for the system include:\r\n\r\nComprehensive Activity Tracking:\r\nUsers should be able to track diverse activities such as running, cycling, gym workouts, and home exercises.\r\n\r\n\r\nReal-time Monitoring:\r\nThe system should provide real-time updates on key metrics like heart rate, calories burned, distance covered, and other relevant fitness parameters.\r\n\r\nProgram Customization:\r\nUsers should have the ability to create and customize workout programs tailored to their fitness goals, taking into account different activity types and skill levels.\r\n\r\nData Analytics and Insights:\r\nThe system should offer insightful analytics, visualizations, and trends derived from the collected data, giving feedback on current fitness progress, and aiding users in optimizing their fitness routines.\r\n\r\nUser-Friendly Interface:\r\nThe interface should be intuitive, making it accessible for users with varying levels of technical expertise.\r\n\r\nCompatibility and Integration:\r\nThe system should be compatible with a range of devices and platforms, ensuring seamless integration with smartphones, smartwatches, and other fitness-related gadgets.\r\n\r\n\r\nSystem constraints:\r\nBudgetary Constraints:\r\nThe project must adhere to a predefined budget, explicitly, this project receives no fundings on hardware, thus this influences the choice of software implementation instead of a physical equipment/devices.\r\n\r\nHardware Limitations:\r\nThe project has limitations on its own hardware integration (as mentioned with budget constraints above), thus we aim to develop a software that can be widely accessible to all users on many types of devices platforms (namely smartwatches, phones, laptops, computers)\r\n \r\nData Privacy and Security:\r\nAs a software without physical hardware facade, users data has a higher chance to be breached, however, information received from users required are minimal and considered to be non-harmful information if leaked (i.e. body measurements and current health status), which our project also will keep private and disclosed.<br/>\r\n\r\n\r\nIdentification\r\n\r\nExpected types of users:\r\n\r\nBeginner Fitness Enthusiasts:\r\n\r\nExperience: No experience with fitness tracking.\r\nTraining: Basic onboarding and familiarization of the system interface and features. \r\nContext: Users who are new to fitness tracking and require general guidance, advice or tips to get started.\r\n\r\nRegular Gym-Goers:\r\n\r\nExperience: Moderate experience or familiar with fitness tracking apps.\r\nTraining: Quick familiarization with advanced features.\r\nContext: Individuals who visit the gym regularly and seek detailed insights into their workouts and progress.\r\n\r\nProfessional Athletes:\r\n\r\nExperience: Advanced users with in-depth knowledge of fitness metrics.\r\nTraining: Comprehensive training on advanced analytics and customization of advanced features and interfaces.\r\nContext: Athletes who require precise data tracking for performance optimization.\r\n\r\nSeniors:\r\n\r\nExperience: No experience with fitness tracking\r\nTraining:  May or may not be familiar with the system interface and features.\r\nContext: Individuals seeks low-impact exercises for health maintenance\r\n\r\n\r\nWork contexts:\r\n\r\nHome Workouts:\r\n\r\nSetting: Users exercising at home.\r\nTypical Situations: Carrying out indoor activities, following virtual workouts, tracking fitness progress without specialized gym equipment.\r\n\r\nGym Sessions:\r\n\r\nSetting: Users at the gym.\r\nTypical Situations: Real-time tracking of gym exercises, monitoring heart rate during intense workouts, and analyzing performance against previously set goals.\r\n\r\nOutdoor Activities:\r\n\r\nSetting: Users engaged in outdoor activities (running, cycling, etc.).\r\nTypical Situations: GPS-enabled tracking, assessing distance and pace, monitoring outdoor-specific metrics.<br/>\r\n\r\nRehabilitations Sessions:\r\n\r\nSetting: Users that use the system for post-injury recovery either at rehab center or remote at home.\r\nTypical Situations:  Carrying out indoor activities, following virtual workouts, tracking fitness progress without specialized gym equipment.\r\n\r\nGym Group Class Participation:\r\n\r\nSetting: Users at the same fitness class.\r\nTypical Situations: Users in the same fitness class perform their usual fitness routine, while the system synchronizes the class routine, tracks participants and provides collective analytics.\r\n\r\n\r\nConcrete task examples\r\nTracking Exercise Routine: \r\nDescription: A typical user (mostly beginner, gym-goers and professional athletes) tracks their fitness progress by comparing the efficiency (i.e the amount of calories burnt, the duration of running time, etc…) of their today’s activities to the previous day. \r\n\r\nThe current method used is to compare their stats to the previous day using Apple’s Health app. Some users track the progress of their daily routine exercise by setting a point of reference in their activities and use it as the measurement (i.e. for jogging, users typically choose a specific location and aim to reach there every day. The progress of this task is measured by the distance from their current location to the target destination)\r\n\r\nImportance: Frequently done and important\r\n\r\n\r\nSet Fitness Goal: \r\nDescription: An average user (typically beginner, gym-goers and professional athletes) sets weekly or monthly fitness objectives (such as achieving specific weight or muscle gains). This involves crafting a personalized fitness plan designed for the desired goal, complete with a specified timeframe for goal attainment. <br/>\r\n\r\nCurrently, users tend to lay out a plan on an app or paper for their desired goal and follow it, with a frequent check (i.e every single week) to see if they are on track as outlined.\r\n\r\nImportance: Frequently done and moderately important\r\n\r\n\r\nWeight Management: \r\nDescription: An average user (typically beginner, gym-goers and professional athletes) intends to control their weight by logging their daily food and beverage intake in order to determine what the next steps should be in order to maintain/achieve their desired weight. \r\nSimilar to fitness goals, this tends to be done by paper or a health’s app.  \r\n\r\nImportance: Quite frequently done and moderately importance\r\n\r\n\r\nSleep Tracking Routine: \r\nDescription: An average user (typically beginner, gym-goers and professional athletes) wants to manage their sleep routine. They track their sleeping hours and record their bed time, wake up time to determine the activated point of their sleep cycle, as well as the consistency of their sleep quality.\r\n\r\nCurrently, users who strictly want to control their sleep quality tend to remember their bedtime, note/record those in the Note app on the phone, while others who want to get in good habits of controlling their sleep quality but doesn’t have experiences of having a consistent bedtime tend to get lost at the first step to determine how to start to develop this habit. \r\n\r\nImportance: Not frequently done and quite important\r\n\r\n\r\nSymptoms Diagnosis: \r\nDescription: A user records all of their irregular physical symptoms in order to determine what underlying issues might be, as well as potential health risks (i.e illness, disease or infection) that they might suffer from.\r\nImportance: Not frequently done and not very important\r\n\r\nIndoor Exercise Logging:\r\nUser Class: Amateur Fitness Enthusiasts.\r\nImportance: Frequently done and important.\r\nTask Description: Logging indoor exercises (no equipment), selecting from a predefined list, and entering the duration to track overall activity. \r\n\r\nPerformance analytics for Outdoor Activities:\r\nUser Class: Amateur Fitness Enthusiasts and Professional Athletes.\r\nImportance: Moderately important.\r\nTask Description: In-depth analysis of distance traveled, mapping routes, performance trends, etc.\r\n\r\n\r\nTentative list of requirement\r\nAbsolute must include: \r\nActivity tracker (i.e heart-rate, calories burnt, step walked measurements). This is the main feature that all users require from a personal fitness tracker app, thus it is essential to be included.\r\n\r\n\r\nFitness goal: This is another main feature that all users expect from a personal fitness tracker app.\r\n\r\n\r\nShould include:\r\nWeight Management: while it is not a required feature, many groups of users (athlete, gym-goers,  PT) expect this to be part of the interface as weight control is important to them. <br/>\r\n\r\n\r\nCould include:\r\nSleep Tracker Routine: it is not a required feature and rarely been used, only to a small portion of users, sleep is considered a part of personal fitness tracker, rather, they use other interfaces to keep track of their sleep routine. \r\n\r\n\r\nExclude: \r\nSymptoms Analysis: as for the users, this feature is not very important for a personal fitness tracker itself. Data of symptoms collected contexts can be ambiguous if the level of symptoms are recorded or measured incorrectly, thus the analysis can also be inaccurate. Also, on the developer end, it involves data science and AI, which is also difficult to manage with. \r\nSection 2: Prototypes and walkthrough \r\n\r\n\r\n\r\n\r\n', 9, 2701, 'https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/09/poor_things_xlg.jpg'),
(2, 'Analysis', '', 0, 1111, 'https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/09/poor_things_xlg.jpg'),
(3, '', '', 0, 0, 'https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/09/poor_things_xlg.jpg'),
(4, 'WHO', '', 5, 1111, 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/12/oppenheimer-poster.jpg'),
(5, '', '', 0, 0, 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/12/oppenheimer-poster.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `post_scenes`
--

CREATE TABLE `post_scenes` (
  `scene_one` varchar(1000) NOT NULL,
  `scene_two` varchar(1000) NOT NULL,
  `pid` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `post_scenes`
--

INSERT INTO `post_scenes` (`scene_one`, `scene_two`, `pid`) VALUES
('https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/424554350_122102631854198574_2042855537382755047_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=sVIWbdqKQ6EAX9aiMAi&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfAYEgB5E-jJVzHPyJi6VpN7G-AYwsIHdgi2eYumiMHHyQ&oe=65C26B36', 'https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/424747612_122102632004198574_5142831253238219462_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=6n4QZzHwGZQAX86IF4L&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfANEZCXtPvh9jYKSsTRDm-7KOhs8UswPivgKPiHIkuu0Q&oe=65C247A8', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `list`
--
ALTER TABLE `list`
  ADD PRIMARY KEY (`lid`);

--
-- Indexes for table `list_movie`
--
ALTER TABLE `list_movie`
  ADD PRIMARY KEY (`lid`,`mid`);

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`mid`);

--
-- Indexes for table `movie_references`
--
ALTER TABLE `movie_references`
  ADD PRIMARY KEY (`mid`,`rid`);

--
-- Indexes for table `movie_shots`
--
ALTER TABLE `movie_shots`
  ADD PRIMARY KEY (`mid`,`sid`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `post_scenes`
--
ALTER TABLE `post_scenes`
  ADD PRIMARY KEY (`pid`),
  ADD UNIQUE KEY `scene_one` (`scene_one`,`scene_two`) USING HASH;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
