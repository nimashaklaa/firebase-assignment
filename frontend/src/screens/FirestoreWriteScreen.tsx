import {useState} from "react";
import './FirestoreWriteScreen.css'
const FirestoreWriteScreen =()=>{
    const [text, setText] = useState('');
    const handleSubmit = async ()=>{

    };
    return(
        <div className="firestore-container">
            <textarea
                value={text}
                onChange={(e)=> setText(e.target.value)}
                placeholder="Enter Text"
            />
            <button onClick={handleSubmit}>{"Submit to firestore"}</button>
        </div>

    )
}
export default FirestoreWriteScreen;