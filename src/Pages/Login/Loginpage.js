import React from 'react';
import './Loginpage.scss';

class Loginpage extends React.Component {
    constructor(props) {
        super(props);
        //console.log(this.props);
        this.state = {
            navList: ["Home", "Menu 1", "Menu 2"]
        }
    }

    render() {
        return (
            <div className="login">
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

                    <div className="menus">
                        <nav className="menuItems">
                            <ul className="menuList">
                                { this.state.navList.map((listVal, index)=> (
                                    <li key={index}>{listVal}</li>
                                ))}
                            </ul>
                        </nav>

                    </div>
                    </div>
                    </div>
                    
                </section>
            </div>
        )
    }


}


export default Loginpage;