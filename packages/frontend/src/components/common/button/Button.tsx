import React, { PropsWithChildren, ComponentProps } from 'react';

type ButtonType = ComponentProps<'button'> & { styleType?: string };

const Button = ({
  children,
  styleType,
  ...props
}: PropsWithChildren<ButtonType>) => {
  return <button {...props}>{children}</button>;
};

export default Button;
