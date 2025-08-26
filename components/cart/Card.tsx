'use client';
import { JSX, useMemo, useState } from 'react';
import styles from './Card.module.css';
import { CardProps } from './Card.props';
import Image from 'next/image';
import { DescriptionCourse } from '../descriptionCourse/DescriptionCourse';
import { H } from '../H/H';
import Arrow from './arrow.svg';
import Link from 'next/link';
import { truncateText } from '@/utils/truncateText';
import { LikeWithNumber } from '../likeWithNumber/LikeWithNumber';



export const Card = ({id,logo,title,body,typeCourses,dateAdd,countLike,minutes}: CardProps): JSX.Element => {
  // const[like,setLike] = useState<number>(Number(countLike));
  // const handleLike = async(likeFromChild:number):Promise<undefined>=>{
  //   try{

  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts/:id',{
  //       method:'PATCH'
  //     });
            
  //     if (!response.ok) throw new Error("Ошибка при обновлении лайка");
  //     setLike(likeFromChild);
  //   }catch(error){
  //     console.error("Ошибка:", error);
  //   }
  // };//перенес всю логику лайков в компанент LikeWithNumber
  const truncatedTitle = useMemo(() => 
    truncateText(title, 23), [title]);
  
  const truncatedBody = useMemo(() => 
    truncateText(body, 100), [body]);
  return (
    <div className={styles.card}>
  
      <Image className={styles.card_images} src = {logo} alt = "logo"   priority />
      <div className={styles.card_content}>
        <div>
        <DescriptionCourse typeCourses={typeCourses} dateAdd ={dateAdd} showLastBullet={'hide-last'}></DescriptionCourse>
    <LikeWithNumber likes={countLike}></LikeWithNumber>
        </div>
        <H size='s'>{truncatedTitle}</H>
        <div className={styles.card_text}>{truncatedBody}</div>
      </div>
      <div className={styles.card_footer}>
        <span>{minutes} минуты</span>
        <Link href={`post/${id}`}>
            Читать <Arrow/>
        
        </Link>
      </div>
    </div>
  );
};