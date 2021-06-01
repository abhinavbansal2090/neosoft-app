import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar"
import Carousel from "./component/Carousel"
import Login from "./component/Login"
import Map   from "./component/Map"
import {useState} from "react"

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
    <Navbar  isloggin={login} details= {details}></Navbar>
    <Carousel></Carousel>
    <Login  call={callme} />
    <Map />
    </div>
  );
}

export default App;
