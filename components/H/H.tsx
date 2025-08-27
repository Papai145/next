import { JSX } from 'react';
import styles from './H.module.css';
import { HProps } from './H.props';
import cn from 'classnames';

const headerTag = {
  's': 'h3',
  'm':'h2',
  'l':'h1'
};

export const H = ({ size,children,className }: HProps): JSX.Element => {
const Tag =  headerTag[size] as keyof JSX.IntrinsicElements;

  return (
    <Tag className={cn(className,{
      [styles.s]:size == 's',
      [styles.m]:size == 'm',
      [styles.s]:size == 's'
    })}>{children}</Tag>
  );
};