import express from 'express'

const app =express();


app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.get("/add-user",(req,resp) =>{
resp.render('addUser')
});

app.post("/submit-user",(req,resp)=>{
    console.log(req.body);
    
resp.render('submitUser',req.body)
});

app.get("/users",(req,resp) =>{
    const users = ['gulshna','aditya','krishna']
    const isLogin = true;
    resp.render("users",{users:users,isLogin:true})
})
app.listen(3400)