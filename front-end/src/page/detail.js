import React, { useState, useEffect} from 'react';
import { Link, Route } from 'react-router-dom';
import Write from './write';
import axios from 'axios';
import qs from 'qs';

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
            <div>
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
                
            </div>
        )
    }
}
export default Detail;