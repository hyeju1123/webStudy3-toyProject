import React, { Component, useState } from "react";
import "./main.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class write extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      link: "",
      content: "",
      startDate: new Date(),
      endDate: new Date(),
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  onChangeStartDate(date) {
    this.setState({ startDate: date });
  }

  onChangeEndDate(date) {
    this.setState({ endDate: date });
  }

  // state = {
  //     message: "",
  //     data: {
  //         title: "first data",
  //         url: "http://localhost:8080/api/write",
  //         content: "my content"
  //     }
  // }

  // constructor(props) {
  //   super(props);
  //   //this.testPost = this.testPost.bind(this);
  // }

  // componentDidMount() {
  //     fetch("/api/write")
  //         .then(response => response.text())
  //         .then(hello => {
  //             this.setState({
  //                 message: hello
  //             })
  //         });
  // }

  // testPost() {

  //     fetch('http://localhost:8080/api/write',
  //         {
  //             method: 'POST',
  //             credentials: 'include',
  //             headers: {
  //                 'Accept': 'application/json',
  //                 'Content-Type': 'application/json',
  //                 'Access-Control-Allow-Credentials': true
  //             },
  //             body: JSON.stringify(this.state.data)
  //         }
  //     )
  //     .then(res => console.log(res));
  // }

  render() {
    const { title, link, content } = this.state;
    const { startDate } = this.state.startDate;
    const { endDate } = this.state.endDate;

    return (
      <div className="write">
        <form action="/api/write" method="post" onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              id="title_txt"
              name="title"
              placeholder="제목"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="url"
              id="link_txt"
              name="link"
              placeholder="링크"
              value={link}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <textarea
              id="ex_txt"
              name="content"
              placeholder="설문내용에 대해 설명해주세요"
              value={content}
              onChange={this.changeHandler}
            ></textarea>
          </div>
          <div>
            시작일자&nbsp;&nbsp;
            {/* <input
              type="date"
              id="date"
              value={startDate}
              onChange={this.changeHandler}
            /> */}
            <DatePicker
              id="startDate"
              name="startDate"
              value={startDate}
              dateFormat="yyyy-MM-dd"
              selected={this.state.startDate}
              onChange={(date) => this.onChangeStartDate(date)}
            />
            &nbsp;&nbsp; 마감일자&nbsp;&nbsp;
            {/* <input
              type="date"
              id="date"
              value={endDate}
              onChange={this.changeHandler}
            /> */}
            <DatePicker
              id="endDate"
              name="endDate"
              value={endDate}
              dateFormat="yyyy-MM-dd"
              selected={this.state.endDate}
              onChange={(date) => this.onChangeEndDate(date)}
            />
          </div>
          <div id="submit_btn">
            <button type="submit">저장</button>&nbsp;&nbsp;
            <button>취소</button>
          </div>
        </form>
        {/* <button onClick={this.testPost}>testpost</button> */}
      </div>
    );
  }
}

export default write;
