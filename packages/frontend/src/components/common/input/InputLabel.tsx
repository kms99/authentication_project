import React, { ComponentProps, PropsWithChildren } from 'react';

type LabelType = ComponentProps<'label'>;

const InputLabel = ({ children, ...props }: PropsWithChildren<LabelType>) => {
  return <label {...props}>{children}</label>;
};

export default InputLabel;
