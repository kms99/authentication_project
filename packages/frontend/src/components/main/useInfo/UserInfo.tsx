import React from 'react';
import UserInfoLine from './UserInfoLine';

const UserInfo = () => {
  return (
    <div className="flex flex-col gap-4 bg-gray-200 p-6 mb-5">
      <UserInfoLine title="닉네임"></UserInfoLine>
      <UserInfoLine title="이메일"></UserInfoLine>
      <UserInfoLine title="가입일시"></UserInfoLine>
      <UserInfoLine title="최근접속"></UserInfoLine>
    </div>
  );
};

export default UserInfo;
