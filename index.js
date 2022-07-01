const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('Running my Web App Server');
});

app.listen(port, () =>{
    console.log('Web App Server is running');
})