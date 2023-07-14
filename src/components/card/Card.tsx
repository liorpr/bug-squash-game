import { PropsWithChildren } from "react";
import "./card.css";

interface CardProps {
  isFullscreenOnMobile?: boolean;
}

export const Card: React.FC<PropsWithChildren<CardProps>> = ({
  isFullscreenOnMobile = false,
  children,
}) => (
  <div className={`card ${isFullscreenOnMobile ? "full-screen-mobile" : ""}`}>
    {children}
  </div>
);
