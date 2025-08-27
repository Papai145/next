import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface LikeProps extends HTMLAttributes<HTMLDivElement> {
  size: "small" | "big";
  likes: number;
  className?: string;
  children?: ReactNode;
}
