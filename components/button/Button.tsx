import cn from 'classnames';
import type { JSX } from 'react';
import type { ButtonProps } from './Button.props';

export const Button = ({ nameAction, className }: ButtonProps): JSX.Element => {

	return (
		<button className={cn(className)}  >{nameAction}</button>
	);
};