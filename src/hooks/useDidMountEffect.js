import { useEffect, useRef } from 'react';

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(true);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = false;
  }, deps);
};

export default useDidMountEffect;
