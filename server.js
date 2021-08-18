const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const Student = require("./models/Student");
const mongoose = require("mongoose")
const validator = require("validator")


const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

mongoose.connect("mongodb+srv://admin-Cecilia:Cr020199@cluster0.j1vpj.mongodb.net/uninewsletterDB?retryWrites=true&w=majority", {useNewUrlParser: true})

app.post('/', (req,res)=>{
    const firstname = req.body.first_name
    const lastname = req.body.last_name
    const email = req.body.email
    const student = new Student({
        fname : firstname,
        lname: lastname,
        email: email
    })
student 
.save()
.catch((err) => console.log(err));

if (res.statusCode === 200)
        {
            res.sendFile(__dirname + "/success.html")
        }
        else 
        {
            res.sendFile(__dirname + "/404.html")
        }

})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}

app.listen(8000, (req,res)=>{
    console.log("Server is running successfullly!")
})