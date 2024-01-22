import {useState} from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import './AuthScreen.css'
import {auth} from '../config/firebase-config'
const AuthScreen= () =>{
    const [email ,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin =()=>{
       createUserWithEmailAndPassword(auth,email,password)
           .then(async (userCredentials))
    };
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