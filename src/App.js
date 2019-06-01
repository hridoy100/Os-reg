import React, { Component } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignInSide from './components/SignInSide';
import ParticleComponent from './components/ParticleComponent';
import Navigation from './components/Navigation';
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }
  state = {  }
  render() { 
    const { isSignedIn, route, box } = this.state;
    return ( 
      <div className="App">
        <ParticleComponent/>
        { route === 'home'
          ? <div> </div>
          : (
            route === 'signin'
            ? <SignIn onRouteChange={this.onRouteChange}/>
            : <SignUp onRouteChange={this.onRouteChange}/>
           )
        }
      </div>

     );
  }
}
 
export default App;
