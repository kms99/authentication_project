import React, { PropsWithChildren, ComponentProps } from 'react';
import { ButtonStyleType } from './button.type';

interface ButtonType extends ComponentProps<'button'> {
  styleType?: ButtonStyleType;
}

const Button = ({
  children,
  styleType = ButtonStyleType.BASIC,
  ...props
}: PropsWithChildren<ButtonType>) => {
  const $buttonStyle = (type: ButtonStyleType) => {
    switch (type) {
      case ButtonStyleType.BORDER:
        return 'border-black bg-white text-black [&:hover]:bg-black [&:hover]:text-white';
      case ButtonStyleType.PRIMARY:
        return 'border-black bg-black text-white';
      case ButtonStyleType.BASIC:
      default:
        return 'border-gray-400 bg-gray-400 text-black rounded-lg [&:hover]:bg-gray-500';
    }
  };

  return (
    <button
      {...props}
      className={`px-2 border-2 py-2 text-xl font-bold min-w-[6em] ${$buttonStyle(styleType)}`}
    >
      {children}
    </button>
  );
};

export default Button;
