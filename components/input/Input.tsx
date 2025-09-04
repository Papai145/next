import type { JSX } from 'react';
import cn from 'classnames';
import type { InputProps } from './Input.props';
import styles from './Input.module.css';

export const Input = ({ placeholder, className, error, ...props }: InputProps): JSX.Element => {
  return (
    <>
      <input type="text" placeholder={placeholder} {...props} className={cn(styles.input, className, { [styles.error]: error })} />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </>
  );
};