'use client';
import { JSX, useState } from 'react';
import style from './Card.module.css';
import cn from 'classnames';
import { CardProps } from './Card.props';
import Image from 'next/image';
import { DescriptionCourse } from '../descriptionCourse/DescriptionCourse';
import { Like } from '../likes/Like';
import { H } from '../H/H';
import Arrow from './arrow.svg';



export const Card = ({logo,typeCourses,dateAdd,countLike,minutes}: CardProps): JSX.Element => {
  const[like,setLike] = useState<number>(Number(countLike));
  const handleLike = async(likeFromChild:number):Promise<undefined>=>{
    try{

      const response = await fetch('https://jsonplaceholder.typicode.com/posts/:id',{
        method:'PATCH'
      });
            
      if (!response.ok) throw new Error("Ошибка при обновлении лайка");
      console.log('запрос направлен');
      
      setLike(likeFromChild);
    }catch(error){
      console.error("Ошибка:", error);
    }
  };

  return (
    <div className={style.card}>
  
      <Image className={style.card_images} src = {logo} alt = "logo"  />
      <div className={style.card_content}>
        <div>
        <DescriptionCourse typeCourses={typeCourses} dateAdd ={dateAdd} ></DescriptionCourse>
        <Like size='small' likes={like} likeFunction={handleLike}></Like>
        </div>
        <H size='s'>Как работают гриды</H>
        <div className={style.card_text}>Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..</div>
      </div>
      <div className={style.card_footer}>
        <span>{minutes} минуты</span>
        <a href="">Читать <Arrow/></a>
      </div>
    </div>
  );
};