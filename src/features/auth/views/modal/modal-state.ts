import { useState } from "react";

interface ModalState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export default function useModalState(): ModalState {
  const [count, setCount] = useState(0);

  const increment = (): void => {
    setCount((prev) => prev + 1);
  };
  const decrement = (): void => {
    setCount((prev) => prev - 1);
  };

  return { count, increment, decrement };
}
