import { Comments } from "@/components/comments/Comments";
import { DescriptionCourse } from "@/components/descriptionCourse/DescriptionCourse";
import { JSX } from "react";

export default function Home():JSX.Element {
  return (
    <div>
    Главная страница
    
    <Comments name="Sergey Ivanov" email="wcowhjws@ahhcd.eu" comment="Отличная статья,  но не хватает информации о том, как лучше реализовать на гридах более сложные
конструкции, например layout для интернет магазина."></Comments>
    </div>
  );
}
