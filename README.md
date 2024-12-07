# WEB_PTPMHDV

# Project Setup and Run Guide

## Step 1: Clone the Repository
Clone the repository from GitHub:
```bash
git clone https://github.com/dohoanggiap2004/WEB_PTPMHDV.git
```

## Step 2: Initialize the Database
Run the commercial.sql file in MySQL to set up the required database.

## Step 3: Install Dependencies
Open the client, dashboard, serverNodejs and gateway folders in your preferred IDE (e.g., Visual Studio Code, WebStorm). In each folder’s terminal, run the following command to install dependencies:
```bash
npm install
```

## Step 4: Configure the Java Server
Go to the serverJava folder. Open the application.properties file located in ./src/main/resources/application.properties. Configure the spring.datasource settings to match your local environment.

## Step 5: Run the Application
client: Run the following command in the terminal to start the client:
```bash
npm start
```
dashboard: Run the following command in the terminal to start the dashboard:
```bash
npm start
```
After starting the dashboard, access the admin login page at:
```bash
Copy code
/admin/login
```
Use the following credentials to log in:
Account: admin
Password: abc

gateway: Run the following command in the terminal to start the gateway server:
```bash
npm start
```
serverNodejs: Run the following command in the terminal to start the Node.js server:
```bash
npm start
```
serverJava: Open and run the CommercialWebsiteApplication.java file to start the Java server.
