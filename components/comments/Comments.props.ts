import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface CommentsProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  email: string;
  comment: string;
}
