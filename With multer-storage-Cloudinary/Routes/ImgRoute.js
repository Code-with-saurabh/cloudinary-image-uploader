const express = require("express");
const { defaultRoute,ImgUpload } = require("../controller/Cloudinary");
const { upload } = require("../utilities/Cloudinary-Multer-Storage");
const route = express.Router()

route.get("/",defaultRoute)
route.post("/imgUpload",upload.single("file"),ImgUpload)




module.exports = route;