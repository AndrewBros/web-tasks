const express = require("express");
let routerTasks = express.Router();
let tasks = require("../data/tasks")

// Mostrar los datos con un ficher en formato HTML
//res.render("nombre del fichero", {datos a enviar})
routerTasks.get("/", (req, res) => {
    res.render("pageTasks.ejs", {
        message: "ejemplo",
        tasks: tasks
    })
    //res.send(tasks)
})
routerTasks.post("/", (req, res) => {
    let text = req.body.text
    let lastId = tasks[tasks.length-1].id
    tasks.push(
        {
            id: lastId+1,
            text: text
        }
    )
    //res.send("ok")
    res.redirect("/tasks")
})
module.exports = routerTasks