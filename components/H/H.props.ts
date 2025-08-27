import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface HProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size: "s" | "m" | "l";
  children: string;
  className?: string;
}
