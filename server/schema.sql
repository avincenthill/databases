CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'messages'
--
-- ---

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `text` INTEGER NULL DEFAULT NULL,
  `id_rooms` INTEGER NULL DEFAULT NULL,
  `id_users` INTEGER NULL DEFAULT NULL,
  `timestamp` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'rooms'
--
-- ---

DROP TABLE IF EXISTS `rooms`;

CREATE TABLE `rooms` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'friendships'
--
-- ---

DROP TABLE IF EXISTS `friendships`;

CREATE TABLE `friendships` (
  `first_friend` INTEGER NULL DEFAULT NULL,
  `second_friend` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY ()
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (id_rooms) REFERENCES `rooms` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
ALTER TABLE `friendships` ADD FOREIGN KEY (first_friend) REFERENCES `users` (`id`);
ALTER TABLE `friendships` ADD FOREIGN KEY (second_friend) REFERENCES `users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `friendships` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `messages` (`id`,`text`,`id_rooms`,`id_users`,`timestamp`) VALUES
-- ('','','','','');
-- INSERT INTO `users` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `rooms` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `friendships` (`first_friend`,`second_friend`) VALUES
-- ('','');



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

