
import { Card } from "@/components/cart/Card";
import { DescriptionCourse } from "@/components/descriptionCourse/DescriptionCourse";
import { Like } from "@/components/likes/Like";
import { JSX } from "react";
import cart from './logo.png';
import style from './page.module.css';

const demoData = [
  {logo:cart,typeCourses:'Front-end',dateAdd :'1 Month Ago',countLike:4,minutes:'3'},
  {logo:cart,typeCourses:'Front-end',dateAdd :'1 Month Ago',countLike:4,minutes:'3'},
  {logo:cart,typeCourses:'Front-end',dateAdd :'1 Month Ago',countLike:4,minutes:'3'},
  {logo:cart,typeCourses:'Front-end',dateAdd :'1 Month Ago',countLike:4,minutes:'3'},
  {logo:cart,typeCourses:'Front-end',dateAdd :'1 Month Ago',countLike:4,minutes:'3'},
]

export default function Home():JSX.Element {
  return (
    <div className={style.cards}>
        {demoData.map((el,index)=>{
      return <Card key={`${index}-${el.dateAdd}`} logo={el.logo} typeCourses={el.typeCourses} dateAdd={el.dateAdd} countLike={el.countLike} minutes={el.minutes}></Card>
     })}

  
    </div>
  );
}
