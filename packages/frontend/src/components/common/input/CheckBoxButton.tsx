import React, { ComponentProps, PropsWithChildren } from 'react';
import InputLabel from './InputLabel';
import { LabelType } from './input.type';

interface Props extends ComponentProps<'input'> {}

const CheckBoxButton = ({ children, ...props }: PropsWithChildren<Props>) => {
  return (
    <div className="self-end flex gap-2 items-center">
      <InputLabel labelType={LabelType.CHECKBOX} htmlFor={props.id}>
        {children}
      </InputLabel>
      <input type="checkbox" {...props} />
    </div>
  );
};

export default CheckBoxButton;
