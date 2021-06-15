const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(bodyParser.json());     // Format all incoming data to json
app.use(cors());               // Allow cross-origin requests

app.get('/', (req, res) => {
  res.send('Home page')
});

// Import routes
const productsRoute = require('./routes/products');
app.use('/products', productsRoute);

// Connect to database
mongoose.connect(
  'mongodb+srv://admin:1234@cluster0.blchn.mongodb.net/Cluster0?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('DB connected');
  }
);

app.listen(5000)