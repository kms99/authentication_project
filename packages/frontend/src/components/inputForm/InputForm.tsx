import React, { PropsWithChildren } from 'react';

const InputForm = ({ children }: PropsWithChildren) => {
  return <form>{children}</form>;
};

export default InputForm;
