'use client';
import type { JSX } from 'react';
import { useMemo } from 'react';
import styles from './Card.module.css';
import type { CardProps } from './Card.props';
import Image from 'next/image';
import { DescriptionCourse } from '../descriptionCourse/DescriptionCourse';
import { H } from '../H/H';
import Arrow from './arrow.svg';
import Link from 'next/link';
import { truncateText } from '@/utils/truncateText';
import { Like } from '../likes/Like';

export const Card = ({ id, logo, title, body, typeCourses, dateAdd, countLike, minutes }: CardProps): JSX.Element => {
  const truncatedTitle = useMemo(() =>
    truncateText(title, 23), [title]);
  const truncatedBody = useMemo(() =>
    truncateText(body, 100), [body]);
  return (
    <div className={styles.card}>

      <Image className={styles.card_images} src={logo} alt="logo" priority />
      <div className={styles.card_content}>
        <div>
          <DescriptionCourse typeCourses={typeCourses} dateAdd={dateAdd} showLastBullet={'hide-last'}></DescriptionCourse>
          <Like likes={countLike} size={'small'}></Like>
        </div>
        <H size='s'>{truncatedTitle}</H>
        <div className={styles.card_text}>{truncatedBody}</div>
      </div>
      <div className={styles.card_footer}>
        <span>{minutes} минуты</span>
        <Link href={`post/${id}`}>
          Читать <Arrow />

        </Link>
      </div>
    </div>
  );
};