//import { Link } from 'react-router-dom';
import{Redirect,Route,Link} from 'react-router-dom'
//import './App.css'
import {useRouteMatch} from 'react-router-dom'
import Address from "./Address"
import Summary from "./Summary"
import Confirm from "./Confirm"



function Checkout(props) {
  var {path} = useRouteMatch()
    return (
        <>
        <div className="sidenav">
          <Link to={`${path}/summary`}>Summary</Link>
          <Link to={`${path}/address`}>Address</Link>
          <Link to={`${path}/confirm`}>Confirm</Link>
        </div>

      <div className="main">
        <Route exact path={`${path}/summary`} component={Summary} />
        <Route exact path={`${path}/address`} component={Address} />
        <Route exact path={`${path}/confirm`} component={Confirm} />
      </div>
        </>
    )
}
export default Checkout
