USE chat;

DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int not null auto_increment,
  text varchar(200) not null,
  roomname varchar(200) not null,
  userid int not null,
  primary key (id)
);

CREATE TABLE users (
  id int not null auto_increment,
  username varchar(200) not null,
  primary key (id)
);