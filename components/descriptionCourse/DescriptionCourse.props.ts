import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface DescriptionCourseProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  typeCourses: string;
  dateAdd: string;
  duration?: string;
}
