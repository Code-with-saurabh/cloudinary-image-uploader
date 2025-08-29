require("dotenv").config();

module.exports = {
    PORT:process.env.PORT,
    CLOUDINARY_NAME:process.env.CLOUDINARY_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_SECRET:process.env.CLOUDINARY_SECRET,
}