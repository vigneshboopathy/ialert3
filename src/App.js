import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import GoogleMap from './Components/GoogleMap';
import Loginpage from './Pages/Login/Loginpage';
import './App.css';


class App extends React.Component { 
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div className="App">
        <Router>
        <Route path="/" exact component={ Loginpage } />
        <Route path="/mapview" component={ GoogleMap } />
        </Router>
      </div>
    );
  }
}

export default App;