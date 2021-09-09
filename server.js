const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');

const app = express();

// Connect Database
connectDB();

// Init Middleware for using the 'body' object
app.use(express.json({ extended: false }));

app.use(morgan('dev'));

// Define Routes
app.use(cors({
  Origin: '*'
}))
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));


// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
