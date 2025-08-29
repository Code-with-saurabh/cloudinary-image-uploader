const fs  = require("fs")
const Cloudinary = require("../utilities/CloudinaryConfig")
const defaultRoute = (req,res)=>{
    res.json({message:"hello this is Cloudinary"})
}

const ImgUpload = async (req,res)=>{
    if(!req.file){
        return res.status(404).json({error:"Image not Uploaded.."})
    }
    const localFilePath =  req.file.path;
    try{
          const result = req.file;

         
        console.log(result)
         res.status(200).json({status:true,message:"imgUploaded",data:{Img_URL:result.path}})
    }catch(error){
        console.error('Upload failed:', error);
    res.status(500).json({ error: 'Upload failed' });
    }
    // setTimeout(()=>{
    //     fs.unlinkSync(req.file.path)
    // },2000)
   
}

module.exports = {
    defaultRoute,
    ImgUpload,
}