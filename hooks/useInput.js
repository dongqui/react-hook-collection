import { useState } from 'react';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const onChangeValue = event.target.value;
    if (typeof validator === 'function' && validator(value)) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default useInput;
