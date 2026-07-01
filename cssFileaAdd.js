import express from "express"
import path from 'path'
const app =express();
const abspath=path.resolve('view');

//to add css file......
const publicpath = path.resolve('public');

app.use(express.static(publicpath))
console.log(publicpath);
//..........

app.get("/",(req,resp) =>{
    
    resp.sendFile(abspath+"/home.html");
})

app.get("/login",(req,resp) =>{

    resp.sendFile(abspath+"/login.html");
})

app.get("/about",(req,resp) =>{
    
    resp.sendFile(abspath+"/about.html");
})

//agar hamara page found na ho to 404 me ye use kar sakte hai taki user ko ye lage kii url galt hai
app.use((req,resp)=>{

resp.sendFile(abspath+"/404.html");
})

app.listen(3200);
console.log("okk");
