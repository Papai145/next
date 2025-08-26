import { JSX } from "react";
import Style from './post.module.css';
import {  getPost } from "@/api/getPost";
import { H } from "@/components/H/H";
import { DescriptionCourse } from "@/components/descriptionCourse/DescriptionCourse";
import { LikeWithNumber } from "@/components/likeWithNumber/LikeWithNumber";
import LogoPost from './Logo.svg';
import styles from './post.module.css';
import cn from 'classnames';

const array = Array.from({length: 10}, (_, i) => String(i));

export async function generateStaticParams():Promise<{alias:string}[]>{
	return array.map(postId=>({alias:postId}));
}
  

export default async function PagePost({ params }: { params: Promise <{alias: string }> }):Promise<JSX.Element> {
  
 const  {alias} = await params;
const result = await getPost(alias);
  
 return (
    <div className={styles.post}>
  <H size="l">{result.title}</H>
  <div className={styles.post__description}>
      <DescriptionCourse className={styles.description} typeCourses="Front-end" dateAdd="1 месяц назад" duration="3 минуты" ></DescriptionCourse>
<LikeWithNumber likes={4}></LikeWithNumber>
  </div>

<LogoPost className = {styles.post__svg} ></LogoPost>
  <p className={cn(styles.post__content, "text")}>
  {result?.body ? result.body.repeat(5) : "Текст отсутствует"}
  </p>
<H size="m">{result.title}</H>
  <p className={styles.post__content}>
  {result?.body ? result.body.repeat(2  ) : "Текст отсутствует"  }
  </p>
    </div>
  );

}

