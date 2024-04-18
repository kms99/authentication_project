import React, { ComponentProps, PropsWithChildren } from 'react';
import InputLabel from './InputLabel';
import useInput from '../../../hooks/useInput';
import { LabelType } from './input.type';

type InputType = ComponentProps<'input'>;

const Input = ({ children, ...props }: PropsWithChildren<InputType>) => {
  const { handleBlur, handleChangeValues, handleFocus, isFocused, value } =
    useInput();

  return (
    <div className="relative w-80 h-10 border-2 border-black px-2 text-lg">
      {children && !isFocused && !value && (
        <InputLabel labelType={LabelType.TEXT_INPUT} htmlFor={props.id}>
          {children}
        </InputLabel>
      )}
      <input
        {...props}
        className=" w-full h-full outline-none"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChange={handleChangeValues}
      />
    </div>
  );
};

export default Input;
