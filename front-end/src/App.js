
import React, { Component } from 'react';
import { Head } from './inc';
import { Main, Service, Qna, Write } from './page';
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
        <BrowserRouter>
          <Route path="/" component={Main} exact/>
          <Route path="/service" component={Service}/>
          <Route path="/qna" component={Qna}/>
          <Route path="/write" component={Write}/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
