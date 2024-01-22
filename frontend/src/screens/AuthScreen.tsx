import {useEffect, useState} from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import './AuthScreen.css'
import {auth, db} from "../config/firebase-config";
import {useNavigate} from "react-router-dom";
import {doc, setDoc, collection} from "firebase/firestore";



const AuthScreen= () =>{
    const [email ,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate();
    const handleLogin =()=>{

       createUserWithEmailAndPassword(auth,email,password)
           .then(async (userCredentials)=>{
               const user =  userCredentials.user;
               console.log(user);

               await setDoc(doc(collection(db, "users"), userCredentials.user.uid), {
                   firstname: 'Amandi',
                   lastname: 'Nimasha'
               });
               setIsAuthenticated(true)
           })
           .catch((error)=>{
               throw new Error(`User sign up failed with error ${error}`)
           });
    };

    useEffect(()=>{
        if(isAuthenticated){
            navigate('/FirestoreWriteScreen');
        }
    },[isAuthenticated,navigate])
    return(
        <div className="auth-container">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleLogin}>Login</button>

        </div>
        )
}
export default AuthScreen;