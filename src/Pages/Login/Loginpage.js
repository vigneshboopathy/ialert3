import React from 'react';
//import Header1 from './Components/';
//import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm, { LoginSection } from '../Login/LoginSection';
//import GoogleMap from '../../Components/GoogleMap';
import NavLink from '../../Components/Link/Link';
import { BacktoTop } from '../../Components/BacktoTop/BacktoTop';

import './Loginpage.scss';

/*
const none = {
    display:'none'
}
*/
class Loginpage extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            page: ""
        };
        this.updatePage = this.updatePage.bind(this);
    }

    updatePage(navPage) {
        this.setState({page : navPage})
    }

    componentDidUpdate(prevState, newState) {
        if(this.state.page!=='') {
            //return <Redirect to='/mapview'  />;
            this.props.history.push('/'+this.state.page);
        }
        return false;
    }


    render() {
        return (
            <div className="login">
                <div className="container-wrapper">
                    <div className="loginSection">
                    <Router>
                        <Route exact path="/" component={ LoginSection }/>
                        <Route path="/login" component={()=> <LoginForm redirectPage={this.updatePage} /> } />
                        {/* <Route path="/mapview" component={ GoogleMap } /> */}
                    </Router>
                    </div>
                    {/* <NavLink name="Go to Maps page" link="/mapview"><span>Karthick</span></NavLink> */}
                    <div className="seperatorSection" id="features"></div>
                    <section id="industry-section">
                        <div className="container">
                            <div className="head-part">
                                <h5>Explore</h5>
                                <NavLink name="Go to Maps page" link="/mapview"><h3>Advanced Features</h3></NavLink>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <img src="/images/artwork_map.png" alt="iAlert" />
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                            <div className="ffum20 c565e61 text-center">
                                                <img src="/images/features/Vehicle_tracking.png" alt="" /> <br/>
                                                <p>Vehicle <br/>tracking</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                        <div className="ffum20 c565e61 text-center">
                                            <img src="/images/features/Trip_Management.png" alt="" /> <br/>
                                            <p>Trip <br/>management</p>
                                        </div>
                                        </div>
                                        <div className="col">
                                        <div className="ffum20 c565e61 text-center">
                                            <img src="/images/features/Fuel_Monitoring.png" alt="" /> <br/>
                                            <p>Fuel <br/>Monitoring</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                        <div className="ffum20 c565e61 text-center">
                                            <img src="/images/features/Fleet_Insights.png" alt="" /> <br/>
                                            <p>Fleet Insights</p>
                                        </div>
                                        </div>
                                        <div className="col">
                                            
                                        <div className="ffum20 c565e61 text-center">
                                            <img src="/images/features/Geo_fence.png" alt="" /> <br/>
                                            <p>Geo Fencing</p>
                                        </div>
                                        </div>
                                        <div className="col">
                                        <div className="ffum20 c565e61 text-center">
                                            <img src="/images/features/Fuel_Monitoring.png" alt="" /> <br/>
                                            <p>Driver Management</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                        <div className="ffum20 c565e61 text-center">
                                            <img src="/images/features/Fuel_Monitoring.png" alt="" /> <br/>
                                            <p>Deviation Tracking</p>
                                        </div>
                                        </div>
                                        <div className="col">
                                        <div className="ffum20 c565e61 text-center">
                                            <img src="/images/features/Fuel_Monitoring.png" alt="" /> <br/>
                                            <p>Proactive Service Support</p>
                                        </div>
                                        </div>
                                        <div className="col">
                                        <div className="ffum20 c565e61 text-center">
                                            <img src="/images/features/Fuel_Monitoring.png" alt="" /> <br/>
                                            <p>SMS and Email Alerts</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="seperatorSection" id="contact"></div>
                    <section id="contact-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="contactInfo">
                                        <div className="row">
                                            <div className="col">
                                                <p className="active ffum18 c417ae5"><span>Contact us</span></p>
                                            </div>
                                            <div className="col ffum18 c6e6e6e">
                                                <p>Enquiries</p>
                                            </div>
                                        </div>
                                        <div className="smallSeprator"></div>
                                        <div className="contentBlock">
                                            <div className="block1 c6e6e6e">
                                            <p className="ffum20">Mail us@</p>
                                            <p><a href="mailto:alert.care@ashokleyland.com" className="c457be8"> alert.care@ashokleyland.com</a></p>
                                            </div>
                                            <div className="smallSeprator"></div>
                                            <div className="block2 c6e6e6e">
                                                <p className="ffum20">Available on</p>
                                                <p className="ffu18">Mon to Sat 8:00AM to 8:00PM</p>
                                                <p><a href="#/" className="c457be8">044-30231075 / 044-30231077</a></p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="col-md-9">

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="seperatorSection"></div>
                <Footer />
                <BacktoTop />
            </div>
            
        )
    }
}
/*
function LoginSection() {
    return <h1 className="text-center">Karthick</h1>;
}
*/

export { LoginSection };

export default Loginpage;