import { useCallback, useState } from 'react';

export const useListToggle = <T extends string>(list: T[]) => {
  const [active, setActive] = useState<T>(list[0]);

  const handleOnClick = useCallback((item: T) => {
    return () => setActive(item);
  }, []);

  return { list, active, handleOnClick };
};
