CREATE DATABASE burgers_db;
USE burgers_db;
-- Create the table tasks.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger varchar(255) NOT NULL,
  eaten BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);
