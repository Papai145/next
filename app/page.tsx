
import { Card } from "@/components/cart/Card";
import { DescriptionCourse } from "@/components/descriptionCourse/DescriptionCourse";
import { Like } from "@/components/likes/Like";
import { JSX } from "react";
import cart from './logo.png';
import style from './page.module.css';


export default function Home():JSX.Element {
  return (
    <div className={style.cards}>
      <Card logo={cart} typeCourses="Front-end" dateAdd="1 Month Ago" countLike={4} minutes="3"></Card>
      <Card logo={cart} typeCourses="Front-end" dateAdd="1 Month Ago" countLike={4} minutes="3"></Card>
      <Card logo={cart} typeCourses="Front-end" dateAdd="1 Month Ago" countLike={4} minutes="3"></Card>
      <Card logo={cart} typeCourses="Front-end" dateAdd="1 Month Ago" countLike={4} minutes="3"></Card>
      <Card logo={cart} typeCourses="Front-end" dateAdd="1 Month Ago" countLike={4} minutes="3"></Card>
      <Card logo={cart} typeCourses="Front-end" dateAdd="1 Month Ago" countLike={4} minutes="3"></Card>
      <Card logo={cart} typeCourses="Front-end" dateAdd="1 Month Ago" countLike={4} minutes="3"></Card>

    </div>
  );
}
