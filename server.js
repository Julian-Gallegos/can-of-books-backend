'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const getBooks = require('./modules/getBooks');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo connection error'));
db.once('open', function(){
  console.log('Mongoose is connected to mongo');
});

app.get('/books', getBooks);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
