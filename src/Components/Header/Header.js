import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';


class Header extends React.Component {
    constructor(props) {
        super(props);
        //console.log(this.props);
        this.state = {
            navList: ["Home", "Features", "Contact"]
        }
    }

    render() {
        return (
                <section id="header-section">
                    <div className="row">
                        <div className="col">
                    <div className="header-menu logoScreen">
                        <div className="logo">
                            <img src="images/login/ialertlogo.png" alt="iAlert" title="iAlert"/ >
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    
                    <div className="row">
                        <div className="col-md-8">
                            <nav className="menuItems">
                                <ul className="menuList">
                                    { this.state.navList.map((listVal, index)=> (
                                        <li key={index}><a href="#/" >{listVal}</a></li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-4">
                        <div className="loginIconImage">
                            <Link to="/login">
                                <img src="images/login/Loginbutton.png" alt="iAlert" title="Login"/ >
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </section>
        )
    }
}

export default Header;