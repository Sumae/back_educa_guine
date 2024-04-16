require('dotenv').config()
const express = require("express")
const app = express()
const cors = require("cors")
require("./db")

// middlesware
app.use(express.json())
app.use(cors())


//Importarções de rotas
const Disciplina = require("./routes/disc")
const User = require("./routes/user")
const Categ = require("./routes/categ")

//criação de rotas
app.use("/disc", Disciplina)
app.use("/user", User)
app.use("/categ", Categ)

app.get("/", (req, res)=>{
    res.status(200).json("Em ótimo funcionamento!!!")
})

const port = process.env.PORT
app.listen(port, console.log("Backend Porta => "+ port))