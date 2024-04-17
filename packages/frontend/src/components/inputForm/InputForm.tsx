import React, { PropsWithChildren } from 'react';

const InputForm = ({ children }: PropsWithChildren) => {
  return <form className="flex flex-col gap-y-1">{children}</form>;
};

export default InputForm;
