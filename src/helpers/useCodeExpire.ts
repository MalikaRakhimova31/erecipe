import { useEffect } from "react";

interface Props {
  seconds: number;
  isConfirm: boolean;
  setExpired: (b: boolean) => void;
  setSeconds: (s: number) => void;
}

export default function useCodeExpire({
  seconds,
  isConfirm,
  setExpired,
  setSeconds,
}: Props): any {
  useEffect(() => {
    if (isConfirm) {
      let timer;
      if (seconds !== 0) {
        timer = setTimeout(() => {
          setSeconds(seconds - 1);
        }, 1000);
      } else {
        setExpired(true);
        clearTimeout(timer);
      }
    }
  }, [seconds, isConfirm]);
}
