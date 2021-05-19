import { useRef } from 'react';

let uniqueIdNumber = 0;

export default function useUniqueId() {
  const uniqueId = useRef(`unique-id-${uniqueIdNumber++}`);
  return uniqueId.current;
}
