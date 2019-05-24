import { useRef, useEffect } from 'react';

const useHover = onHover => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('mouseenter', onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener('mouseenter', onHover);
      }
    }
  }, []);

  return element;
};

export default useHover;
