import express from 'express';
 const app = express();

 //middleware function
//  function checkRoute(req,resp,next){
//     console.log("users is accessing"+req.url+"page");
//     next();

    // OR
   //......>
    app.use((req,resp,next) =>{
        console.log("user is accessing "+req.url+"page");
        next();
        
    })
    //   <.........

//  }

//  app.use(checkRoute)


 app.get("/",(req,resp) =>{
    resp.send("Home page");
 })

 app.get("/users",(req,resp) =>{
    resp.send("users page");
 })

 app.get("/products",(req,resp) =>{
    resp.send("products page");
 })

 app.listen(3400);