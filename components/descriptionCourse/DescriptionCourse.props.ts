import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type showLastBullet = "show-all" | "hide-last";

export interface DescriptionCourseProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  typeCourses: string;
  dateAdd: string;
  showLastBullet?: "hide-last";
  duration?: string;
  className?: string;
}
