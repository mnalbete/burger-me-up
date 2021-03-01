DROP DATABASE IF EXISTS burgerdb;

CREATE DATABASE burgerdb;

USE burgerdb;

CREATE TABLE burgers(
    	id INT NOT NULL AUTO_INCREMENT,
        burger_name VARCHAR (50),
        devoured BOOLEAN,
        PRIMARY KEY (id)
);

