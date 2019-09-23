import React from 'react';
import Header from '../../Components/Header/Header';
import { Link } from "react-router-dom";
function LoginSection() {
    return (
    <div className="section">
        <Header login='false' />
        <div className="seperatorSection"></div>
        <section id="industry-section">
        <div className="row">
            <div className="col">
                <div className="sectionVal">
                    <div className="container">
                    <h3>Industry first cutting edge <strong>telematics solution.</strong></h3>

                    <p className="mTop15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="inputCont">
                        <div className="inputBlock">
                            <p>
                                <input type="text" placeholder="Mobile number or Email" />
                                <span className="commonbut ffub18"><a className="" href="#/">Start Trail</a></span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col">
                <img src="/images/login_art.png" alt="industry Section" />
            </div>
        </div>
        </section>
    </div>
    );
}

function LoginForm() {
    return (
        <div className="section">
            <Header login='true' />
            <div className="seperatorSection1"></div>
            <section id="industry-section">
            <div className="row">
                <div className="col-md-7">
                    <img src="/images/login_art.png" alt="industry Section" />
                </div>
                <div className="col-md-5">
                <div className="LoginForm">
                <form >
                    <p> <input type="text"  name="username" placeholder="User Name" /> </p>
                    <p> <input type="password" name="password"  placeholder="Password" /> </p>
                    <p> <input type="text" name="captcha" placeholder="Captcha" /> </p>
                    <p className="ffum16"><input type="checkbox" /> Remember me <span className="pull-right acolor ffum16">Forgot Password?</span></p>
                    <p className="text-right"> <Link to="/mapview"><input type="submit" value="Login" className="loginBut"/></Link> </p>
            </form>
            <p className="text-center ffu14">By Logging in you agree to our <a href="#/" className="acolor">Terms &amp; Conditions</a></p>
                </div>
                </div>
            </div>
            </section>
        </div>
            
        );
}

export { LoginForm };
export default LoginSection;