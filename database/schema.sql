DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
 id int NOT NULL auto_increment,
 burger_name varchar(100) NOT NULL,
 devoured BOOL DEFAULT false,
 PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Nothing Compares 2 Blue (Cheese) Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Dont You Four Cheddar Bout Me Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('As Gouda as it Gets Burgers', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Total Eclipse of the Havarti Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('A Good Manchego is Hard to Find Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Ive Created a Muenster Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Captain Pepper Jack Sparrow Burgers', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Little Miss Bunshine Burger', false);
