import React, { Component, Fragment } from "react";

import logo from '../public/assets/images/logobroglie.png'
//import devise from '../public/assets/images/devise.png'

class Login extends Component {
    render() {
        return (
            <Fragment>
                <div className="main-wrap align-items-center">
                    <div className="row">
                        <div className="col-xl-12 vh-100 align-items-center d-flex bg-white 3 overflow-hidden">

                            <div className="card shadow--sm  border-0 ms-auto me-auto login-card">
                                <div className="card-body 0 text-center">
                                    <img src={logo} alt="Logo"  width="250" />;
                                    
                                    <h2 className="fw-700 display2-size mb-3">Bienvenue chez les Broglie</h2>
                                    <form>

                                        <div className="form-group icon-input mb-3">
                                            <i className="font-sm ti-email text-grey-500 pe-0"></i>
                                            <input type="text" className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600" placeholder="VOtre adresse email" />
                                        </div>
                                        <div className="form-group icon-input mb-1">
                                            <input type="Password" className="style2-input ps-5 form-control text-grey-900 font-xss ls-3" placeholder="Votre mot de passe" />
                                            <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                        </div>
                                        <div className="form-check text-left mb-3">
                                            <a href="/forgot" className="fw-600 font-xsss text-grey-700 mt-1 float-right">Mot de passe oublié ?</a>
                                        </div>
                                    </form>

                                    <div className="col-sm-12 p-0 text-left">
                                        <div className="form-group mb-1"><a href="/home" className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 ">Entrer</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Login;