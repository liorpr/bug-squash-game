import { useEffect } from "react";

export function useInterval(callback: () => void, delay: number) {
  useEffect(() => {
    let id = setInterval(callback, delay);
    return () => clearInterval(id);
  }, [delay]);
}
