const express = require('express');
require('dotenv').config();


// Initialize Express app
const app = express();

// Define a port
const PORT = process.env.PORT || 3000;

// Define a sample endpoint
app.get('/', (req, res) => {
    res.send('Hello from Node.js backend!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
