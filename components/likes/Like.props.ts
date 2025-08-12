import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface LikeProps extends HTMLAttributes<HTMLDivElement> {
  size: "small" | "big";
  className?: string;
  children?: ReactNode;
}
