import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import { DescriptionCourseProps } from "../descriptionCourse/DescriptionCourse.props";

export interface CardProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  logo: string;
  typeCourses: string;
  dateAdd: string;
  countLike: string;
  minutes: string;
  // typeCourses: string;
  // dateAdd: string;
  // duration?: string;
  // size: "small";
  // countLikes?: string;
  // sizeHeader: "s";
  // text: string;
  // durationCourses: number;
  // textLink: "Читать";
}
