import Login from "./pages/Login"
import { AuthContext } from "./context/AuthContext";
import Extract from "./pages/Extract"
import ReStock from "./pages/ReStock"
import Report from "./pages/Report"
import Main from "./pages/Main"
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom"



function App() {

  const {user} = useContext(AuthContext);
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={user ? <Main/> : <Login/>}/> 
        <Route path="/extract" element={<Extract/>}/> 
        <Route path="/restock" element={<ReStock/>}/>
        <Route path="/report" element={<Report/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
