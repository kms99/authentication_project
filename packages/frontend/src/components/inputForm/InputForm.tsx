import React, { ComponentProps, PropsWithChildren } from 'react';

interface Props extends ComponentProps<'form'> {}

const InputForm = ({ children, ...props }: PropsWithChildren<Props>) => {
  return (
    <form className="flex flex-col gap-y-1 content-start" {...props}>
      {children}
    </form>
  );
};

export default InputForm;
