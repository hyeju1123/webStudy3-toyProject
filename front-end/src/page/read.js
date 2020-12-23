import React, { Component } from "react";
import "./read.css";

class read extends Component {
  render() {
    return (
      <div className="Read">
        <div className="list-title">폼 게시판</div>
        <div className="read_title">OOOO 관련 설문조사 입니다.</div>
        <table>
          <tbody>
            <tr align="center" className="table_info">
              <td width="15%">작성일</td>
              <td width="20%">2020.11.26</td>
              <td width="15%">마감일</td>
              <td width="20%">2020.12.12</td>
              <td width="15%">작성자</td>
              <td width="15%">송이송이</td>
            </tr>
            <tr align="center" className="table_info">
              <td width="15%">설문링크</td>
              <td colspan="5"></td>
            </tr>
            <tr height="500px">
              <td colspan="6">설문에 대한 설명~~~</td>
            </tr>
          </tbody>
        </table>
        <div className="ud_btn">
          <button className="btn1">수정</button>
          <button className="btn1">삭제</button>
        </div>
        <div className="return_btn">
          <button>목록으로 돌아가기</button>
        </div>
      </div>
    );
  }
}

export default read;
