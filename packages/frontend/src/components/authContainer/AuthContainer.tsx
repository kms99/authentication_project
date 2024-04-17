import React, { PropsWithChildren } from 'react';

const AuthContainer = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-10">{children}</div>;
};

export default AuthContainer;
