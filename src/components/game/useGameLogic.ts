import { useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import { useTimeout } from "../../hooks/useTimeout";
import { uniqueId } from "../../utils/uniqueId";
import { getRandomPosition } from "../../utils/getRandomPosition";
import type { TSprite } from "../../types";

const INTERVAL_COUNT = 1000;
const GAME_DURATION = 1000 * 60;

const getNewSprite = () => ({ id: uniqueId(), position: getRandomPosition() });

const getInitialSprites = () => [getNewSprite()];

export function useGameLogic() {
  const [isActive, setIsActive] = useState(true);
  const [score, setScore] = useState(0);
  const [sprites, setSprites] = useState<TSprite[]>(getInitialSprites);

  function onSpriteClick(spriteToBeRemoved: TSprite) {
    setSprites((sprites) =>
      sprites.filter((s) => s.id !== spriteToBeRemoved.id)
    );
    setScore((score) => ++score);
  }

  function addSprite() {
    setSprites((sprites) => [...sprites, getNewSprite()]);
  }

  function progressGame() {
    addSprite();
    setSprites((sprites) =>
      sprites.map((s) => ({ ...s, position: getRandomPosition() }))
    );
  }

  useInterval(progressGame, INTERVAL_COUNT);

  useTimeout(() => {
    setIsActive(false);
  }, GAME_DURATION);

  return {
    isActive,
    score,
    sprites,
    onSpriteClick,
  };
}
