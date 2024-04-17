import React from 'react';
import Input from '../components/common/input/Input';
import InputForm from '../components/inputForm/InputForm';
import Title from '../components/common/title/Title';
import AuthContainer from '../components/authContainer/AuthContainer';

const SignUp = () => {
  return (
    <AuthContainer>
      <Title>회원가입</Title>
      <InputForm>
        <Input id="input_nickname" type="text">
          닉네임
        </Input>
        <Input id="input_id" type="email">
          아이디
        </Input>
        <Input id="input_pw" type="password">
          비밀번호
        </Input>
        <Input id="input_pw" type="password">
          비밀번호 확인
        </Input>
      </InputForm>
    </AuthContainer>
  );
};

export default SignUp;
