/**
 * Created by sandeepj on 5/7/17.
 */
import React, {Component} from "react";
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
    }
    handleFirstnameChange(e){
        this.setState({
            firstname:e.target.value
        })
    }
    handleLastnameChange(e){
        this.setState({
            lastname:e.target.value
        })
    }
    handleEmailChange(e){
        this.setState({
            email:e.target.value
        })
    }
    handlePasswordChange(e){
        this.setState({
            password:e.target.value
        })
    }
    handleConfirmPasswordChange(e){
        this.setState({
            confirmPassword:e.target.value
        })
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
                                    <input  onchange={this.handleFirstnameChange}  type="text" className="form-control" id="exampleInputFirstName1"
                                           name="exampleInputFirstName1" value=""/>
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
                            <button className="btn btn-primary w-150">Submit</button>
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