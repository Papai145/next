import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import { DescriptionCourseProps } from "../descriptionCourse/DescriptionCourse.props";
import { StaticImageData } from "next/image";

export interface CardProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  id: string;
  logo: StaticImageData;
  title: string;
  body: string;
  typeCourses: string;
  dateAdd: string;
  countLike: number;
  minutes: string;
}
