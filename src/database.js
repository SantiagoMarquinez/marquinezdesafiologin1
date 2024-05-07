const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://marquinez:coderhouse@cluster0.q7cz2iv.mongodb.net/marquinez?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Conexión exitosa"))
    .catch(() => console.log("Vamos a morir, tenemos un error"))