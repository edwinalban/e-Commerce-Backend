# e-Commerce-Backend
Backend for e-Commerce shopping

## Description

I built this project in order to practice using MySQL databases and queries, as well as javascript models and express routes to view, add, edit, and delete information. It solves the problem of having to remember specific information for inventory, as all of the categories, products, and tags can be viewed by querying the database. I learned about building the back end structure for an app, using routes and models, and building relationships between tables via thorugh models.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)

## Installation

You will need to install Node.js, Express and MySQL in order to use this app. You will also need to download Insomnia, or Postman in order to test the routes for functionality. 

Instructions for installating Node.js can be found here: https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs 

Express.js can be installed by typing "npm install express" into the terminal command line.

Instructions for installing MySQL can be found here: https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide

Insomnia can be downloaded here: https://insomnia.rest/

Postman can be downloaded here: https://www.postman.com/

## Usage

In order to use the application, you will need to log into MySQL and source the database schema to create the database as shown in the video below. 

After the database has been created, you will need to open the powershell terminal, or Git Bash and type "npm install" into the command line, in order to install the necessary dependencies.

Once the dependencies have been installed, type "npm run seed" to add the data to the database.

Finally, type "npm start" into the command line to start the server.

![alt text](assets/images/)
![alt text](assets/images/)

A link to the video to showcase the functionality of the app is below.

https://drive.google.com/file/d/1NnwGKHx5wBLLrvjP1O0cv06fICjDhgOC/view

## Tests

This project can be tested by entering a variety of routes into Insomnia, or Postman and validating that the updates have been made running routes for viewing all categories, products, or tags depending on which updates were made.
