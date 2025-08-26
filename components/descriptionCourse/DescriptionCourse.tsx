import { JSX } from 'react';
import styles from './descriptionCourse.module.css';
import { DescriptionCourseProps } from './DescriptionCourse.props';
import cn from 'classnames';


export const DescriptionCourse = ({ typeCourses,dateAdd,duration,showLastBullet,className}: DescriptionCourseProps): JSX.Element => {
 
  return (
    <div className={cn(className,styles.description_courses)} data-point = {showLastBullet}>
	  <div>{typeCourses}</div>
	  <div>{dateAdd}</div>
    {duration &&<div>{duration}</div>}
    </div>

  );
};