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
import Checkout from "./component/Checkout"
import React from "react"

//console.log(process.env)

function App() {
  var [login,setLogin] = useState(false)

  var callme = ()=> {
  setLogin(true )
  }



  /*var url = process.env.REACT_APP_BASE_URL+"/getuserDetails"
  useEffect(()=>{
    if(localstorage.token)
      {
          axios({
            url:url,
            method:"get",
            headers:{
              authtoken:localstorage.token
            }
          }).then((response)=>{
                console.log(response.data.data)
          },(error)=>{
            console.log(error)
          })
    }
  },[])
*/

  var details = {
    projectname:"technical shop",
    projectdetails:"related to tech gadegts"
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
        <Route path="/Checkout" component={Checkout} />
       </Switch>
    </Router>
    </div>
  );
}

export default App;
