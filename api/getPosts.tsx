import { API } from "@/app/api";
import { Post } from "@/interface/post.interface";

export async function getPosts():Promise<Post[]>{	
	
	const res = await fetch(`${API.posts}?_limit=10`,{
		method:'GET',
		headers: new Headers({"content-type":"application/json"})
	});

	
	return res.json();
}