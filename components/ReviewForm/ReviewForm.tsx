'use client';
import { JSX } from "react";
import { ReviewFormProps } from "./ReviewForm.props";
import cn from 'classnames';
import { Input } from "../input/Input";
import { Textarea } from "../textarea/Textarea";
import { Button } from "../button/Button";
import styles from './ReviewForm.module.css';
import { useForm, useWatch } from "react-hook-form";
import { IReviewForm } from "./ReviewForm.interface";	


export const ReviewForm = ({postId,className}:ReviewFormProps):JSX.Element=>{

const {register,control,handleSubmit,formState:{errors}} = useForm<IReviewForm>();
const onSubmit = (data:IReviewForm):void=>{
	console.log(data);
};
	return (
		<form action="" onSubmit={handleSubmit(onSubmit)}>
		<div className={cn(className,styles.review)}>
			<Input {...register('name',{required:{value:true,message:'Зполните имя'}})} placeholder="Имя" className={styles.input} error={errors.name} />
			<Textarea {...register('comment',{required:{value:true,message:'Заполните комментарий'}})}  placeholder="Комментарий" className={styles.textarea} error={errors.comment}/>
			<Button type="submit" nameAction="Отправить" className={styles.button}/>
		</div>
		</form>
	);
};
