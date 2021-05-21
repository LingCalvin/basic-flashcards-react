import { useState } from 'react';

export default function useTextFieldValue(
  value: string
): [string, React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>] {
  const [val, setVal] = useState(value);
  return [
    val,
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
      setVal(e.target.value),
  ];
}
