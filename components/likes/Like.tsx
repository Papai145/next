'use client';
import { JSX, useState } from 'react';
import LikeBig from './likeBig.svg';
import LikeSmall from './likeSmall.svg';
import styles from './Like.module.css';
import { LikeProps } from './Like.props';
import cn from 'classnames';

const iconComponents = {
  small: LikeSmall,
  big: LikeBig
};

export const Like = ({ size, likes,likeFunction,children, className }: LikeProps): JSX.Element => {
const IconComponent = iconComponents[size];
const[isLiked,setIsLiked] = useState<boolean>(false);

  return (
    <button 
      onClick={()=>{  
      setIsLiked(!isLiked);
      const statusLike =isLiked?likes-1:likes + 1;
      likeFunction(statusLike);
    }}
      className={cn(styles.like,{
        [styles['like--small']]:size == 'small',
        [styles['like--big']]:size == 'big',
        [styles['like--small--active']]:size == 'small' && isLiked,
        [styles['like--big--active']]:size == 'big' && isLiked,
      })}
    >
      {size === 'small' && likes !== undefined && <span className={styles.like_count}>{likes}</span>}
      <IconComponent className = {styles.like_icon}/>
    </button>
  );
};