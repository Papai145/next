import { API } from '@/app/api';

interface Comments {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string
}

export async function getComments(id: string): Promise<Comments[]> {
	const res = await fetch(`${API.comments}?postId=${id}`, {
		method: 'GET',
		headers: new Headers({ 'content-type': 'application/json' })
	});
	return res.json();
}