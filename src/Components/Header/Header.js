import React from 'react';
import NavLink from '../../Components/Link/Link'
import './Header.scss';

function HeaderTrue(menuList) {
    console.log(menuList);
    return (<div className="col" >
    <div className="row">
        <div className="col-md-8">
            <nav className="menuItems">
                <ul className="menuList">
                    { menuList.val.map((listVal, index)=> (
                        <li key={index}><a href={listVal.link} className="active">{listVal.value}</a></li>
                    ))}
                </ul>
            </nav>
        </div>
        <div className="col-md-4">
        <div className="loginIconImage">
            <NavLink name="Go to Maps page" link="/login" >
                <img src="images/login/Loginbutton.png" alt="iAlert" title="Login"/ >
            </NavLink>
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
                    <li><NavLink name="Go to Maps page" link="/" >Back to Main Menu</NavLink></li>
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
            navList: [
                {   value:"Home", link: '#home' }, 
                {   value: "Features", link: '#features' }, 
                {   value: "Contact", link: '#contact' }
            ]
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