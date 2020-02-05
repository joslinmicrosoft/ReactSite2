import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

const Home = () => (<div><h1>Welcome MITALI</h1><Link to='/about'>Go to about</Link></div>)
const About = ({ name }) => (<div><h1>About {name}</h1></div>)

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            render={(renderProps) => (
              <div>
                Last update made on 1/30/2020 1:27pm
                <Home {...this.props} {...renderProps} />
                <a href="/.auth/login/facebook">Login and return to this page</a>
                <a href="/.auth/login/facebook?post_login_redirect_uri=/authenticated">Authenticated page</a>
                <a href="/.auth/login/facebook?post_login_redirect_uri=/admin">Admin page</a>
              </div>
            )} />
        </Switch>
      </Router>
    )
  }
}

export default App;
