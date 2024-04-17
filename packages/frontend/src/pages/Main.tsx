import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/button/Button';

const Main = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>메인페이지 입니다.</h1>
      <Button type="button" onClick={() => navigate('/signin')}>
        로그인
      </Button>
      <Button type="button" onClick={() => {}}>
        로그아웃
      </Button>
      <Button type="button" onClick={() => navigate('/signup')}>
        회원가입
      </Button>
    </div>
  );
};

export default Main;
