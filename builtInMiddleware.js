import express from 'express';

import path from 'path';

 const app = express();

 //built in middleware in express....example 1
app.use(express.urlencoded({extended: false}))
 //built in middleware in express....example 2
app.use(express.static('public'))


app.get('/',(req,resp) =>{
    const filepath = path.resolve("view/home.html");
    resp.sendFile(filepath);
})



app.get('/login',(req,resp) =>{
    resp.send(`
  <form action="/submit" method="post">
        <label for="name" >Full Name:</label><br>
        <input type="text" id="name" name="name" required placeholder="enter fullname"><br><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required placeholder="enter your email"><br><br>

        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password" required placeholder="enter your passward"><br><br>

        <label for="gender">Gender:</label><br>
        <input type="radio" id="male" name="gender" value="Male">
        <label for="male">Male</label>

        <input type="radio" id="female" name="gender" value="Female">
        <label for="female">Female</label><br><br>

        <label for="country">Country:</label><br>
        <select id="country" name="country">
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
        </select><br><br>

        <label for="message">Message:</label><br>
        <textarea id="message" name="message" rows="4" cols="30"></textarea><br><br>

        <input type="submit" value="Submit">
        <input type="reset" value="Reset">
    </form>
        `)
})

app.post('/submit',(req,resp) =>{
    console.log("users login details are",req.body);
    
    resp.send("submit page")
})

app.get('/users',(req,resp) =>{
    resp.send("users page")
})

app.listen(3200);
console.log("okk");
