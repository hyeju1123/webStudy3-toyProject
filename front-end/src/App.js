
import React, { Component } from 'react';
import { Head } from './inc';
import { Main, Service, Qna, Write, Info, Read } from './page';
import LogIn from './authentication/LogIn';
import './App.css';
import { Route } from 'react-router-dom';

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
          <Route path="/service" component={Info}/>
          <Route path="/qna" component={Read}/>
          <Route path="/write" component={Write}/>
          <Route path="/login" component={LogIn} />
      </div>
    )
  }
}

export default App;
