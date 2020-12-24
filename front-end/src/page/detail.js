import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import "./read.css";
import DelayLink from "react-delay-link";

export function useFetch(url, id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchUrl() {
    await axios.get(`${url}?board_id=${id}`).then((response) => {
      console.log(response);
      setData(response.data);
    });
    setLoading(false);
  }
  useEffect(() => {
    if (id) {
      console.log("id: " + id);
      fetchUrl();
    } else {
      console.log("no data");
      setData(null);
      setLoading(false);
    }
  }, []);
  return [data, loading];
}

export function useFetch2(url) {
  const [data, setData] = useState([]);
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();

    setData(json);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return data;
}

const Detail = ({ location }) => {
  // let board_id = location.search.split("=")[1];
  // if (parseInt(board_id) === 1) {
  //     return <div>1</div>
  // }

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  console.log(query);

  const [data, loading] = useFetch("/api/detail", query.board_id);
  console.log(data);

  const boardData = useFetch2("/api/list");

  const deletePost = (board_id) => {
    fetch(`/api/list/${board_id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      [...boardData].filter((i) => i.board_id !== board_id);
    });
  };

  if (loading) {
    return <div>loading</div>;
  } else {
    return (
      <div className="Read">
        <div className="list-title">폼 게시판</div>
        <div className="read_title">OOOO 관련 설문조사 입니다.</div>
        <table>
          <tbody>
            <tr align="center" className="table_info">
              <td width="15%">작성일</td>
              <td width="20%">{data.startDate}</td>
              <td width="15%">마감일</td>
              <td width="20%">{data.endDate}</td>
              <td width="15%">작성자</td>
              <td width="15%">송이송이</td>
            </tr>
            <tr align="center" className="table_info">
              <td width="15%">설문링크</td>
              <td colspan="5">{data.url}</td>
            </tr>
            <tr height="500px">
              <td colspan="6">{data.content}</td>
            </tr>
          </tbody>
        </table>
        <div className="ud_btn">
          <Link
            to={{
              pathname: "/write",
              search: `?board_id=${query.board_id}`,
            }}
          >
            <button className="btn1">수정</button>
          </Link>
          <DelayLink delay={1000} to={{ pathname: "/" }}>
            <button className="btn1" onClick={() => deletePost(query.board_id)}>
              삭제
            </button>
          </DelayLink>
        </div>
        <div className="return_btn">
          <button>목록으로 돌아가기</button>
        </div>
      </div>
    );
  }
};
export default Detail;
