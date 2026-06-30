// const express = require('express'); ---> wanela js ka syntex hai import karne ka
import express from 'express';  // ------>ekma js ka syntex hai import karne ka
import home from './pages/home.js';
import about,{content} from './pages/about.js';
// import content  from './pages/content.js';
const app = express();

// const express = require('express')();  OR

// console.log(express);

app.get("", (req,resp) =>{    //yaha par 2 parameter hai  path->""  , callback ->(req,resp)
    resp.send(home())
});

app.get("/about",(req,resp) =>{
resp.send(about());
});

app.get("/content", (req,resp) =>{
    resp.send(content());
});

app.listen(3200);
console.log("okk");


