import type {
  HTMLAttributes } from 'react';

export interface CommentsProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  email: string;
  comment: string;
}