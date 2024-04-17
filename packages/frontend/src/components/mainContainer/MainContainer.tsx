import React, { PropsWithChildren } from 'react';

const MainContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default MainContainer;
