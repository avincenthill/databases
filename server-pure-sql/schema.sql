USE chat;

DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` TEXT NULL,
  `id_rooms` INT NULL,
  `id_users` INT NULL,
  `timestamp` TEXT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS `rooms`;

CREATE TABLE `rooms` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS `friendships`;

CREATE TABLE `friendships` (
  `first_friend` INT NULL,
  `second_friend` INT NULL
);

ALTER TABLE `messages` ADD FOREIGN KEY (id_rooms) REFERENCES `rooms` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
ALTER TABLE `friendships` ADD FOREIGN KEY (first_friend) REFERENCES `users` (`id`);
ALTER TABLE `friendships` ADD FOREIGN KEY (second_friend) REFERENCES `users` (`id`);
