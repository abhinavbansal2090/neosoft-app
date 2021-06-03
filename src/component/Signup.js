
import {Component} from 'react'
import axios from 'axios';

const defaultState = {
    name:null,
    email:null,
    password:null,
    emailError:null
}
class Signup extends Component{

    constructor(){
        super();
        this.state = defaultState;

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(event) {
        this.setState({
            email : event.target.value
        });
    }

    handleNameChange(event) {
        this.setState({
            name:event.target.value
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
              name:this.state.name,
              email: this.state.email,
              password: this.state.password
            };
            var url = "https://apibyashu.herokuapp.com/api/register"

            axios({
              url:url,
              method:"post",
              data:data
            }).then((response)=>{
              console.log(response.data)
            },(error)=>{
              console.log(error)
            })

            this.setState(defaultState);
        }
    }

    render(){
        return(
            <div>
                <div className="row" style={{marginTop:"25px"}}>
                    <div className="col-md-6 offset-md-3">

                        <h3>Signup</h3><br/>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Name</label>
                                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleNameChange} />
                                </div>
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
                                    <button type="submit" className="btn btn-primary" onClick={()=>this.submit()}>Submit</button>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;
