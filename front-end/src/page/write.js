import React, { Component } from "react";
import "./main.css";

class write extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      link: "",
      content: "",
      startDate: null,
      endDate: null,
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

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
    const { title, link, content, startDate, endDate } = this.state;
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
            <input
              type="date"
              id="date"
              value={startDate}
              onChange={this.changeHandler}
            />
            &nbsp;&nbsp; 마감일자&nbsp;&nbsp;
            <input
              type="date"
              id="date"
              value={endDate}
              onChange={this.changeHandler}
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
