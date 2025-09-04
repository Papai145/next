import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import type { ReactNode } from 'react';

export interface headerLink
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
    children: ReactNode;
  }