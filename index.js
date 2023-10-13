const express = require('express');

app.use("view engine", "ejs");


const app = express();


app.get("*",(req, res)=>{
    res.render("try.ejs");
})

app.listen(555, ()=>{
    console.log("server ok");
});