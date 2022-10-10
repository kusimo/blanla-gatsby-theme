import React from 'react';
import useSiteMetadata from '../Hooks/UsesSteMetadata';

const Home = () => {
  const { siteURL } = useSiteMetadata();
  return (
    <h1>{ siteURL }</h1>
  );
}

const Page = () => {
  const { siteURL } = useSiteMetadata();
  return (
    <p>{ siteURL }</p>
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