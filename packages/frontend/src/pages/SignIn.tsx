import React from 'react';

const SignIn = () => {
  return (
    <div>
      <h1>로그인 페이지입니다.</h1>
      <div>
        <label htmlFor="input_id">아이디</label>
        <input id="input_id" type="email" />
      </div>
      <div>
        <label htmlFor="input_pw">비밀번호</label>
        <input id="input_pw" type="password" />
      </div>
    </div>
  );
};

export default SignIn;
