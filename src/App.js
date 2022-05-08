
import './App.css';
import Navbar from "./Components/Navbar"
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Home from './Components/Home'
import Footer from './Components/Footer'
import Menu from './Components/Menu'
import About from './Components/About'
import ContactUs from './Components/ContactUs'



function App() {
  return (
    <div className="App">
    <Router>
   <Navbar/>
   <Switch>
     <Route exact path="/"> <Home/></Route>
     <Route exact path="/menu"><Menu/></Route>
     <Route exact path="/about"><About/></Route>
     <Route exact path="/contact"><ContactUs/></Route>


   </Switch>
   <Footer/>
   </Router>   
    </div>
  );
}

export default App;
