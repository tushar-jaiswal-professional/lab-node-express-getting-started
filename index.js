// PROGRESSION 1

let http = require('http')
http.createServer(function(req,res){
    if(req.url === '/home'){
        res.write('<h1>Home</h1>')
    }
    else if(req.url === '/about'){
        res.write('<h1>About</h1>')
    }
    else{
        res.write('<h1>Invalid</h1>')
    }
    res.end();
})
.listen(3001,()=>console.log("Server is running on port 3001"))


// PROGRESSION 2

var exp = require('express')
var app = exp()

app.get('/',function(req,res){
    res.send('<h1>Hello Tushar, Welcome to Express</h1>')
})
app.get('/about',function(req,res){
    res.send('<h2>This is the about section</h2>')
})
app.listen(3000,()=>console.log("Server is running on port 3000"))