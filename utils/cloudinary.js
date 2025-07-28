import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name:"demy9se9a",
    api_key:"261618651343162",
    api_secret:"gsJlVB_I3I4We7BGwPRChACWTzM"
});
export default cloudinary;

