
import React, { Component } from 'react';
import { Head } from './inc';
import Write from './page/write';
import Detail from './page/detail';
import { Main, Qna, Info } from './page';
import LogIn from './authentication/LogIn';
import SignUp from './authentication/SignUp';
import SignUp_Result from './authentication/SignUpResult';
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
          <Route path="/login" component={LogIn} exact/>
          <Route path="/signup" component={SignUp} exact/>
          <Route path="/detail" component={Detail} />
          <Route path="/signup_result" component={SignUp_Result} exact/>
      </div>
    )
  }
}

export default App;
