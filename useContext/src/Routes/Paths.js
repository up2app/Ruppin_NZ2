import {Routes, Route} from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register'; 
import Profile from '../Pages/Profile';


export default function Paths() {
  return (
    <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
    </Routes>
    
  )
}
