import React, { PropsWithChildren } from 'react';

const AuthContainer = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col">{children}</div>;
};

export default AuthContainer;
