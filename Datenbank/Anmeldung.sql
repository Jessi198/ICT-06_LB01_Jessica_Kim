show databases;

-- create empty database called 'Anmeldung'
CREATE DATABASE anmeldung;

use anmeldung;

CREATE TABLE anmeldung
(
    id         INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    firstname  VARCHAR(15),
    lastname   VARCHAR(15),
    birthday   DATE,
    email      VARCHAR(100),
    newsletter BOOLEAN,
    dates      VARCHAR(100)
);

show tables;




