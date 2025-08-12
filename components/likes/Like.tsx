import { JSX } from 'react';
import LikeBig from './likeBig.svg';
import LikeSmall from './likeSmall.svg';
import styles from './Like.module.css';
import { LikeProps } from './Like.props';

const iconComponents = {
  small: LikeSmall,
  big: LikeBig
};

export const Like = ({ size, children, className }: LikeProps): JSX.Element => {
  const IconComponent = iconComponents[size];

  return (
	  <div className={styles.likes}>
		{size === 'small' && children!==undefined && (
			<span>{children}</span>
		)}
    <button>
		<IconComponent />
    </button>
    </div>
  );
};