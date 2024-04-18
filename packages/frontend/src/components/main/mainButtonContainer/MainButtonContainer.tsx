import React from 'react';
import Button from '../../common/button/Button';
import { useNavigate } from 'react-router-dom';

const MainButtonContainer = () => {
  const navigate = useNavigate();

  // TODO: 로그인 세션의 유효성에 따른 버튼 조건부 출력 필요
  return (
    <div className="flex gap-2 justify-center">
      <Button type="button" onClick={() => navigate('/signin')}>
        로그인
      </Button>
      <Button type="button" onClick={() => navigate('/signup')}>
        회원가입
      </Button>
      <Button type="button" onClick={() => {}}>
        로그아웃
      </Button>
    </div>
  );
};

export default MainButtonContainer;
