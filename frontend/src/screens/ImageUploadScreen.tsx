import {useState} from "react";
import './ImageUploadScreen.css'
const ImageUploadScreen=()=>{
    const [image, setImage] = useState<File|null>(null);

    const handleUpload = () =>{
        console.log(image);
    }

    return(
        <div className="upload-container">
            <input
                type="file"
                onChange={(e)=>setImage(e.target.files ? e.target.files[0] : null)}
            />
            <button onClick={handleUpload}>Upload Image</button>
        </div>
    )
}
export default ImageUploadScreen;