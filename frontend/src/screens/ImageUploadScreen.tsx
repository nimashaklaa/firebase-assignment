import {useState} from "react";
import {getStorage,ref,uploadBytes} from 'firebase/storage'
import './ImageUploadScreen.css'
const ImageUploadScreen=()=>{
    const [image, setImage] = useState<File|null>(null);

    const handleUpload = () =>{
        try{
           if(image){
               const storage = getStorage();
               const storageRef = ref(storage, `images/${image.name}`);

               uploadBytes(storageRef, image).then((snapshot) => {
                   console.log('Uploaded a blob or file!',snapshot.ref);
               });
           }
        }catch(error:any){
            throw new Error(`Upload a bolb file ${error}`)
        }

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