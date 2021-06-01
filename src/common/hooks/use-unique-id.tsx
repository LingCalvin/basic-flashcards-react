import { useRef } from 'react';

let uniqueIdNumber = 0;

export default function useUniqueId() {
  const uniqueId = useRef(`uid${uniqueIdNumber++}`);
  return uniqueId.current;
}
