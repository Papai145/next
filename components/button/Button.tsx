import cn from 'classnames';
import { JSX } from 'react';
import { ButtonProps } from './Button.props';

export const Button = ({nameAction,className}:ButtonProps):JSX.Element=>{

	return(
		<button className={cn(className)}  >{nameAction}</button>
	);
};
