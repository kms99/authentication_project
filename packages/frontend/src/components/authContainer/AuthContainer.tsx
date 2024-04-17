import React, { PropsWithChildren } from 'react';

const AuthContainer = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col items-center gap-5">{children}</div>;
};

export default AuthContainer;
