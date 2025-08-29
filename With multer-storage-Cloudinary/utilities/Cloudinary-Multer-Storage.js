const multer = require("multer")
const {CloudinaryStorage} = require("multer-storage-cloudinary")

const cloudinary = require("./CloudinaryConfig")

const storage = new CloudinaryStorage({
    cloudinary,
    params:{
        folder:'uploads',
        allowed_formats:["jpg","png","jpge"],
        transformation:[{ width: 800, height: 600, crop: 'limit' }]
    },
});

const upload = multer({storage:storage});

module.exports = {upload}