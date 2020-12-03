import React, { Component } from 'react';
import exImg from '../images/talk.png';
import './info.css';

class info extends Component {

    render() {
      return (
          <div className='div_position'>
              <img
              className='ex_img'
              src={ exImg }
              width='800'
              height='450'
              alt='testA' />
              
              <div>
                설문조사
              </div>
          </div>
      );
    }
  }
  
  export default info;
  