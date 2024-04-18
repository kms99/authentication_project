import React, { useState } from 'react';

const useInput = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  // 포커스 인
  const handleFocus = () => {
    setIsFocused(true);
  };

  // 포커스 아웃
  const handleBlur = () => {
    setIsFocused(false);
  };

  // input 값 변경
  const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // input 값 리셋
  const handleResetValues = () => {
    setValue('');
  };

  return {
    isFocused,
    value,
    handleFocus,
    handleBlur,
    handleChangeValues,
    handleResetValues,
  };
};

export default useInput;
