import React from 'react';
import Header from '../../Components/DashboardHeader';
import './Dashboard.scss';
import NavLink from '../../Components/Link/Link';



class dashboard extends React.Component{
    constructor(props) {
        super(props);

        this.handleHover = this.handleHover.bind(this);
        this.gif_path = "";
        this.gifImage = React.createRef();
        this.gifname = "Total"
    }
     
    handleHover(e){
        let status = e.currentTarget.dataset.status
        this.gifImage.current.src = "/images/Dashboadimgs/GIF-"+status+".gif";
    }
    
    render(){
        return(<div className="login">
        <div className="container-wrapper"><Header  /> 
        </div>
        <div className="bannerbg">
        <div className="container-wrapper">
        <div className="row">
        <div className="col-md-2 fleet-stat fleetbox">
         Fleet  <div className="col-md-12 fleet-stat fleetstatusbox">Status . <span className="status-view">Overview </span></div>      
        </div>
        <div className='col-md-5 gif-dashboard'>
         <img ref={this.gifImage} src={"images/Dashboadimgs/GIF-"+this.gifname+".gif"} alt="vehicles" title="Total"/ >        
                </div>
        <div className="col-md-4 right-text">
        <div className="fleet-stat col-md-8 right-text-fst">Keep track of </div>
        <div className="fleet-stat right-space-text">your trucks 24/7 </div> 
        <div className="col-md-11 right-below-txt right-below-txt-clr">Idle or on the road? Here you get real time </div> <div className="right-below-txt-clr ">status of your fleet.</div>  
        </div>
        <div className="col-md-2 allgroup-btn">
        <input type="button" className="allgroup" value="All Groups" />
        </div>        
        <div className="row entire-count">        
        <div className="col-md-3 hower-tol" data-status="Total" onMouseEnter={this.handleHover}><div className = "count-value count-val-des">256</div><div className="count-text count-txt-des">Total</div> </div>
        <div className="col-md-3 hower-run" data-status="Running" onMouseEnter={this.handleHover}><div className = "count-value count-val-des">64</div><div className="count-text count-txt-des">Running</div></div>
        <div className="col-md-3 hower-idl" data-status="Idling" onMouseEnter={this.handleHover} ><div className = "count-value count-val-des">22</div><div className="count-text count-txt-des">Idling</div></div>
        <div className="col-md-3 hower-stp" data-status="Stopped" onMouseEnter={this.handleHover}><div className = "count-value count-val-des">156</div><div className="count-text count-txt-des">Stopped</div></div>
        </div>
        <div className="col-md-5">
        <NavLink name="Go to Maps page" link="/mapview"><input type="button" className="map-btn open-maps"  value="Open Maps" /></NavLink>        
        <input type="button" className="map-btn list-view" value="List View" />
        </div>
        </div>
        </div>        
        </div>
       <div className="bg-colors-quick">
        <div className="container-wrapper ">
        <div className="row ">
        <div className="guick-link-quick">
        <div className="row">
        <div className="col-md-2 fleet-stat qik-lik">
        Quick Links
        </div> 
        <div className="quck-img">
        <img className="quck-img-list" src="images/Dashboadimgs/V1.png" alt="iAlert" title="iAlert"/ >
        <div className="quck-text">MY VEHICLES</div>
        </div>
        <span className="vert-line"></span>
        <div className="quck-img">
        <img className="quck-img-list" src="images/Dashboadimgs/V2.png" alt="iAlert" title="iAlert"/ >
        <div className="quck-text">TRIPS LIST</div>
        </div>
        <span className="vert-line"></span>
        <div className=" quck-img">
        <img className="quck-img-list" src="images/Dashboadimgs/Fleet_Insights.png" alt="iAlert" title="iAlert"/ >
        <div className="quck-text">FLEET INSIGHT</div>
        </div>
        <span className="vert-line"></span>
        <div className="quck-img ">
        <img className="quck-img-list" src="images/Dashboadimgs/GeoFM.png" alt="iAlert" title="iAlert"/ >
        <div className="quck-text">GEO-FENCE</div>
        </div>
        <span className="vert-line"></span>
        <div className="quck-img ">
        <img className="quck-img-list" src="images/Dashboadimgs/Dealer_Locator.png" alt="iAlert" title="iAlert"/ >
        <div className="quck-text">DEALER LOCATOR</div>
        </div>
       <span className="vert-line"></span>
        <div className="quck-img subval">
        <img className="quck-img-list" src="images/Dashboadimgs/Subs.png" alt="iAlert" title="iAlert"/ >
        <div className="quck-text">SUBSCRIPTION</div>
        </div>
       <span className="vert-line"></span>
        <div className="quck-img-sht ">
        <img className="quck-img-list-sht" src="images/Dashboadimgs/Add-Shortcut.png" alt="iAlert" title="iAlert"/ >
        <div className="quck-text quck-text-sht">SHORTCUT</div>
        </div>
        <span className="vert-line"></span>
        <div className="quck-img-org ">
        <img className="quck-img-list-org" src="images/Dashboadimgs/Organise.png" alt="iAlert" title="iAlert"/ >
        <div className="quck-text quck-text-org">ORGANISE</div>
        </div>
        </div>
        </div>
        </div>       
        </div>
        </div>
        <div className="bg-colors-alert">
        <div className="container-wrapper ">
        <div className="row ">
        <div className="col-md-9">
        <div className="guick-link-alert-left">
        <div className="row ">
        <div className="col-md-5 ">
        <div className="fleet-stat qik-lik">
        Fleet  <div className="col-md-12 fleet-stat fleetstatusbox">Alerts <span className="alert-span-view">. Overview . Top 5 Alerts </span></div>    
        </div>
        <div className="alert-box-info">
         Integrated functionality will notify you instantly about alerts that need attention.   
        </div>
        <input type="button" className="map-btn open-alert" value="Open Alerts" />     
        </div>
        <div className="lastweek-btn"> 
        <input type="button" className="weekly-btn" value="Last Week" />    
        </div>
        <div className="row alert-icon">  
        <div className="col-md-2"> <img className="quck-img-alert" src="images/Dashboadimgs/Tyre.png" alt="iAlert" title="iAlert"/ ><img className="quck-img-bg" src="images/Dashboadimgs/Blue-bg.png" alt="iAlert" title="iAlert"/ ><div className = "alert-cnt-txt">56</div></div><span className="alert-text-icon">Tyre Pressure</span>
        <div className="col-md-2"> <img className="quck-img-alert" src="images/Dashboadimgs/Speed.png" alt="iAlert" title="iAlert"/ ><img className="quck-img-bg" src="images/Dashboadimgs/Blue-bg.png" alt="iAlert" title="iAlert"/ ><div className = "alert-cnt-txt">33</div></div><span className="alert-text-icon">Speed Alert</span>    
        <div className="col-md-2"> <img className="quck-img-alert" src="images/Dashboadimgs/Idling.png" alt="iAlert" title="iAlert"/ ><img className="quck-img-bg" src="images/Dashboadimgs/Blue-bg.png" alt="iAlert" title="iAlert"/ ><div className = "alert-cnt-txt">42</div></div><span className="alert-text-icon">Excessive Idling</span>    
        <div className="col-md-2"> <img className="quck-img-alert" src="images/Dashboadimgs/Clutch.png" alt="iAlert" title="iAlert"/ ><img className="quck-img-bg" src="images/Dashboadimgs/Blue-bg.png" alt="iAlert" title="iAlert"/ ><div className = "alert-cnt-txt">76</div></div><span className="alert-text-icon">Clutch Riding</span>
        <div className="col-md-2"> <img className="quck-img-alert" src="images/Dashboadimgs/lost-gps.png" alt="iAlert" title="iAlert"/ ><img className="quck-img-bg" src="images/Dashboadimgs/Blue-bg.png" alt="iAlert" title="iAlert"/ ><div className = "alert-cnt-txt">252</div></div><span className="alert-text-icon">Lost GPS</span>       
        </div>
        </div>
        </div>
        </div>
        <div className="col-md-3">
        <div className="guick-link-alert-right">
        <div className="row ">
        <div className="col-md-7">
        <div className="fleet-stat get-sup">
        Get  <div className="col-md-12 fleet-stat fleetstatusbox">Support <span className="alert-span-view">. Mail </span></div>    
        <img className="quck-img-list-org" src="images/Dashboadimgs/chat.png" alt="iAlert" title="iAlert"/ >
        </div>        
        </div>
        <div className="col-md-3">
        <input type="button" className="map-btn open-mail-icon" value="Open" />
        </div>
        
        </div>           
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>)
    }
    
} 
export default dashboard;