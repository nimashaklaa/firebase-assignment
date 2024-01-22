import {useState} from "react";
import './AuthScreen.css'
const AuthScreen= () =>{
    const [email ,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin =()=>{};
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