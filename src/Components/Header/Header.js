import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';

function HeaderTrue(menuList) {
    console.log(menuList);
    return (<div className="col" >
    <div className="row">
        <div className="col-md-8">
            <nav className="menuItems">
                <ul className="menuList">
                    { menuList.val.map((listVal, index)=> (
                        <li key={index}><a href="#/" className="active">{listVal}</a></li>
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
    </div>);
}

function HeaderFalse() {
      return (<div className="col" >
      <div className="row">
          <div className="col-md-8">
              <nav className="menuItems">
                  <ul className="menuList loginFalse">
                    <li><Link to="/">Back to Main Menu</Link></li>
                  </ul>
              </nav>
          </div>
          <div className="col-md-4">
          <div className="loginIconImage">
          </div>
          </div>
      </div>
      </div>); 
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        //console.log(this.props);
        this.state = {
            navList: ["Home", "Features", "Contact"]
        }
        console.log(this.props.login);
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
                    { this.props.login==='true' ? <HeaderFalse /> : <HeaderTrue val={this.state.navList} /> }
                    </div>
                </section>
        )
    }
}

export default Header;