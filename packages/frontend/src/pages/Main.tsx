import React from 'react';
import Title from '../components/common/title/Title';
import MainButtonContainer from '../components/main/mainButtonContainer/MainButtonContainer';
import MainContainer from '../components/main/mainContainer/MainContainer';
import UserInfo from '../components/main/useInfo/UserInfo';
import { TitleType } from '../components/common/title/title.type';

const Main = () => {
  return (
    <MainContainer>
      <Title type={TitleType.MAIN}>메인페이지</Title>
      <UserInfo />
      <MainButtonContainer />
    </MainContainer>
  );
};

export default Main;
