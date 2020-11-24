import React, {useEffect, useState} from 'react';
import ListItem from './ListItem';
import './List.css'

function useFetch(url) {
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


function List() {

    const data = useFetch("/api/list");

    //const data = [{"end_date":"2020-11-22","board_id":1,"title":"첫번째 제목","url":"http://localhost:8080/write","content":"첫번째 내용","start_date":"2020-11-22"},{"end_date":"2020-11-22","board_id":2,"title":"두번째","url":"http://localhost:8080/write","content":"아무 내용","start_date":"2020-11-22"},{"end_date":"2020-11-29","board_id":3,"title":"세번째","url":"http://localhost:8080/write/3","content":"설문내용","start_date":"2020-11-24"}]

    return (
        <main className="list-template">
            <div className="list-title">
                폼 게시판
            </div>
            <section className="head-wrapper">
                <span>번호</span>
                <span className="title-column">제목</span>
                <span>작성자</span>
                <span>작성일</span>
                <span>마감일</span>
            </section>
            <section className="list-wrapper">
                {data.map(
                    ({board_id, title, start_date, end_date}) => (
                        <ListItem
                            board_id={board_id}
                            title={title}
                            start_date={start_date}
                            end_date={end_date}
                        />
                    )
                )}
            </section>
            
        </main>
    );
}

export default List;
