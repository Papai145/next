import { DescriptionCourse } from "@/components/descriptionCourse/DescriptionCourse";
import { JSX } from "react";

export default function Home():JSX.Element {
  return (
    <div>
    Главная страница
    <DescriptionCourse typeCourses="fron-end" dateAdd="1 месяц назад" duration="3 минуты"></DescriptionCourse>
    </div>
  );
}
