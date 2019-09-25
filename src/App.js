import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import { createBrowserHistory as createHistory } from 'history'
import AsyncComponent from './AsyncComponent';

const Loginpage = AsyncComponent(() =>
    import('./Pages/Login/Loginpage').then(module => module.default)
)

const GoogleMap = AsyncComponent(() =>
    import('./Components/GoogleMap').then(module => module.default)
)
const maps = AsyncComponent(() =>
    import('./Components/GoogleMap').then(module => module.default)
)

const history = createHistory();

class App extends React.Component { 
  render() {
    return (
      <Router history={history}>
      <div className="App">
        
        <Switch>
          <Route path="/" exact strict component={ Loginpage } />
          <Route path="/login" exact component={ Loginpage } />
          <Route path="/mapview" exact component={ GoogleMap } />
          <Route path="/maps" exact component={ maps } />
          
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;