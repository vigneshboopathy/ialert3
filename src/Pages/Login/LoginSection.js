import React from 'react';
import Header from '../../Components/Header/Header';
function LoginSection() {
    return (
    <div className="section">
        <Header />
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



export default LoginSection;