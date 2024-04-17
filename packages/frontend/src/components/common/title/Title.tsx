import React, { PropsWithChildren } from 'react';

const Title = ({ children, ...props }: PropsWithChildren) => {
  return <h2 {...props}>{children}</h2>;
};

export default Title;
