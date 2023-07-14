import { Sprite } from "../sprite/Sprite";
import { Header } from "../header/Header";
import { Score } from "../score/Score";
import { Card } from "../card/Card";
import { useGameLogic } from "./useGameLogic";
import "./game.css";

const GAME_OVER_MESSAGE = `Game over soldier, your score was {{SCORE}}, see you next time! 😎😎😎`;

export const Game: React.FC = () => {
  const { isActive, score, sprites, onSpriteClick } = useGameLogic();

  if (!isActive) {
    return (
      <div className="game-over-card-container">
        <Card isFullscreenOnMobile>
          {GAME_OVER_MESSAGE.replace("{{SCORE}}", `${score}`)}
        </Card>
      </div>
    );
  }

  return (
    <main>
      <Header>
        <Score value={score} />
      </Header>

      <ul>
        {sprites.map((sprite) => (
          <Sprite
            key={sprite.id}
            sprite={sprite}
            onClick={() => onSpriteClick(sprite)}
          />
        ))}
      </ul>
    </main>
  );
};
