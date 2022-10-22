'use strict';

module.exports = {
  url: 'https://blanla.com',
  title: 'blanla.com',
  subtitle: 'Frontend Web Developer. I blog about web development.',
  copyright: 'Copyright © 2022 Abidemi Kusimo',
  postsPerPage: 8,
  googleAnalyticsId: 'UA-58664433-1',
  menu: [
    {
      label: 'Blog',
      path: '/blog/',
    },
    {
      label: 'Tags',
      path: '/tags/',
    },
    {
      label: 'About',
      path: '/about/',
    },
    {
      label: 'Contact',
      path: '/contact/',
    },
  ],
  author: {
    name: 'Abidemi Kusimo',
    photo: '/photo2.jpg',
    photoLarge: '/photo2-large.jpg',
    bio:
      'Frontend Web Developer. I blog about <a href="/tag/web-development/">web development</a>, and <a href="/tags/">more topics</a>.',
    contacts: {
      email: 'askusimo@gmail.com',
      twitter: 'abidemikusimo',
      github: 'kusimo',
      rss: '/rss.xml',
    },
  },
  tags: [
    {
      label: 'JavaScript',
      path: '/tag/javascript',
    },
    {
      label: 'Python',
      path: '/tag/python/',
    },
    {
      label: 'Shopify',
      path: '/tag/shopify/',
    },
    {
      label: 'React',
      path: '/tag/react/',
    },
    {
      label: 'Web Development',
      path: '/tag/web-development/',
    },
  ],
  previewImage: '/preview.png',
};
