const express = require("express");
const { defaultRoute,ImgUpload } = require("../controller/Cloudinary");
const { upload } = require("../utilities/multerStorage");
const route = express.Router()

route.get("/",defaultRoute)
route.post("/imgUpload",upload.single("file"),ImgUpload)




module.exports = route;