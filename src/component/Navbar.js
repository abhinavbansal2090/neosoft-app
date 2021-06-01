import {useState} from "react"

function Navbar(props) {

//var [isloggin,setUser] = useState(props.isloggin)

let stringsearch

  let string = (event)=>{
    stringsearch = event.target.value
  }

  let logout=()=>{
    //setUser(false)
  }


  let search = (event)=>{
    //alert("search")
    alert(stringsearch)
  }

  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">{props.details.projectname}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input  onChange= {string} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button onClick= {search} class="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
    {!props.isloggin && <button className="btn-btn-primary">Login</button> }
    { props.isloggin && <button onClick=""    className="btn-btn-danger">Logout</button> }
    </form>
  </div>
</nav>
    </div>
  )
}

export default Navbar
