import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder: string;
  className?: string;
  error?: FieldError;
}