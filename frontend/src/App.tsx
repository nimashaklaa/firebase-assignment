
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import HomeScreen from "./screens/Homescreen.tsx";
import AuthScreen from "./screens/AuthScreen.tsx";
import ImageUploadScreen from "./screens/ImageUploadScreen.tsx";
import FirestoreWriteScreen from "./screens/FirestoreWriteScreen.tsx";



function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/AuthScreen" element={<AuthScreen/>}/>
                <Route path="/ImageUploadScreen" element={<ImageUploadScreen/>}/>
                <Route path="/FireStoreWriteScreen" element={<FirestoreWriteScreen/>}/>
            </Routes>
        </Router>

  )
}

export default App
