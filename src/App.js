import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Loginpage from './Pages/Login/Loginpage';

class App extends React.Component { 
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Loginpage />
      </div>
    );
  }
}

export default App;
