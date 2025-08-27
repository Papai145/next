import { JSX } from "react";
import Style from './post.module.css';
import {  getPost } from "@/api/getPost";
import { H } from "@/components/H/H";
import { DescriptionCourse } from "@/components/descriptionCourse/DescriptionCourse";
import LogoPost from './Logo.svg';
import styles from './post.module.css';
import cn from 'classnames';
import { Like } from "@/components/likes/Like";
import { getComments } from "@/api/getComments";
import { Comments } from "@/components/comments/Comments";

const array = Array.from({length: 10}, (_, i) => String(i));

export async function generateStaticParams():Promise<{alias:string}[]>{
	return array.map(postId=>({alias:postId}));
}
  

export default async function PagePost({ params }: { params: Promise <{alias: string }> }):Promise<JSX.Element> {
  
 const  {alias} = await params;
const post = await getPost(alias);
const comments = await getComments(alias);
 return (
  <>
  <div className={styles.post}>
    <H size="l" className={styles.post__title1}>{post.title}</H>
    <div className={styles.post__description}>
        <DescriptionCourse className={styles.description} typeCourses="Front-end" dateAdd="1 месяц назад" duration="3 минуты" ></DescriptionCourse>
  <Like likes={4} size={"small"}></Like>
    </div>

  <LogoPost className = {styles.post__svg} ></LogoPost>
    <p className={cn(styles.post__content, "text")}>
    {post?.body ? post.body.repeat(5) : "Текст отсутствует"}
    </p>
  <H size="m" className={styles.post__title2}>{post.title}</H>
    <p className={styles.post__content}>
    {post?.body ? post.body.repeat(2  ) : "Текст отсутствует"  }
    </p>

    <div className={styles.post__likes}>
      <span >Понравилось? Жми</span>
      <Like size="big" likes={4}></Like>
    </div>
  </div>
  <div >
    <H size="m" className={styles.comments__title}>Коментарии</H>
    {
      comments.map((el)=>{
        return <Comments key={el.id} name={el.name} email={el.email} comment={el.body}></Comments>;
      })
    }

  </div>
    </>
  );

}

