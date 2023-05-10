import { useCallback, useState } from 'react';

export const useListToggle = <T extends { id: string; label: string }>(list: T[]) => {
  const [active, setActive] = useState<T>(list[0]);

  const handleOnClick = useCallback(
    (item: T['id']) => {
      return () => setActive((prev) => list.find((v) => v.id === item) || prev);
    },
    [list]
  );

  return { list, active, handleOnClick };
};
