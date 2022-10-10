// @flow
import React from 'react';

import Menu from '../Menu';
import MovableSidebarContent from '../MovableSidebarContent';
import Copyright from '../Copyright';
import styles from './Footer.module.scss';

const Footer = () => (
    <div className={styles['footer']}>
      <div className={styles['footer__inner']}>
        <Menu />
        <MovableSidebarContent desktop hideSubscribeForm={true} hideAd={true} />
        <Copyright copyright="Abidemi" />
      </div>
    </div>
);

export default Footer;