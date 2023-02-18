import './App.css';
import Navbar from './component/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Notestate from './context/Notestate';
import Alert from './component/Alert';
import Login from './component/Login';
import Singup from './component/Singup';
function App() {
  return (
    <>
    <Notestate>
     <Router>
     <Navbar/> 
     <Alert msg="this is react app"/>
     <div className="container">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
      <Routes>
        <Route exact path='/singup' element={<Singup/>} />
      </Routes>
      <Routes>
        <Route exact path='/about' element={<About/>} />
      </Routes>
     </div>
     </Router>
    </Notestate>
    </>
  );
}

export default App;
