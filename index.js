const express = require('express');

const app = express();
app.get("/about" , (req,resp) =>{
    resp.send ("<h1>this is the first about page program of express js</h1>");

});
app.get("/contact" , (req,resp) =>{
    resp.send ("<h1>this is the contact page</h1>");

});
app.listen(3200);
console.log("okk");
