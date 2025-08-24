'use client';
import { JSX, useContext } from 'react';
import HeaderLink from './header_link.svg';
import styles from './headerLink.module.css';
import LinkContext from '@/context/LinkContext';

export default function HeaderLinkSvg(): JSX.Element { 
 const {link} = useContext(LinkContext);
  return (
    <a href = {link}>
    <button className={styles.header__btn}>
      <HeaderLink/>
    </button>
    </a>
  );
}