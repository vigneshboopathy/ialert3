import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        //console.log(this.props);
        this.state = {
            navList: ["Home", "Features", "Contact"]
        }
    }

    render() {
        return (
            <section id="footer-section">
                    <div className="footer">
                        <div className="row">
                            <div className="col text-center">
                                <p><strong>&copy;</strong> 2020 <strong>ASHOK LEYLAND</strong> All Rights Reserved
                                <span className="pull-right socialicons">
                                    <a href="#/" className=""><img src='/images/social-icons/fb-icon.png' alt="fb" title="fb" /></a>
                                    <a href="#/" className=""><img src='/images/social-icons/twitter-icon.png' alt="fb" title="fb" /></a>
                                    <a href="#/" className=""><img src='/images/social-icons/youtube-icon.png' alt="fb" title="fb" /></a>
                                </span>
                                </p>

                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}

export default Footer;