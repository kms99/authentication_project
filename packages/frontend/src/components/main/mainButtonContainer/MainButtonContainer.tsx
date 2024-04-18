import React from 'react';
import Button from '../../common/button/Button';
import { useNavigate } from 'react-router-dom';

const MainButtonContainer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-2 justify-center">
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

export default MainButtonContainer;
