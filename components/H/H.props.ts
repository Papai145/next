import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface HProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size: 's' | 'm' | 'l';
  children: string;
  className?: string;
}