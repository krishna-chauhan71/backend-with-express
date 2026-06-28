const express = require('express');
const app = express();

// const express = require('express')();  OR

// console.log(express);

app.get("", (req,resp) =>{    //yaha par 2 parameter hai  path->""  , callback ->(req,resp)
    resp.send("<h1>home page</h1>")
});

app.get("/about",(req,resp) =>{
resp.send("<h1>About page</h1>");
});

app.listen(3200);

