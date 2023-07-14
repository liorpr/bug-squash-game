import { useEffect } from "react";

export function useTimeout(callback: () => void, delay: number) {
  useEffect(() => {
    let id = setTimeout(callback, delay);
    return () => clearTimeout(id);
  }, [delay]);
}
