import { PropsWithChildren } from "react";
import "./header.css";

export const Header: React.FC<PropsWithChildren> = ({ children }) => (
  <header className="header">{children}</header>
);
