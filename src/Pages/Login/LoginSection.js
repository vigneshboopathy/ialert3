import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import { alphabets, phoneno, mailformat, postData, numbers, alphaNumeric } from '../../Util'; 

//import NavLink from '../../Components/Link/Link';


class LoginPopup extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            trailInfo: {
                name: '', mobno: '', email: '', orgName: '', totNoVeh: '', noOfALVeh: ''
            }
        };
        this.executeQuery = this.executeQuery.bind(this);
        this.otpBlock=false;
    }


    updateInput=(evt) => {
        let trailInfo = this.state.trailInfo;
        trailInfo[evt.target.name] = evt.target.value;
        this.setState({trailInfo : trailInfo})
    }

    executeQuery=() => {
        let tI = this.state.trailInfo;
        let nameVal = tI.name.trim();
        let mobnoVal = tI.mobno.trim();
        let emailVal = tI.email.trim();
        let orgNameVal = tI.orgName.trim();
        let totVehVal = tI.totNoVeh.trim();
        let noOfALVehVal = tI.noOfALVeh.trim();

        if(nameVal.length<3 || !alphabets.test(nameVal)) {
            alert("Please enter valid name.");
            return false;
        } else if(mobnoVal.length!==10 || !numbers.test(mobnoVal)) {
            alert("Please enter valid number.");
            return false;
        } else if(emailVal!=='' && (emailVal.length<6 || !mailformat.test(emailVal))) {
            alert("Please enter the valid Mail Id");
            return false;
        } else if(orgNameVal!=='' && (orgNameVal.length<5 || !alphaNumeric.test(orgNameVal))) {
            alert("Please enter the valid Organisation Name");
            return false;
        } else if(totVehVal!=='' && (totVehVal.length<0 || !numbers.test(totVehVal))) {
            alert("Please enter the valid Total Number of Vehicles");
            return false;
        } else if(noOfALVehVal!=='' && (noOfALVehVal.length<0 || !numbers.test(noOfALVehVal))) {
            alert("Please enter the valid No of Vehicles");
            return false;
        }  else {
            //alert("Success");
            let dataObj = {};
            dataObj.user_name = nameVal;
            dataObj.mobile_num = mobnoVal;
            dataObj.email_id = emailVal;
            dataObj.org_name = orgNameVal;
            dataObj.total_no_vehicles = Number(totVehVal);
            dataObj.al_vehicles_count = Number(noOfALVehVal);
            const datas = postData('http://10.18.1.113:8000/landing/userInfo', dataObj);
            //console.log(datas);
            datas.then((dataVals) => {
                console.log(dataVals);
                if(dataVals.data.status==='Success') {
                    alert('Noted Your Info, The Respective team will contact you');
                    this.otpBlock=true;
                } else {
                    alert('Please update Valid information');
                }
            });
        }       
    }

    render() {
        let trailObj = this.state;
    return (
        <div>
            <div className='popup'>                
                <div className='popup_body'>  
                    <div className="popup_header">
                        <p className="text-right"><span className="" style={{cursor:"pointer"}} onClick={this.props.closeVal}>&#x2716;</span></p>
                        <p><strong>Demo Form</strong></p>
                        <br />
                    </div>

                    <form name="trailForm" id="trailForm" >
                        <div className="row">
                            <div className="col-md-6">
                                <p className="inputContainer">
                                    <input type="text" name="name" placeholder="Name" onChange={ this.updateInput.bind(this) } value={ trailObj.name } maxLength="30" required />
                                    <label>Full Name <span className="red">*</span></label>
                                </p>
                            </div>
                            <div className="col-md-6">
                                <p className="inputContainer">
                                    <input type="text" name="orgName" placeholder="Organisation Name"  onChange={ this.updateInput.bind(this) } value={trailObj.orgName} maxLength="30" required />
                                    <label>Organisation Name</label>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="inputContainer">
                                    <input type="text" name="mobno" placeholder="Mobile Number"  onChange={ this.updateInput.bind(this) } value={trailObj.mobno} maxLength="10" required />
                                    <label>Mobile Number <span className="red">*</span></label>
                                </p>
                            </div>
                            <div className="col-md-6">
                                <p className="inputContainer">
                                    <input type="text" name="email" placeholder="E Mail"  onChange={ this.updateInput.bind(this) } value={trailObj.email} maxLength="30" required />
                                    <label>Email</label>
                                </p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-6">
                            <p className="inputContainer">
                                <input type="text" name="totNoVeh" placeholder="Total Vehicles Owned"  onChange={ this.updateInput.bind(this) } value={trailObj.totVeh} maxLength="20" required />
                                <label>Total Vehicles Owned</label>
                            </p>
                            </div>
                            <div className="col-md-6">
                            <p className="inputContainer">
                                <input type="text" name="noOfALVeh" placeholder="No. Of AL Vehicles"  onChange={ this.updateInput.bind(this) } value={trailObj.noOfALVeh} maxLength="20" required />
                                <label>No of AL Vehicles Owned</label>
                            </p>
                            </div>
                        </div>                 
                    <br />

                    <div className="row" style={!this.otpBlock ? {display: 'block'} : {display: 'none'}} >
                        <div className="col-md-12">
                            <div className="button-container">
                                <p className="inputContainer pull-right">
                                    <span className="w200"><input type="button" className="submitButton" name="submit" value="Submit" onClick={ this.executeQuery } /></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                          <div className="row" style={this.otpBlock ? {display: 'block'} : {display: 'none'}} >
                          <div className="col-md-12">
                              <div className="otp-container">
                                  <div className="col-md-6">
                                      <p className="inputContainer">
                                      <input type="text" name="otp_number" placeholder="Enter OTP"  onChange={ this.updateInput.bind(this) } value={trailObj.otp_number} maxLength="20" required />
                                      <label>Enter OTP</label>
                                      </p>
                                      <p className="inputContainer pull-right">
                                          <span className="w200"><input type="button" className="submitButton" name="submit" value="Validate OTP" onClick={ this.executeQuery } /></span>
                                      </p>
                              </div>
                              </div>
                          </div>
                      </div>
                        

                        
                                        
                    
                    </form>
                    <div className="popup_footer text-center">
                        {/* <h1>Footer</h1> */}
                    </div>    
                </div>
                

            </div>       
        </div>
    );
    }
}

