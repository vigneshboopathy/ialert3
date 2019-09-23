import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loginpage from './Pages/Login/Loginpage';
import LoginSection from './Pages/Login/LoginSection'
class App extends React.Component { 
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Loginpage} />
          <Route path="/login" component={LoginSection} />
        </Router>
      </div>
    );
  }
}

export default App;
