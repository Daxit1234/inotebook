import './App.css';
import Navbar from './component/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import User from './component/User';
import Notestate from './context/Notestate';
import Alert from './component/Alert';
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
        <Route exact path='/about' element={<About/>}/>
      </Routes>
      <Routes>
        <Route exact path='/user' element={<User/>} />
      </Routes>
     </div>
     </Router>
    </Notestate>
    </>
  );
}

export default App;
