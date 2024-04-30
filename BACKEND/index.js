

const express = require("express");
const app = express();

app.use(express.urlencoded({extended :true}));


app.use(express.json());

const port = 8080;

app.get("/register",(req,res)=>{
    let {user , password } = req.query;
    res.send(`hello, ${user}`);
})


app.post("/register",(req,res)=>{
    let {user , password } = req.body;
    res.send(`hello ${user}`);
})



app.listen(port,()=>{
    console.log(`server is listening on ${port}`);
})
