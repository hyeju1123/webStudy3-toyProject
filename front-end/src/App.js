import React, { Component } from 'react';
import { Head } from './inc';
import { Main, ServiceInfo, QnA, Write } from './page';
import SignUp from './authentication/SignUp';
import LogIn from './authentication/LogIn';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <div>
        <div>
          <Head/>
        </div>
          <Route path="/" component={Main} exact/>
          <Route path="/serviceinfo" component={ServiceInfo}/>
          <Route path="/qna" component={QnA}/>
          <Route path="/write" component={Write}/>
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
      </div>
    )
  }
}

export default App;
