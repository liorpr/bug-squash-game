import type { Position } from "../types";

export function getRandomPosition(): Position {
  const totalHeight = window.innerHeight;
  const totalWidth = window.innerWidth;
  const newXPosition = Math.floor(Math.random() * totalWidth);
  const newYPosition = Math.floor(Math.random() * totalHeight);
  return [newXPosition, newYPosition];
}
