const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;
 app.use(cors());
 app.use(bodyParser());

 app.get('/', (req,res) =>{
    res.send('Welcome to the To-Do List API Created by Amina');
 });

 app.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}`);
 });

const todoRoutes = require("./routes/todoRoutes");
app.use("/api", todoRoutes);