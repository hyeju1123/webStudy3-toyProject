import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../App.css';

class header extends Component {

  render() {
    return (
        <div class='header_grid'>
            <div> </div>
            <div className='acenter'>
                
                    {/* <Link className='link_tit' to='/' onClick={() => window.location.href="/"}> <h1> 설문폼폼폼 </h1> </Link> */}
                    <Link className='link_tit' to='/'> <h1> 설문폼폼폼 </h1> </Link>
                    <div className='link_service'>
                        {/* <Link className='link_survey' to="/write" onClick={() => window.location.href="/write"}> 설문조사 올리기 </Link> */}
                        <Link className='link_survey' to="/write"> 설문조사 올리기 </Link>
                    </div>
                    <div className='link_service'>
                        {/* <Link className='link_select' to='/service' onClick={() => window.location.href="/service"}> 서비스소개 </Link> |  */}
                        <Link className='link_select' to='/service'> 서비스소개 </Link> | 
                        <Link className='link_select' to='/survey'> 설문조사 </Link> |
                        {/* <Link className='link_select' to='/qna' onClick={() => window.location.href="/qna"}> Q&A </Link> | */}
                        <Link className='link_select' to='/qna'> Q&A </Link> |
                        <Link className='link_select' to='/login'> 로그인 </Link>  
                    </div>
                
            </div>
        </div>
    );
  }
}

export default header;
