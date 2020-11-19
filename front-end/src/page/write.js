import React, { Component } from 'react';
import './Main.css'

class Write extends Component {
    
    state = {
        message: "",
        data: {
            title: "",
            link: "",
            content: ""
        }
    }
    
    /*
   state = {
        message: "",
        data: {
            title: "first data",
            link: "http://localhost:8080/api/write",
            content: "my content"
        }
    }
    */

    constructor(props) {
        super(props);
    //     this.testPost = this.testPost.bind(this);
        this.writePost = this.writePost.bind(this);
    }

    

    handleChange = (e) => {
        this.setState({
            data: {
                [e.target.name]: e.target.value
            } 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);

        this.setState({
            data: {
                title: "",
                link: "",
                content: ""
            }
        })
    }
    

    // componentDidMount() {
    //     fetch("/api/write")
    //         .then(response => response.text())
    //         .then(hello => {
    //             this.setState({
    //                 message: hello
    //             })
    //         });
    // }

    writePost() {
        fetch('http://localhost:8080/api/write',
            {
                method: 'POST', 
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': true
                },
                body: JSON.stringify(this.state.data) 
            }
        )
        .then(res => console.log(res));
    }

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
        <div className='Write'>
            <form action="/api/write" method="post" onSubmit={this.handleSubmit}>
                <div>
                    <input type='text' id='title_txt' name='title' placeholder='제목' value = {this.state.title} onChange={this.handleChange}/>
                </div>
                <div>
                    <input type='url' id='link_txt' name='link' placeholder='링크' value = {this.state.link} onChange={this.handleChange}/>
                </div>
                <div>
                    <textarea id='ex_txt' name='content' placeholder='설문내용에 대해 설명해주세요' value = {this.state.content} onChange={this.handleChange}></textarea>
                </div>
                <div>
                    시작일자&nbsp;&nbsp;
                    <input type="date" id='date' name='start_date' value = {this.state.start_date} onChange={this.handleChange}/>&nbsp;&nbsp;
                    마감일자&nbsp;&nbsp;
                    <input type="date" id='date' name='end_date' value = {this.state.end_date} onChange={this.handleChange}/>
                </div>
                <div id="submit_btn">
                    <button type="submit" onClick={this.writePost}>올리기</button>&nbsp;&nbsp;
                    <button onClick={this.testPost}>취소</button>
                </div>
                
                <div>
                    {this.state.title}
                </div>
            </form>
        </div>
    );
  }
}

export default Write;
