import React, {useState} from 'react';
import Login from './LogIn';
import {Link} from 'react-router-dom';
function SignUpResult() {

    return (
        
            
    <div>
        회원가입이 정상적으로 완료되었습니다. 
        {/*<button onclick={() => setComp(Login)}>로그인 하러 가기</button>*/}
        <Link to='/login'>로그인하러 가기</Link>
    </div>
            
        
    );
}

export default SignUpResult;