import express from 'express';
import cors from "cors";
import School from './models/school.js';
import mongoose from "mongoose";

const app = express();

mongoose.connect('mongodb://localhost:27017/island-edu2');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected")
});

const corsOptions = {
    origin: ["http://localhost:5173"]
}

app.use(cors(corsOptions))
app.use(express.json())


//GET first 4 Schools
//Add search functionality
app.get("/api/schools", async (req, res) => {
    try {
        const schools = await School.find({}).limit(4);
        res.json(schools);
    } catch (err) {
        res.status(500).json({message: "Error fetching schools"})
    } 
});

//GET school by id
app.listen(8000, () => {
    console.log("SERVER STARTED PORT 8000")
})

//POSTCreate a School
//PUT/PATCH Edit Existing School
//DELETE an Existing School

