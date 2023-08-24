import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';


//import files
import { mongoDB } from './database/db.js';
import router from './routes/router.js';


//creates a new an Express application
const app = express();

//setting up config.env 
config({
    path: "./config.env"
})

//connecting server and database
mongoDB();


//we'll be sending data in json format, that's why it is required to use this middleware
app.use(express.json());

//we'll be using dynamic routes, in order to read the data from url we have to use this
app.use(express.urlencoded({ extended: true }));

//set 'credentials: true' to pass --> headers, cookies, etc to browser/frontend

const FRONTEND_URL = 'http://localhost:3000/'
// globally
app.use(cors())

// route splitting
app.use("/api/data", router)


// variables
const PORT = process.env.PORT || 8000;




//function is used to bind and listen to the connections on the specified host and port
app.listen(PORT, (req, res) => {
    console.log(`Server is active on Port ${PORT}`)
})