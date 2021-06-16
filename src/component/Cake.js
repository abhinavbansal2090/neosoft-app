import { Link } from 'react-router-dom';
import Navbar from "./Navbar"
import { withRouter } from "react-router"


function Cake(props) {
var details = {
    projectname:"technical shop",
    projectdetails:"related to tech gadegts"
  }
if(props.data){
    return (
      <>
      <div class="card" style={{width: "25rem",marginTop:"25px"}}>
    <Link to={'/cake/'+props.data.cakeid}>  <img style={{height:"15rem"}} src={props.data.image} class="card-img-top" alt="..." /></Link>
        <div class="card-body">
          <h5 class="card-title">{props.data.name}</h5>
          <p class="card-text">{props.data.price}</p>
        </div>
        <button type="submit" class="btn btn-primary">Add To Cart</button>
      </div>
      </>
    )
 }
}
export default withRouter(Cake)
