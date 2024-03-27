const express=require("express");
const {createServer}=require("http");
const { DAta } = require("./data");
const Data = require("./data");



const app=express();
const server=createServer(app);

app.set("view engine","ejs")

app.get('/',(req,res)=>{
    const logo="Ecommerce"
    res.render("home",{logo:logo})
})

app.get('/product',(req,res)=>{
    const logo="Ecommerce"
    res.render("product",{data:Data,logo,logo})
})

app.post('/form?submit',(req,res)=>{
    console.log(req.body);
    res.send("Successful")
})
app.get('/product/:id',(req,res)=>{
    Data.map((item)=>{
        if(item.id==req.params.id)
        {
            return res.render("detail",{data:item});
        }
        else
        {
            return ;
        }
    })
})


app.get('/contact',(req,res)=>{
    res.render("contact");
})

server.listen(3000,()=>(
    console.log("Server Started")
))