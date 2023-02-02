
import './App.css';
import Home from "./Component/Home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from "./Component/SignIn/SignIn";
import Register from "./Component/Registration/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <div>    
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/register" element={<Register />}/>
          </Routes>          
        </div>
      </Router>
      
    </div>
  );
}

export default App;
