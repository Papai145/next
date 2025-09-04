import { API } from '@/app/api';
import type { Post } from '@/interface/post.interface';

export async function getPost(numberPost: string): Promise<Post> {
	const res = await fetch(`${API.posts}/${numberPost}`, {
		method: 'GET',
		headers: new Headers({ 'content-type': 'application/json' })
	});
	return res.json();
}