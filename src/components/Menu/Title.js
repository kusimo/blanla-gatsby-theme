import React from 'react';
import { Link } from 'gatsby';
import useSiteMetadata from '../Hooks/UsesSteMetadata';

import styles from './Title.module.scss';

const Home = () => {
  const { siteURL, title } = useSiteMetadata();
  return (
    <h1 className={styles['siteTitle']}><Link to='/'>{title}</Link></h1>
  );
}

const Page = () => {
  const { siteURL, title } = useSiteMetadata();
  return (
    <p className={styles['siteTitle']}><Link to='/'>{title}</Link></p>
  );
}

const Title = () => {
  
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const pathName = typeof window !== 'undefined' ? window.location.pathname : '';

  if (pathName === '/') {
    return <Home />
  }

  if (pathName !== '/') {
    return <Page />
  }

};

export default Title;