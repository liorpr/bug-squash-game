import { memo } from "react";
import { Bug } from "lucide-react";
import type { TSprite } from "../../types";
import "./sprite.css";

const SIZE = 50;
const MOBILE_SIZE = 30;
const MOBILE_BREAKPOINT = 425;

function getSize() {
  return window.innerWidth < MOBILE_BREAKPOINT ? MOBILE_SIZE : SIZE;
}

interface SpriteProps {
  onClick: () => void;
  sprite: TSprite;
}

const InternalSprite: React.FC<SpriteProps> = ({ onClick, sprite }) => {
  const [xPosition, yPosition] = sprite.position;
  return (
    <li
      className="sprite"
      style={{
        transform: `translate(${xPosition}px,${yPosition}px)`,
        position: "absolute",
      }}
      onClick={onClick}
    >
      <Bug color="white" size={getSize()} />
    </li>
  );
};

export const Sprite = memo(
  InternalSprite,
  (prevProps, nextProps) =>
    prevProps.sprite.position[0] === nextProps.sprite.position[0] &&
    prevProps.sprite.position[1] === nextProps.sprite.position[1]
);
