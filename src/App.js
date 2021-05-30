import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar"
import Carousel from "./component/Carousel"
import Login from "./component/Login"

var details = {
  projectname:"technical shop",
  projectdetails:"related to tech gadegts"
}

function App() {
  return (
    <div>
    <Navbar details= {details}></Navbar>
    <Carousel></Carousel>
    <Login></Login>
    </div>
  );
}

export default App;
