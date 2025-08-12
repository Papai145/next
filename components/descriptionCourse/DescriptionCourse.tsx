import { JSX } from 'react';
import styles from './descriptionCourse.module.css';
import { DescriptionCourseProps } from './DescriptionCourse.props';


export const DescriptionCourse = ({ typeCourses,dateAdd,duration}: DescriptionCourseProps): JSX.Element => {
 
  return (
    <div className={styles.description_courses}>
	  <div>{typeCourses}</div>
	  <div>{dateAdd}</div>
    {duration &&<div>{duration}</div>}
    </div>

  );
};