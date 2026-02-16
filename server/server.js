import express from 'express';
import cors from "cors";

const app = express();

app.use(cors(corsOptions))
app.use(express.json())

const corsOptions = {
    origin: ["http://localhost:5174"]
}

//Home route
app.get("/", (req, res) => {
    
});

//Schools Route
app.get("/schools/", (req, res) => {
    
})




app.listen(8080, () => {
    console.log("SERVER STARTED PORT 8080")
})