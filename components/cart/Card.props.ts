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
  logo: StaticImageData;
  typeCourses: string;
  dateAdd: string;
  countLike: number;
  minutes: string;
}
