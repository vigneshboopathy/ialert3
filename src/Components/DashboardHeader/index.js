import React from 'react';
import '../../Components/DashboardHeader/Dheades.scss';
class Header extends React.Component {
render(){
return(<div className="col bannerspace" >
<div className="row ">
<div className="col-md-2">
<div className="logo">
<img src="images/Dashboadimgs/Logo.png" alt="iAlert" title="iAlert"/ >
</div>
</div>
<div className="col-md-4">
<div className="usertexts">WELCOME, <span className="customername">RAJESH KUMAR</span></div>
</div>

<div className="col-md-5">
<div className="hamtext">MENU</div>
</div>
<div className="col-md-1">
<div className="ham">
<img src="images/Dashboadimgs/Ham.png" alt="iAlert" title="Ham"/ >
</div>
</div>
</div>
</div>
)
}
}

export default Header;