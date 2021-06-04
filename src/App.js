import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar"
import Carousel from "./component/Carousel"
import Login from "./component/Login"
import Map   from "./component/Map"
import Signup from "./component/Signup"
import {useState} from "react"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Pagenotfound from "./component/Pagenotfound"
import Cakedetails from "./component/Cakedetails"
import Search from "./component/Search"

var details = {
  projectname:"technical shop",
  projectdetails:"related to tech gadegts"
}
function App() {
  var [login,setLogin] = useState(false)

  var callme = ()=> {
  setLogin(true )
  }

  return (
    <div>
     <Router>
       <Switch>
        <Route exact path="/"><Login /></Route>
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/cake/:cakeid" component={Cakedetails} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/Map" component={Map} />
       </Switch>
    </Router>
    </div>
  );
}

export default App;
