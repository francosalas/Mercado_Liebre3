const express = require("express");
const app = express();
const PORT = 3030;

const path = require("path");

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})









app.listen(PORT,()=>{
    console.log(`
    server listen in port ${PORT}
    http://localhost:${PORT}`)
})