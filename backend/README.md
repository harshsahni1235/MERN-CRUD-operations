This is a Node.js backend implementing CRUD operations using HTTP Methods, i.e. GET, PUT, POST, DELETE.

# Step 1: Installing dependencies

Clone the repository then run npm install

# Step 2: Link your api to PostgreSQL DB

You can install PostgreSQL locally or use pgAdmin 4. In both cases, go to the server\config\connectPostgres.js file then replace the configurations with your db configurations. In my case I use PostgreSQL DB locally. It is therefore available on port 5432(by default) and the name of my database is postgres.

# Step 3: Replace the Schema and Table (employee_management_system.employees) with your local Schema and Table.

Here you can find the script to create -> server\config\createTable.sql

# Step 4: Launch your Node.js project

To launch your project, just type the following command : "npm start" Your API will therefore run on port 5000

# Step 5: Launch your React.js project

To launch your project, just type the following command : "npm start" Your API will therefore run on port 3000

# Step 4: Test the API endpoints

So we have a total of 4 routes

Add client: POST Request : http://localhost:5000/api/add
Get of all clients: GET Request: http://localhost:5000/api/get?key=wti
Update client: PUT Request: http://localhost:5000/api/update?firstName=harsh&lastName=sahni&emailId=harsh@gmail.com&phoneNumber=442424&project=developer
Delete client: DELETE Request: http://localhost:5000/api/delete?emailId=john@gmail.com
