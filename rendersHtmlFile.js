import express from 'express';
import home,{ login } from "./pages/form.js";
import { submit } from './pages/form.js';
const app = express();

app.get("/",(req,resp) =>{
    resp.send(home());
})

app.get("/login",(req,resp) =>{
resp.send(login())
})

app.post("/submit",(req,resp) =>{
resp.send(submit());
})

app.listen(3200);
console.log("okk");
