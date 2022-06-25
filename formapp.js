const { request } = require('express');
const express = require('express')
const app = express();
const path = require('path');
const ports = 5000;
const hbs = require("hbs");
const Form = require("./database/model");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.post("/form",async(req,res)=>{
    try{
        const ename=req.body.name
        console.log(ename);

        const registerd = new Form({
            name:req.body.name,
            email:req.body.email,
            rollnumber:req.body.RollNumber,
            Adress:req.body.Adress,
            Spot:req.body.Spot
        })
        const regi= await registerd.save();
        res.status(201).render("sucess");
    }catch(e){
        res.send(`Error in form submission.please provide details correctly:${e}`);
    }
})
require("./database/connection");
app.set('view engine','hbs');

app.get('/',(req,res)=>{
    res.render("index")
})

app.get('/form',(req,res)=>{
    res.render("form")
})

app.get('/sucess',(req,res)=>{
    res.render("sucess")
})



app.get('*',(req,res)=>{
    res.render("nopagefound");
})







app.listen(ports);