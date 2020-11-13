import React, {useEffect, useState} from 'react';
import './LogIn.css'

function LogIn() {

    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch('/test')
            .then(response => response.text())
            .then(message => {
                setMessage(message);
            });
    }, [])

    return (
        <div className="login-template">
            <div className="title">
                User Login, {message}
            </div>
            <form action="/login" method="post">
                <div className="input-wrapper">
                    <input type="text" name="username" placeholder="username" />
                    <input type="password" name="password" placeholder="password" />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default LogIn;
