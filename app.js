const express = require("express");

let app = express();
let port = 8081;

// Procesamiento de datos en formato JSON
app.use(express.json());
// Transformar texto de código en formato HTML
app.set("views", "views");
app.set("view engine", "ejs");

const routerTasks = require("./routers/routersTasks")
app.use("/tasks", routerTasks)

app.listen(port, () => {
    console.log("Servidor activo")
})