'use client';
import type { JSX, PropsWithChildren } from 'react';
import { createContext } from 'react';

interface LinkContextType {
	link: string;
}

const LinkContext = createContext<LinkContextType>({ link: '' });

export function LinkProvider({ children }: PropsWithChildren): JSX.Element {
	const link = 'https://ru.pinterest.com/pin/726909196108134079/';
	return (
		<LinkContext.Provider value={{ link }}>
			{children}
		</LinkContext.Provider>
	);
}
export default LinkContext;