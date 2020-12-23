
import React, { Component } from 'react';
import { Head } from './inc';
import Write from './page/write';
import Detail from './page/detail';
import { Main, Qna, Info } from './page';
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
          <Route path="/qna" component={Qna}/>
          <Route path="/service" component={Info}/>
          <Route path="/write" component={Write}/>
          <Route path="/login" component={LogIn} />
          <Route path="/detail" component={Detail} />
      </div>
    )
  }
}

export default App;
