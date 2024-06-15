const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/home', (req, res) => {
    res.send(<h1>hi</h1>);
});

const data = {
    teachers: "manjot",
    student:"raj"
}

app.get('/teacher', (req, res) => {
    res.json(
       {data} 
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
