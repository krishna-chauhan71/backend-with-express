import express from 'express' 
import morgan from 'morgan'

const app = express();

//jab hm galat url dalte hai to morgan ka use karte hai external middleware
app.use(morgan('dev'))

app.get("/",(req,resp) =>{
    resp.send('Home page');
})

app.get("/users",(req,resp)=>{
    resp.send('users page');
})

app.get("/wait",(req,resp)=>{
    setTimeout(()=>{
        resp.send("result after 1 min..")
},1000)
})

app.listen(3200);
console.log("okk");
