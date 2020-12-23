import React, { Component } from "react";
import "./main.css";

class write extends Component {
  // state = {
  //     message: "",
  //     data: {
  //         title: "first data",
  //         url: "http://localhost:8080/api/write",
  //         content: "my content"
  //     }
  // }

  // constructor(props) {
  //     super(props);
  //     this.testPost = this.testPost.bind(this);
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
    return (
      <div className="Write">
        <form action="/api/write" method="post">
          <div>
            <input type="text" id="title_txt" name="title" placeholder="제목" />
          </div>
          <div>
            <input type="url" id="link_txt" name="url" placeholder="링크" />
          </div>
          <div>
            <textarea
              id="ex_txt"
              name="content"
              placeholder="설문내용에 대해 설명해주세요"
            ></textarea>
          </div>
          <div>
            시작일자&nbsp;&nbsp;
            <input type="date" name="start_date" id="date" />
            &nbsp;&nbsp; 마감일자&nbsp;&nbsp;
            <input type="date" name="end_date" id="date" />
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
