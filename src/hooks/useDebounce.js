import { useEffect, useRef, useState } from 'react';

const useDebounce = (changedValue, delaytime) => {
  const [debounceValue, setDebounceValue] = useState(changedValue);

  const timeoutRef = useRef();

  useEffect(() => {
    if (!changedValue) {
      timeoutRef.current = setTimeout(() => {
        setDebounceValue(changedValue);
      }, delaytime);
    } else {
      setDebounceValue(changedValue);
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [changedValue, delaytime, timeoutRef.current]);

  return debounceValue;
};

export default useDebounce;
