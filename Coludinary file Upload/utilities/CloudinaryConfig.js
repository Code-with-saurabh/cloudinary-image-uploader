const { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_SECRET } = require("./config")

const Cloudinary = require("cloudinary").v2

Cloudinary.config({
    cloud_name:CLOUDINARY_NAME,
    api_key:CLOUDINARY_API_KEY,
    api_secret:CLOUDINARY_SECRET,
});

module.exports = Cloudinary