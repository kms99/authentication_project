import React, { PropsWithChildren } from 'react';
import Title from '../../common/title/Title';
import { TitleType } from '../../common/title/title.type';

interface Props {
  title: string;
}

const UserInfoLine = ({ children, title }: PropsWithChildren<Props>) => {
  return (
    <section className="flex gap-4 justify-between w-full">
      <Title type={TitleType.SUB}>{title}</Title>
      <span>{children} dummy data</span>
    </section>
  );
};

export default UserInfoLine;
