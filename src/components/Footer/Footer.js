// @flow
import React from 'react';

import Menu from '../Menu';
import MovableSidebarContent from '../MovableSidebarContent';
import Copyright from '../Copyright';
import styles from './Footer.module.scss';
import DarkModeToggle from '../DarkModeToggle';

const Footer = () => (
    <div className={styles['footer']}>
      <div className={styles['footer__inner']}>
        <Menu />
        <MovableSidebarContent desktop hideSubscribeForm={true} hideAd={true} />
        <div className={styles['dark-mode-toggle']}>
            <DarkModeToggle />
        </div>
        <Copyright copyright="Abidemi" />
      </div>
    </div>
);

export default Footer;