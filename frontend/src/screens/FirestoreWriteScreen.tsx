import {useState} from "react";
import {setDoc,doc} from 'firebase/firestore'
import './FirestoreWriteScreen.css'
import {db} from "../config/firebase-config";
const FirestoreWriteScreen =()=>{
    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = async ()=>{
        setIsLoading(true)
        try{
            await setDoc(doc(db,"cities","LA"),{
                name:"Los Angeles",
                state:"CA",
                country:"USA",
                details:text
            })
            setIsLoading(false)
        }catch(error){
            setIsLoading(false)
            throw new Error(`Error adding document ${error}`)
        }
    };
    return(
        <div className="firestore-container">
            <textarea
                value={text}
                onChange={(e)=> setText(e.target.value)}
                placeholder="Enter Text"
            />
            <button onClick={handleSubmit} disabled={isLoading}>
                {isLoading? <div className={"spinner"}></div>:"Submit to firestore"}
            </button>
        </div>

    )
}
export default FirestoreWriteScreen;