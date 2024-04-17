import React from 'react';
import Input from '../components/common/input/Input';

const SignIn = () => {
  return (
    <div>
      <h1>로그인 페이지입니다.</h1>
      <Input id="input_id" type="email">
        아이디
      </Input>

      <Input id="input_pw" type="password">
        비밀번호
      </Input>
    </div>
  );
};

export default SignIn;
