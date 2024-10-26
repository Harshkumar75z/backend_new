require('dotenv').config();
const express = require('express');
const app = express();
// const port = 3000;

app.get('/', (req, res) =>{
    res.send("Yes, It is working.");
})

app.get('/login', (req, res) =>{
    res.send("Welcome, It is Login Page.");
})

app.get('/element', (req, res) =>{
    res.send('<h1> This is H1 Tag </h1>');
})

app.listen(process.env.PORT, ()=>{
    console.log(`App is running at ${process.env.PORT}`);
})