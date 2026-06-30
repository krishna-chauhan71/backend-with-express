export default function home(){
return '<h1>Home page</h1> <a href="login">Go to login page</a>'
}

export function login(){
    return `<form action="/submit" method="post">
    <input type="text" placeholder="enter your name.."/>
    <br><br>
    <input type="passward" placeholder="enter your passward.."/>
    <br><br>
    <button>submit</button>
    <br>
    <a href="/">Go to home page</a>
    </form>`
}
 
export function submit(){
return "<h1>Data is submited..</h1>"
}