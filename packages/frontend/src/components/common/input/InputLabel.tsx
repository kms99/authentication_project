import React, { ComponentProps, PropsWithChildren } from 'react';

type LabelType = ComponentProps<'label'>;

const InputLabel = ({ children, ...props }: PropsWithChildren<LabelType>) => {
  return (
    <label
      {...props}
      className="absolute left-2 top-1/2 -translate-y-1/2 font-bold"
    >
      {children}
    </label>
  );
};

export default InputLabel;
