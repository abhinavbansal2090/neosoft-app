import {useState, useEffect, Component} from "react"
import { Link, withRouter } from "react-router-dom"
import {connect} from "react-redux"

function Navbar(props) {

//var [isloggin,setUser] = useState(props.isloggin)

let stringsearch

  let string = (event)=>{
    stringsearch = event.target.value
  }

  let logout = ()=>{
    this.props.dispatch({
      type:"LOGOUT"
    })
 }



  let search = (event)=>{

    if(stringsearch)
    {
      var url = "/search?q="+ stringsearch
      props.history.push(url)
    }

    //alert("search")
    //alert(stringsearch)
  }

  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <Link to={'/map'}><a class="navbar-brand" href="#">{props.details.projectname}</a></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input  onChange= {string} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button onClick= {search} class="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
      {true &&  <Link to="/signup"><button className="btn-btn-primary">Signup</button></Link>  }
      {false && <button onClick=""    className="btn-btn-danger">Logout</button> }
    </form>
  </div>
</nav>
    </div>
  )
}
Navbar = withRouter(Navbar)
function deepak(state,props){
  return {
    ...props,
    username:state["username"],
    isloggedin:state["isloggedin"]
  }
}
export default connect((state,props)=>{
// alert("Navbar " + JSON.stringify(state))
return {
  projectname:state.AuthReducer?.username + props.projectname,
  username:state.Authreducer?.username,
  isloggedin:state.AuthReducer?.isloggedin
}
})(Navbar) 
