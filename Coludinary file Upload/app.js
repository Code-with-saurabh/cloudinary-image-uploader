const express = require("express")
const app = express()
const path = require("path")
 
const {PORT} = require("./utilities/config")
const ImgsRoute = require("./Routes/ImgRoute")
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/img",ImgsRoute)

app.get("/",(req,res)=>{
    res.send("Hello from Image Upload default route")
})
app.get("/form",(req,res)=>{
    const indexPath = path.join(__dirname,"Views","index.html")
     
    res.sendFile(indexPath)
})
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
