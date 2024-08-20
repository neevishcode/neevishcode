const express = require('express');
const app = express;
const port = 8080;

app.get('/', (req,res) => res.send("Welcome to the AWS project."));

app.listen(port);
console.log('App is running on https://localhost:${port}')