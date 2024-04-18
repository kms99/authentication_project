import React, { ComponentProps, PropsWithChildren } from 'react';
import { LabelType } from './input.type';

interface Props extends ComponentProps<'label'> {
  labelType: LabelType;
}

const InputLabel = ({
  children,
  labelType,
  ...props
}: PropsWithChildren<Props>) => {
  const labelStyle = (labelStyleType: LabelType) => {
    switch (labelStyleType) {
      case LabelType.CHECKBOX:
        return '';
      case LabelType.TEXT_INPUT:
        return 'absolute left-2 top-1/2 -translate-y-1/2';
      default:
        return;
    }
  };

  return (
    <label {...props} className={`${labelStyle(labelType)} font-bold`}>
      {children}
    </label>
  );
};

export default InputLabel;
