import React from 'react';

const SignUp = () => {
  return (
    <div>
      <h1>회원가입 페이지 입니다.</h1>

      <div>
        <label htmlFor="input_nickname">닉네임</label>
        <input id="input_nickname" type="text" />
      </div>

      <div>
        <label htmlFor="input_id">아이디</label>
        <input id="input_id" type="email" />
      </div>

      <div>
        <label htmlFor="input_pw">비밀번호</label>
        <input id="input_pw" type="password" />
      </div>

      <div>
        <label htmlFor="input_pw_check">비밀번호 확인</label>
        <input id="input_pw_check" type="password" />
      </div>
    </div>
  );
};

export default SignUp;