function LoginSection() {

    var [email] = useState('');
    let mailVal = React.createRef();
    var [clicked, setClickVal] = useState(false);
    console.log(phoneno);
    console.log(mailformat);
    console.log(email);
/*
    const executeQuery=() => {
        console.log(clicked);
        clicked = true;
    }*/

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
                                <input type="text" placeholder="Mobile number or Email" name="email" ref={mailVal} />
                                {/* <span className="commonbut ffub18 cursor-pointer" onClick={executeQuery} >Start Trail</span> */}
                                <span className="commonbut ffub18 cursor-pointer" onClick={() => setClickVal(true)} >Start Demo</span>
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <img src="/images/login_art.png" alt="industry Section" />
            </div>
        </div>
        <div style={ clicked === true ? {display: "block"} : {display: "none"} }>
            <LoginPopup closeVal={() => setClickVal(false)} />
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
            others: { }
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

    loginFunction=()=>{
        
        console.log(this.state.userInfo);
        let uInfo = this.state.userInfo;
        if(uInfo.userid !== '' && uInfo.userid.length >3 && uInfo.password!=='' && uInfo.password.length > 3 && uInfo.captcha!=='' && uInfo.captcha.length >3) {
            let newObj = {};
            newObj.userId = uInfo.userid;
            newObj.password = uInfo.password;
            const datas = postData('http://10.18.1.113:8000/map/userInformation', newObj);
            datas.then((dataVals)=> {
                console.log(dataVals);
                if(dataVals.message === 'success') {
                    this.props.redirectPage('mapview');
                } else {
                    alert("Please enter the valid Info");
                }
            });
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

                    <p className="text-right"> <input type="button" disabled={ this.state.userInfo.loginDisable } value="Login" className="loginBut" onClick={ this.props.redirectPage.bind(this, 'dashboard') } /> </p>
                    {/* <NavLink name="Go to Maps page" link="/maps" ><span>Karthick</span></NavLink> */}

                    {/* <p className="text-right"> <input type="button" disabled={ this.state.userInfo.loginDisable } value="Login" className="loginBut" onClick={ this.props.redirectPage.bind(this, 'mapview') } /> </p> 
                    <p className="text-right"> <input type="button" disabled={ this.state.userInfo.loginDisable } value="Login" className="loginBut" onClick={ this.loginFunction } /> </p> */}
                    

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
export { LoginPopup };
//export default LoginSection;