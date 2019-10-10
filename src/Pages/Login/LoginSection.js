import React from 'react';
import Header from '../../Components/Header/Header';
//import NavLink from '../../Components/Link/Link';

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

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                        userid: '',
                        password: '',
                        captcha: '',
                        rememberMe: false,
                        loginDisable: true 
                    },
            others: {   }
        }
        this.handleuserVals = this.handleuserVals.bind(this);
        console.log(this.props);
    }

    updateState = (name,value) => {
        this.setState(prevState => {
            let userInfo = Object.assign({}, prevState.userInfo);
            userInfo[name] = value;
            if(userInfo.userid!=='' && userInfo.password!=='' && userInfo.captcha!=='') {
                userInfo.loginDisable = false;
            }
            return { userInfo }; 
        }, () => { console.log(this.state); } );
        
    };

    handleuserVals = (event) => {
        if(event.target.value !=="") {
            this.updateState(event.target.name, event.target.value);
        }
    }

    componentDidUpdate(prevState, newState) {
        console.log(this.state);
    }

    render() {
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
                    <p> <input type="text" name="userid" value={ this.state.userInfo.userid } onChange={this.handleuserVals} placeholder="User Name" required /> </p>
                    <p> <input type="password" name="password" value={ this.state.userInfo.password } placeholder="Password" onChange={this.handleuserVals} required /> </p>
                    <p> <input type="text" name="captcha" value={ this.state.userInfo.captcha } placeholder="Captcha" required onChange={this.handleuserVals} /> </p>
                    <p className="ffum16"><input type="checkbox" /> Remember me <span className="pull-right acolor ffum16">Forgot Password?</span></p>
                    <p className="text-right"> <input type="button" disabled={ this.state.userInfo.loginDisable } value="Login" className="loginBut" onClick={ this.props.redirectPage.bind(this, 'mapview') } /> </p>
                    {/* <NavLink name="Go to Maps page" link="/maps" ><span>Karthick</span></NavLink> */}
            </form>
            <p className="text-center ffu14">By Logging in you agree to our <a href="#/" className="acolor">Terms &amp; Conditions</a></p>
                </div>
                </div>
            </div>
            </section>
        </div>
            
        );
    }
}

export { LoginSection };
//export default LoginSection;