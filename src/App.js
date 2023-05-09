// import Header from "./Header/Header";
import Home from "./Pages/Home/Home";
import Topbar from "./Components/Topbar/Topbar";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Setting from "./Pages/Setting/Setting";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { Routes, Route } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom'

function App() {
  return (
    <>
      <Topbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>
    </>
    
      
        
      
 
   
  );
}

export default App;
