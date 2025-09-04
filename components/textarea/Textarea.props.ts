import type {
  DetailedHTMLProps,
  TextareaHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';

export interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  placeholder: string;
  className?: string;
  error?: FieldError;
}