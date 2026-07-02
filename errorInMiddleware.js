import express from 'express' 
const app = express();

app.get("/",(req,resp) =>{
    resp.send('Home page');
});

app.get("/users",(req,resp)=>{
    resp.send1('users page');  //maan lo galat route ban gya hai
});

app.get("/error",(req,resp)=>{
    resp.send('error page');  
});

//middleware to find the error in routes
function errorHandling(error,req,resp,next){
    resp.status(error.status || 500).send("try after sometime")
}
app.use(errorHandling);
app.listen(3200);
console.log("ok");
