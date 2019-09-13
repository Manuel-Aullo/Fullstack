const express = require ("express");
const app = express(); // running express app

app.get("/", (req, res) =>{
    res.send({hi: "mate"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);