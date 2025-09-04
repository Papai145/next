'use client';
import type { JSX } from 'react';
import type { CommentsProps } from './Comments.props';
import styles from './comments.module.css';

export const Comments = ({ name, email, comment }: CommentsProps): JSX.Element => {
  return (
    <>
      <p className={styles.comment__header}>
        <span className={styles.comment__author}>{name}</span>
        <span>•</span>
        <span className={styles.comment_email}>{email}</span>
      </p>
      <p className={styles.comment__content}>{comment}</p>
    </>
  );
};