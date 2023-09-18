import { ReactNode } from "react";
import React from "react";

interface HeadingProps {
  children: ReactNode;
}

export default function Heading({ children }: HeadingProps) {
  return <h1 className="heading container">{children}</h1>;
}
