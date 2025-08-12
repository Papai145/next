import { JSX } from 'react';
import style from './Card.module.css';
import cn from 'classnames';
import { CardProps } from './Card.props';
import Image from 'next/image';
import { DescriptionCourse } from '../descriptionCourse/DescriptionCourse';
import { Like } from '../likes/Like';
import { H } from '../H/H';
import Arrow from './arrow.svg';



export const Card = ({logo,typeCourses,dateAdd,countLike,minutes}: CardProps): JSX.Element => {


  return (
    <div className={style.container}>
  
      <Image src = {logo} alt = "logo"  />
      <div className={style.content}>
        <div>
        <DescriptionCourse typeCourses={typeCourses} dateAdd ={dateAdd} ></DescriptionCourse>
        <Like size='small'>{countLike}</Like>
        </div>
        <H size='s'>Как работают гриды</H>
        <div className={style.text_content}>Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..</div>
      </div>
      <div className={style.footer_card}>
        <span>{minutes} минуты</span>
        <a href="">Читать <Arrow/></a>
      </div>
    </div>
  );
};