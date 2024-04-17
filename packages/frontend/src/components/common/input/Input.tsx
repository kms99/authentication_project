import React, { ComponentProps, PropsWithChildren } from 'react';
import InputLabel from './InputLabel';

type InputType = ComponentProps<'input'>;

const Input = ({ children, ...props }: PropsWithChildren<InputType>) => {
  return (
    <div>
      {children && <InputLabel htmlFor={props.id}>{children}</InputLabel>}
      <input {...props} />
    </div>
  );
};

export default Input;
