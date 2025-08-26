import { HTMLAttributes } from "react";

export interface LikeWithNumberProps extends HTMLAttributes<HTMLDivElement> {
  likes: number;
}
