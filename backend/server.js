const express = require('express');                   //'imports' express from your modules
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();                           //to keep environment variables private

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const todoRouter = require('./routes/todo');

app.use('/todo', todoRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});