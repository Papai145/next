import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface DescriptionCourseProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  typeCourses: string;
  dateAdd: string;
  showLastBullet?: 'hide-last';
  duration?: string;
  className?: string;
}