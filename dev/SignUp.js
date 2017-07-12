/**
 * Created by sandeepj on 5/7/17.
 */
import React, {Component} from "react";
import authActions from './Utils/authActions'
class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            email:'',
            phone:'',
            password:'',
            confirmPassword:''
        }
        this.handleFirstnameChange=this.handleFirstnameChange.bind(this);
        this.handleLastnameChange=this.handleLastnameChange.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handlePhoneChange=this.handlePhoneChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange=this.handleConfirmPasswordChange.bind(this);
        this.signUp=this.signUp.bind(this);

    }
    signUp(){
        authActions.userSignUp(this.state.firstname, this.state.lastname, this.state.email, this.state.phone, this.state.password)
            .then((response)=>{
                console.log(response.data)
            })
    }
    handleFirstnameChange(e){
        this.setState({
            firstname:e.target.value
        })
        console.log(e.target.value)
    }
    handleLastnameChange(e){
        this.setState({
            lastname:e.target.value
        })
        console.log(e.target.value)
    }
    handleEmailChange(e){
        this.setState({
            email:e.target.value
        })
        console.log(e.target.value)
    }
    handlePhoneChange(e){
        this.setState({
            phone:e.target.value
        })
        console.log(e.target.value)
    }
    handlePasswordChange(e){
        this.setState({
            password:e.target.value
        })
        console.log(e.target.value)
    }
    handleConfirmPasswordChange(e){
        this.setState({
            confirmPassword:e.target.value
        })
        console.log(e.target.value)
    }
    render(){
        return(
            <div className="content-wrapper">
                <div className="register-container">
                    <h2 className=" m-n fw-thk"><span className="text-success">S</span>AFEGUARD</h2>

                    {/*<!-- Begin Form -->*/}
                    <form id="form-one" noValidate="noValidate">
                        {/*<!--<p className="header text-uppercase text-center m-md-b">The old fashioned way</p>-->*/}
                        {/*<!-- Begin Row -->*/}
                        <div className="row">
                            <div className="col-md-6">
                                {/*<!-- Begin Form Group -->*/}
                                <div className="form-group form-group-default">
                                    <label htmlFor="exampleInputFirstName1"><i className="fa fa-user m-xs-r"></i>First Name</label>
                                    <input  onChange={this.handleFirstnameChange}  type="text" className="form-control" id="exampleInputFirstName1"
                                           name="exampleInputFirstName1"/>
                                </div>
                                {/*<!-- End Form Group -->*/}
                            </div>

                            <div className="col-md-6">
                                {/*<!-- Begin Form Group -->*/}
                                <div className="form-group form-group-default">
                                    <label htmlFor="exampleInputLastName1"><i className="fa fa-user m-xs-r"></i>Last Name</label>
                                    <input onChange={this.handleLastnameChange} type="text" className="form-control" id="exampleInputLastName1" name="exampleInputLastName1"/>
                                </div>
                                {/*<!-- End Form Group -->*/}
                            </div>
                        </div>
                        {/*<!-- End Row -->*/}

                        {/*<!-- Begin Form Group -->*/}
                        <div className="form-group form-group-default">
                            <label htmlFor="exampleInputEmail1"><i className="fa fa-envelope m-xs-r"></i>Email</label>
                            <input onChange={this.handleEmailChange}  type="email" className="form-control" id="exampleInputEmail1" name="exampleInputEmail1"/>
                        </div>
                        {/*<!-- End Form Group -->*/}

                        {/*<!-- Begin Form Group -->*/}
                        <div className="form-group form-group-default">
                            <label htmlFor="exampleInputUsername1"><i className="fa fa-user m-xs-r"></i>Phone</label>
                            <input onChange={this.handlePhoneChange}  type="text" className="form-control" id="exampleInputUsername1" name="exampleInputUsername1"/>
                        </div>
                        {/*<!-- End Form Group -->*/}

                        {/*<!-- Begin For/m Group -->*/}
                        <div className="form-group form-group-default">
                            <label htmlFor="exampleInputPassword1"><i className="fa fa-lock m-xs-r"></i>Password</label>
                            <input onChange={this.handlePasswordChange}  type="password" className="form-control" id="exampleInputPassword1" name="exampleInputPassword1"/>
                        </div>
                        {/*<!-- End Form Group -->*/}

                        {/*<!-- Begin Form Group -->*/}
                        <div className="form-group form-group-default">
                            <label htmlFor="exampleInputPassword1"><i className="fa fa-lock m-xs-r"></i>Confirm Password</label>
                            <input onChange={this.handleConfirmPasswordChange}  type="password" className="form-control" id="exampleInputConfirmPassword1"
                                   name="exampleInputConfirmPassword1"/>
                        </div>
                        {/*<!-- End Form Group -->*/}


                        <p className="m-xl-t m-md-b">
                            <button className="btn btn-primary w-150" onClick={this.signUp}>Submit</button>
                        </p>

                        <div className="row">
                            <div className="col-xs-6">
                                <p><a href="javascript:void(0)" className="text-grey">Terms & Conditions</a></p>
                            </div>
                            <div className="col-xs-6">
                                <p className="text-right"><a href="pages.login.html" className="text-grey">Have an account already?</a></p>
                            </div>
                        </div>

                    </form>
                    {/*<!-- End Form -->*/}

                    <p className="m-xl-t text-center"><strong className="text-success ls-xs">S</strong><span className="ls-xs">afeguard</span> ©
                        - 2017</p>
                </div>
                {/*<!-- End Register Container -->*/}
            </div>
        )
    }
}
export default SignUp;