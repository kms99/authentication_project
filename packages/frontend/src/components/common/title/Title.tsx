import React, { PropsWithChildren } from 'react';
import { TitleType } from './title.type';

interface TitleProps {
  type: TitleType;
}

const Title = ({ children, type }: PropsWithChildren<TitleProps>) => {
  const TitleStyle = (titleType: TitleType) => {
    switch (titleType) {
      case TitleType.MAIN:
        return 'text-2xl mb-4';
      case TitleType.SUB:
      default:
        return 'text-lg';
    }
  };

  return <h2 className={`${TitleStyle(type)} font-bold`}>{children}</h2>;
};

export default Title;
