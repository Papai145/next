'use client';
import type { JSX } from 'react';
import { useState } from 'react';
import LikeBig from './likeBig.svg';
import LikeSmall from './likeSmall.svg';
import styles from './Like.module.css';
import type { LikeProps } from './Like.props';
import cn from 'classnames';

const iconComponents = {
  small: LikeSmall,
  big: LikeBig
};

export const Like = ({ size, likes, children, className }: LikeProps): JSX.Element => {
  const IconComponent = iconComponents[size];
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [like, setLike] = useState<number>(Number(likes));
  const handleLike = async (likeFromChild: number): Promise<undefined> => {
    try {

      const response = await fetch('https://jsonplaceholder.typicode.com/posts/:id', {
        method: 'PATCH'
      });

      if (!response.ok) throw new Error('Ошибка при обновлении лайка');
      setLike(likeFromChild);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };
  return (
    <button
      onClick={() => {
        setIsLiked(!isLiked);
        const changedLikes = isLiked ? like - 1 : like + 1;
        handleLike(changedLikes);
      }}
      className={cn(styles.like, {
        [styles['like--small']]: size == 'small',
        [styles['like--big']]: size == 'big',
        [styles['like--small--active']]: size == 'small' && isLiked,
        [styles['like--big--active']]: size == 'big' && isLiked,
      })}
    >
      {size === 'small' && like !== undefined && <span className={styles.like_count}>{like}</span>}
      <IconComponent className={styles.like_icon} />
    </button>
  );
};