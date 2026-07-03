import express from "express"
const app = express();

app.set('view engine','ejs')
app.get("/",(req,resp) =>{
   resp.render('home',{name:'krishna chauhan',topic:'backend',age:21})
})

app.listen(3200);
console.log("okk");

