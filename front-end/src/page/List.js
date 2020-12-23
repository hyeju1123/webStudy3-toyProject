import React, { Component } from "react";
import ListItem from "./ListItem";
import "./List.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { lists: [] };
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    fetch("/api/list")
      .then((response) => response.json())
      .then((data) => this.setState({ lists: data }));
  }

  async remove(board_id) {
    await fetch(`/api/list/${board_id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      let updatedLists = [...this.state.lists].filter(
        (i) => i.board_id !== board_id
      );
      this.setState({ lists: updatedLists });
    });
  }

  render() {
    const { lists } = this.state;

    return (
      <main className="list-template">
        <div className="list-title">폼 게시판</div>
        <section className="head-wrapper">
          <span>번호</span>
          <span className="title-column">제목</span>
          <span>작성자</span>
          <span>작성일</span>
          <span>마감일</span>
        </section>
        <section className="list-wrapper">
          {lists.map((list) => {
            return (
              <>
                <ListItem
                  board_id={list.board_id}
                  title={list.title}
                  start_date={list.start_date}
                  end_date={list.end_date}
                />
                <button
                  className="delete-btn"
                  onClick={() => this.remove(list.board_id)}
                >
                  삭제
                </button>
              </>
            );
          })}
        </section>
      </main>
    );
  }
}

export default List;
