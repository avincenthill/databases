CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` INTEGER NOT NULL,
  `text` INTEGER NULL,
  `id_rooms` INTEGER NULL,
  `id_users` INTEGER NULL,
  `timestamp` INTEGER NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER NOT NULL,
  `name` INTEGER NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'rooms'
--
-- ---

DROP TABLE IF EXISTS `rooms`;

CREATE TABLE `rooms` (
  `id` INTEGER NOT NULL,
  `name` INTEGER NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'friendships'
--
-- ---

DROP TABLE IF EXISTS `friendships`;

CREATE TABLE `friendships` (
  `first_friend` INTEGER NULL,
  `second_friend` INTEGER NULL
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (id_rooms) REFERENCES `rooms` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
ALTER TABLE `friendships` ADD FOREIGN KEY (first_friend) REFERENCES `users` (`id`);
ALTER TABLE `friendships` ADD FOREIGN KEY (second_friend) REFERENCES `users` (`id`);
