import './Homescreen.css'
import {useNavigate} from "react-router-dom";

const HomeScreen =()=>{
    const navigate = useNavigate()
    return (
        <div className="home-container">
            <button className="login-button" onClick={()=> navigate('/AuthScreen')}>AuthScreen</button>
            <button className="login-button" onClick={()=> navigate('/FireStoreWriteScreen')}>FireStoreWriteScreen</button>
            <button className="login-button" onClick={()=> navigate('/ImageUploadScreen')}>ImageUploadScreen</button>
        </div>
    )


}
export default HomeScreen;