
import { Card } from "@/components/cart/Card";
import { JSX } from "react";
import cart from './logo.png';
import style from './page.module.css';
import { getPosts } from "@/api/getPosts";

// const demoData = [
//   {logo:cart,typeCourses:'Front-end',dateAdd :'1 Month Ago',countLike:4,minutes:'3'},
//   {logo:cart,typeCourses:'Front-end',dateAdd :'1 Month Ago',countLike:4,minutes:'3'},
//   {logo:cart,typeCourses:'Front-end',dateAdd :'1 Month Ago',countLike:4,minutes:'3'},
//   {logo:cart,typeCourses:'Front-end',dateAdd :'1 Month Ago',countLike:4,minutes:'3'},
//   {logo:cart,typeCourses:'Front-end',dateAdd :'1 Month Ago',countLike:4,minutes:'3'},
// ];

export default async function Posts():Promise<JSX.Element> {
  const posts = await getPosts();
  
  return (
    <div className={style.cards}>
        {posts.map((el,index)=>{    
      return <Card key={String(el.id)} id={String(el.id)} title = {el.title} body={el.body} logo={cart} typeCourses='Front-end' dateAdd='1 Month Ago' countLike={4} minutes='3'></Card>;
     })}
    </div>
  );
}
