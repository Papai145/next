'use client';
import { JSX, useState } from 'react';
import { Like } from '../likes/Like';
import { LikeWithNumberProps } from './Like.props';


export const LikeWithNumber = ({likes}: LikeWithNumberProps): JSX.Element => {
  const[like,setLike] = useState<number>(Number(likes));
 const handleLike = async(likeFromChild:number):Promise<undefined>=>{
    try{

      const response = await fetch('https://jsonplaceholder.typicode.com/posts/:id',{
        method:'PATCH'
      });
            
      if (!response.ok) throw new Error("Ошибка при обновлении лайка");
      setLike(likeFromChild);
    }catch(error){
      console.error("Ошибка:", error);
    }
  };
  return (
    <div>
        <Like size='small' likes={like} likeFunction={handleLike}></Like>
    </div>
  );
};