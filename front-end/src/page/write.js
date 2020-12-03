import React, { useRef, useState, useEffect } from 'react';
import './main.css'
import axios from 'axios';
import qs from 'qs';



function Write({ location }) {

    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });

    const [data, setData] = useState(null);
    
    //const [loading, setLoading] = useState(true);

    let inputRef = useRef([]);
    inputRef.current = [0,0,0,0,0].map(
        (ref, index) => inputRef.current[index] = React.createRef()
    )
    
    async function fetchUrl(url, id) {
        
        await axios.get(`${url}?board_id=${id}`).then(response => {
            setData(response.data);
        });
    }

    useEffect(() => {
        console.log("location.search");
        console.log(location.search)
        if (query.board_id) {
            console.log("query.board_id")
            console.log(query.board_id)
            fetchUrl("/api/detail", query.board_id)
        } else {
            
            setData({...data, title: '', url: ''});        
        
        
            inputRef.current.map(item => 
                item.current.value = ''
            )
                    
        
            console.log("else");
        }
        return () => {
            console.log('return');
            setData(null);
        }
    }, [location.search]);
    

    const handleChange = (e) => {
        setData({[e.target.name]: e.target.value});
    }

    
    return (
        <div className='Write'>
            <form action="/api/write" method="post">
                { 
                    // data && location.search ? 
                    // <input type='hidden' name="boardId" value={data.boardId} /> :
                    // console.log(data)
                    data && location.search && <input type='hidden' name="boardId" value={data.boardId} /> 
                }
                <div>
                    {
                        data && location.search ? 
                        //<div>{data.title}</div> :
                        <input type='text' id='title_txt' name='title' value={data.title} onChange={handleChange} /> :
                        <input ref={inputRef.current[0]} type='text' id='title_txt' name='title' placeholder='제목'/> 
                    }
                    
                </div>
                <div>
                    {
                        data && location.search ? 
                        <input type='url' id='link_txt' name='url' value={data.url} onChange={handleChange} /> :
                        <input ref={inputRef.current[1]} type='url' id='link_txt' name='url' placeholder='링크'/> 
                    }
                </div>
                <div>
                    {
                        data && location.search ? 
                        <textarea id='ex_txt' name='content' value={data.content} onChange={handleChange}></textarea> :
                        <textarea ref={inputRef.current[2]} id='ex_txt' name='content' placeholder='설문내용에 대해 설명해주세요'></textarea>    
                    }
                    {/* <textarea id='ex_txt' name='content' placeholder='설문내용에 대해 설명해주세요'></textarea> */}
                </div>
                <div>
                    시작일자&nbsp;&nbsp;
                    {
                        data && location.search ? 
                        <input type="date" name="startDate" id='date' value={data.startDate} onChange={handleChange}/> :
                        <input ref={inputRef.current[3]} type="date" name="startDate" id='date'/>
                    }
                    &nbsp;&nbsp;
                    {/* <input type="date" name="startDate" id='date'/>&nbsp;&nbsp; */}
                    마감일자&nbsp;&nbsp;
                    {
                        data && location.search ? 
                        <input type="date" name="endDate" id='date' value={data.endDate} onChange={handleChange} /> :
                        <input ref={inputRef.current[4]} type="date" name="endDate" id='date'/>    
                    }
                    {/* <input type="date" name="endDate" id='date'/> */}
                </div>
                <div id="submit_btn">
                    <button type="submit">저장</button>&nbsp;&nbsp;
                    <button>취소</button>
                </div>
            </form>
        </div>
    );
}

export default Write;