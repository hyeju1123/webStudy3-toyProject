import React from 'react';
import './LogIn.css'

function LogIn() {

    //const [message, setMessage] = useState("");

    // useEffect(() => {
    //     fetch('/test')
    //         .then(response => response.text())
    //         .then(message => {
    //             setMessage(message);
    //         });
    // }, [])

    return (
        <div className="login-template">
        
            <div className="title">
                User Login
            </div>
            <form action="/user/login" method="post">
                <div className="input-wrapper">
                    <input type="text" name="userID" placeholder="userID" />
                    <input type="password" name="userPW" placeholder="password" />
                    회원이 아니시라면 회원가입 후 로그인 해주세요.
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default LogIn;
