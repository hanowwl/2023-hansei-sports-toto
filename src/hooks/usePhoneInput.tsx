import { useEffect, useState } from 'react';

export const usePhoneInput = (): [string, React.ChangeEventHandler, (value: string) => boolean] => {
  const [value, setValue] = useState<string>('');

  const handleOnChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const validate = (value: string) => {
    return /^\d{3}-?\d{4}-?\d{4}$/.test(value);
  };

  useEffect(() => {
    if (value.length === 11) setValue(value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    else if (value.length === 13)
      setValue(value.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
  }, [value]);

  return [value, handleOnChangePhone, validate];
};
