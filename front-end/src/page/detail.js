import React, { useState, useEffect} from 'react';
import { Link, Route } from 'react-router-dom';
import Write from './write';
import axios from 'axios';
import qs from 'qs';
import './read.css';

export function useFetch(url, id) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    async function fetchUrl() {
        // await axios.get(url+'?board_id=1').then(response => {
        //     console.log(response)
        //     setData(response.data);
        // });
        await axios.get(`${url}?board_id=${id}`).then(response => {
            console.log(response)
            setData(response.data);
        });
        setLoading(false);
    }
    useEffect(() => {
        if (id) {
            console.log("id: "+id);
            fetchUrl();
        } else {
            console.log("no data");
            setData(null);
            setLoading(false);
        }
    }, []);
    return [data, loading];
}


const Detail = ({ location }) => {
    
    // let board_id = location.search.split("=")[1];
    // if (parseInt(board_id) === 1) {
    //     return <div>1</div>
    // }

    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    console.log(query);

    const [data, loading] = useFetch("/api/detail", query.board_id);
    console.log(data);
    
    if (loading) {
        return (
            <div>loading</div>
        )
    } else {
        return (
            <div className='Read'>
                {/* <div>
                    <div>{data.title}</div>
                    <div>{data.url}</div>
                    <div>{data.content}</div>
                    <div>{data.startDate}</div>
                    <div>{data.endDate}</div>
                    <Link to={{
                        pathname:"/write",
                        search:`?board_id=${query.board_id}`
                    }}>
                        수정하기    
                    </Link>
                    
                </div> */}
                <div className="list-title">
                폼 게시판
                </div>
                <div className='read_title'>
                    OOOO 관련 설문조사 입니다.
                </div>
                <table> 
                <tbody>
                    <tr align="center" className='table_info'> 
                    <td width="15%">작성일</td> 
                    <td width="20%">{data.startDate}</td> 
                    <td width="15%">마감일</td> 
                    <td width="20%">{data.endDate}</td>
                    <td width="15%">작성자</td> 
                    <td width="15%">송이송이</td> 
                    </tr>
                    <tr align="center" className='table_info'>
                    <td width="15%">설문링크</td>
                    <td colspan="5">{data.url}</td>
                    </tr>
                    <tr height="500px">
                    <td colspan="6">{data.content}</td>
                    </tr>
                </tbody> 
                </table>
                <div className='ud_btn'>
                <Link to={{
                        pathname:"/write",
                        search:`?board_id=${query.board_id}`
                    }}>
                    <button className='btn1'>수정</button>
                </Link>
                <button className='btn1'>삭제</button>
                </div>
                <div className='return_btn'>
                <button>목록으로 돌아가기</button>
                </div>
            </div>
        )
    }
}
export default Detail;