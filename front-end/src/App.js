
import React, { Component } from 'react';
import { Head } from './inc';
import { Main, Service, Qna } from './page';
import Write from './page/write';
import Detail from './page/detail';
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
          <Route path="/service" component={Service}/>
          <Route path="/qna" component={Qna}/>
          <Route path="/write" component={Write} />
          <Route path="/login" component={LogIn} />
          <Route path="/detail/" component={Detail} />
      </div>
    )
  }
}

export default App;
