import { Card } from "../card/Card";

interface ScoreProps {
  value: number;
}

export const Score: React.FC<ScoreProps> = ({ value }) => {
  return <Card>Score: {value}</Card>;
};
