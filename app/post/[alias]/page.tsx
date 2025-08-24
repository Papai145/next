import { JSX } from "react";
import Style from './post.module.css';
import {  getPost } from "@/api/getPost";


const array = Array.from({length: 10}, (_, i) => String(i));

export async function generateStaticParams():Promise<{alias:string}[]>{
	return array.map(postId=>({alias:postId}));
}
  

export default async function PagePost({ params }: { params: Promise <{alias: string }> }):Promise<JSX.Element> {
 const  {alias} = await params;
const result = await getPost(alias);
 return (
    <div>
<div className={Style.post}>
  <h3 className={Style.post_title}>{result.title}</h3>
  <p className={Style.post_id}>{result.id}</p>
  <p className={Style.post_body}>
   {result.body}
  </p>
</div>
    </div>
  );

}

