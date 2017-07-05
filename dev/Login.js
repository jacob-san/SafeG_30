/**
 * Created by sandeepj on 5/7/17.
 */
import React, {Component} from "react";
class Login extends Component{
    render(){
        return(
            <div className="login-container">
                <h2 className="m-n fw-thk"><span className="text-success">S</span>AFEGUARD</h2>
                {/*<!-- Begin Social Sign up -->*/}
                <div className="social-sign-up text-center">
                    <p className="header text-uppercase text-center m-xl">Login</p>

                </div>
                {/*<!-- End Social Sign up -->*/}


                {/*<!-- Begin Form -->*/}
                <form id="form-one">

                    {/*<!-- Begin Form Group -->*/}
                    <div className="form-group form-group-default">
                        <label for="exampleInputUsername1"><i className="fa fa-user m-xs-r"></i>Username</label>
                        <input type="text" className="form-control" id="exampleInputUsername1" name="exampleInputUsername1"/>
                    </div>
                    {/*<!-- End Form Group -->*/}

                    {/*<!-- Begin Form Group -->*/}
                    <div className="form-group form-group-default">
                        <label for="exampleInputPassword1"><i className="fa fa-lock m-xs-r"></i>Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="exampleInputPassword1"/>
                    </div>
                    {/*<!-- End Form Group -->*/}

                    <p className="m-xl-t m-md-b"><a href="index.html" className="btn btn-primary w-150">Sign In</a></p>

                    <div className="row">
                        <div className="col-xs-6">
                            <p><a href="pages.forgot-password.html" className="text-grey">Forgot Password?</a></p>
                        </div>
                        <div className="col-xs-6">
                            <p className="text-right"><a href="pages.register.html" className="text-grey">Don't have an account yet?</a>
                            </p>
                        </div>
                    </div>
                </form>
                {/*<!-- End Form -->*/}

                {/*<!-- Begin Footer -->*/}
                <p className="m-xl-t text-center"><strong className="text-success ls-xs">S</strong><span className="ls-xs">afeguard</span> ©
                    - 2017</p>
                {/*<!-- End Footer -->*/}
            </div>
        )
    }
}
export default Login;