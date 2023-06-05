// import Header from "./Header/Header";
import Home from "./Pages/Home/Home";
import Topbar from "./Components/Topbar/Topbar";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Setting from "./Pages/Setting/Setting";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { Routes, Route } from 'react-router-dom';



function App() {
  const user = false;
  return (
    <>
      <Topbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={user ? <Home/> : <Register/>}/>
        <Route path="/login" element={user ? <Home/> : <Login/>}/>
        <Route path="/write" element={user ? <Write/> : <Register/>}/>
        <Route path="/setting" element={user ? <Setting/> :<Register/>}/>
        <Route path="/post/:postId" element={<Single/>}/>
      </Routes>
    </>
    
      
        
      
 
   
  );
}

export default App;
