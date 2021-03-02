DROP DATABASE IF EXISTS burger_me_up_db;

CREATE DATABASE burger_me_up_db;

USE burger_me_up_db;

CREATE TABLE burgers(
    	id INT NOT NULL AUTO_INCREMENT,
        burger_name VARCHAR (50),
        devoured BOOLEAN,
        PRIMARY KEY (id)
);

