import type { JSX } from 'react';
import cn from 'classnames';
import type { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';

export const Textarea = ({ placeholder, className, error, ...props }: TextareaProps): JSX.Element => {
  return (
    <>
      <textarea name="" id="" placeholder={placeholder} className={cn(styles.textarea, className, { [styles.error]: error })} {...props}></textarea>
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </>
  );
};