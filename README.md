# Event-Management-System

Instructions to run the code

## Frontend Setup
1. Navigate to the Frontend directory and execute the following commands:
   1. `npm i` to install all necessary dependencies.
   2. `npm start` to initiate the application, typically running on port 3000.

## Backend Setup
2. Proceed to the Backend directory.
   1. Download the `scripts.sql` file and import the database into MySQL to initialize the initial data.
   2. To import MySQL data, first log in to your MySQL instance. Then, create a database and utilize the command `mysql -u username -p your_database_name < dumpfilename.sql` to import the data.
   3. Adjust the username, password, and database name according to your system configuration.
   4. To launch the backend, navigate to the backend folder and execute the command `go run .\main.go`. 
   

