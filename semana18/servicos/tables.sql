CREATE TABLE `to_do_list_users` (
  `id` varchar(64) NOT NULL,
  `name` varchar(64) NOT NULL,
  `nickname` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('NORMAL','ADMIN') DEFAULT 'NORMAL',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `to_do_list_tasks` (
  `id` varchar(64) NOT NULL,
  `title` varchar(64) NOT NULL,
  `description` varchar(1024) DEFAULT 'No description provided',
  `deadline` date DEFAULT NULL,
  `status` enum('TO_DO','DOING','DONE') DEFAULT 'TO_DO',
  `author_id` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `to_do_list_tasks_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `to_do_list_users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `to_do_list_assignees` (
  `task_id` varchar(64) NOT NULL,
  `assignee_id` varchar(64) NOT NULL,
  PRIMARY KEY (`task_id`,`assignee_id`),
  KEY `assignee_id` (`assignee_id`),
  CONSTRAINT `to_do_list_assignees_ibfk_1` FOREIGN KEY (`task_id`) REFERENCES `to_do_list_tasks` (`id`),
  CONSTRAINT `to_do_list_assignees_ibfk_2` FOREIGN KEY (`assignee_id`) REFERENCES `to_do_list_users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
