
import {Component} from 'react'
import axios from 'axios';
import Navbar from "./Navbar"
import { Link } from 'react-router-dom';
import { withRouter } from "react-router"

const defaultState = {
    name:null,
    email:null,
    password:null,
    emailError:null
}

var details = {
  projectname:"technical shop",
  projectdetails:"related to tech gadegts"
}

class Login extends Component{

    constructor(props){
        super(props);
        this.state = defaultState;

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(event) {
        this.setState({
            email : event.target.value
        });
    }
    handlePasswordChange(event) {
        this.setState({
            password:event.target.value,
        });
    }

    validate(){
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!this.state.email || reg.test(this.state.email) === false){
            this.setState({emailError:"Email Field is Invalid"});
            return false;
        }
        return true;
    }


    submit(){
        if(this.validate()){

          var data = {
              email: this.state.email,
              password: this.state.password
            };
            var url = "https://apibyashu.herokuapp.com/api/login"

            axios({
              url:url,
              method:"post",
              data:data
            }).then((response)=>{
              console.log(response.data)
              this.props.history.push('/Map');
            },(error)=>{
              console.log(error)
            })

            this.setState(defaultState);
        }
    }

    render(){
        return(
            <div>
                 <Navbar   details= {details}></Navbar>
                <div className="row" style={{marginTop:"25px"}}>
                    <div className="col-md-6 offset-md-3">

                        <h3>Login</h3><br/>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Email</label>
                                    <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleEmailChange} />
                                    <span className="text-danger">{this.state.emailError}</span>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Password</label>
                                    <input type="text" className="form-control" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-md-12 text-center">
                                    <button type="submit" className="btn btn-primary" onClick={()=>this.submit()} style={{margin:"10px"}}>Login</button>
                                    <Link to='/Signup'><button className="btn btn-primary">Signup</button></Link>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)
