import { useState } from 'react';

const useInput = (initialValue, validator = () => true) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const onChangeValue = event.target.value;
    if (typeof validator === 'function' && validator(onChangeValue)) {
      setValue(onChangeValue);
    }
  };
  return { value, onChange };
};

export default useInput;
