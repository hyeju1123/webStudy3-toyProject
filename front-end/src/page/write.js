import React, { Component } from 'react';
import './main.css'

class write extends Component {

  render() {

    return (
        <div className='Write'>
            <div>
                <input type='text' id='title_txt' name='title' placeholder='제목'/>
            </div>
            <div>
                <input type='url' id='link_txt' name='link' placeholder='링크'/>
            </div>
            <div>
                <textarea id='ex_txt' placeholder='설문내용에 대해 설명해주세요'></textarea>
            </div>
            <div>
                시작일자&nbsp;&nbsp;
                <input type="date" id='date'/>&nbsp;&nbsp;
                마감일자&nbsp;&nbsp;
                <input type="date" id='date'/>
            </div>
            <div id="submit_btn">
                <button>저장</button>&nbsp;&nbsp;
                <button>취소</button>
            </div>
        </div>
    );
  }
}

export default write;
