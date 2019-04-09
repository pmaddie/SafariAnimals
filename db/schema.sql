/* // safariAnimals_db */

### Schema

CREATE DATABASE safariAnimals_db;
USE safariAnimals_db;

CREATE TABLE safarianimals
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	seen BOOLEAN DEFAULT,
	PRIMARY KEY (id)
);
