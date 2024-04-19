import React from 'react';
import Input from '../components/common/input/Input';
import InputForm from '../components/inputForm/InputForm';
import Title from '../components/common/title/Title';
import AuthContainer from '../components/authContainer/AuthContainer';
import MainContainer from '../components/main/mainContainer/MainContainer';
import Button from '../components/common/button/Button';
import { ButtonStyleType } from '../components/common/button/button.type';
import { TitleType } from '../components/common/title/title.type';

const SignUp = () => {
  return (
    <MainContainer>
      <AuthContainer>
        <Title type={TitleType.MAIN}>회원가입</Title>
        <InputForm method="post" action="http://localhost:3000/process/adduser">
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
            회원가입
          </Button>
        </InputForm>
      </AuthContainer>
    </MainContainer>
  );
};

export default SignUp;
