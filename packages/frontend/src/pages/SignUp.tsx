import React from 'react';
import Input from '../components/common/input/Input';
import InputForm from '../components/inputForm/InputForm';
import Title from '../components/common/title/Title';
import AuthContainer from '../components/authContainer/AuthContainer';
import MainContainer from '../components/mainContainer/MainContainer';
import Button from '../components/common/button/Button';
import { ButtonStyleType } from '../components/common/button/button.type';

const SignUp = () => {
  return (
    <MainContainer>
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
          <Button type="submit" styleType={ButtonStyleType.PRIMARY}>
            로그인
          </Button>
        </InputForm>
      </AuthContainer>
    </MainContainer>
  );
};

export default SignUp;
