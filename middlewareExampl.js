import express from 'express';
const app = express();

//middleware function

// function agecheck(req,resp,next){
//     if(!req.query.age || req.query.age<18){
//         resp.send("");
//     }else{
//        next();
//     }
// }
// app.use(agecheck);


//middleware to block ip
function ipcheck(req,resp,next){
    const ip = req.socket.remoteAddress
    console.log(ip);

    if(ip.includes('192.168.1.95')){
        resp.send("Alert! you can not access this page")
    }
    else{
  next();
    }

    }
       app.use(ipcheck);
    


app.get("/",(req,resp) =>{
    resp.send("<h1>this is Home page</h1>")
})

app.get("/admin",(req,resp) =>{
    resp.send("<h1>this is admin page</h1>")
})

app.get("/login",(req,resp) =>{
    resp.send("<h1>this is login page</h1>")
})

app.listen(3400);