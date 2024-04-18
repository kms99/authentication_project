import React from 'react';
import Input from '../components/common/input/Input';
import InputForm from '../components/inputForm/InputForm';
import Title from '../components/common/title/Title';
import AuthContainer from '../components/authContainer/AuthContainer';
import Button from '../components/common/button/Button';
import MainContainer from '../components/main/mainContainer/MainContainer';
import { ButtonStyleType } from '../components/common/button/button.type';
import { TitleType } from '../components/common/title/title.type';

const SignIn = () => {
  return (
    <MainContainer>
      <AuthContainer>
        <Title type={TitleType.MAIN}>로그인</Title>
        <InputForm>
          <Input id="input_id" type="email">
            아이디
          </Input>
          <Input id="input_pw" type="password">
            비밀번호
          </Input>
          <Button type="submit" styleType={ButtonStyleType.PRIMARY}>
            로그인
          </Button>
        </InputForm>
      </AuthContainer>
    </MainContainer>
  );
};

export default SignIn;
