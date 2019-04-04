import React from 'react';
import Comments from './Comments';
import Content from './Content';
import Tags from './Tags';
import ReadMore from './ReadMore';
import styles from './Post.module.scss';

import Author from '../Author';
import SubscribeForm from '../SubscribeForm';
import Share from '../Share';
import Discuss from '../Discuss';

const Post = ({ post, prevPost, nextPost }) => {
  const {
    tags,
    title,
    date,
    description,
    slug,
    discussLinkTwitter,
    discussLinkHN,
    discussLinkReddit,
  } = post.frontmatter;

  const { html } = post;
  const { tagSlugs } = post.fields;

  return (
    <div className={styles['post']}>
      <div className={styles['post__content']}>
        <Content body={html} title={title} subtitle={description} date={date} />
      </div>

      <div className={styles['post__subscribeForm']}>
        <SubscribeForm signupSource={`Post:${slug}`} large />
      </div>

      <div className={styles['post__footer']}>
        <Tags tags={tags} tagSlugs={tagSlugs} />
        <ReadMore prevPost={prevPost} nextPost={nextPost} />
        <div className={styles['post__authorContainer']}>
          <Author showBio />
        </div>
        <Share url={slug} title={title} />
        <Discuss twitter={discussLinkTwitter} hn={discussLinkHN} reddit={discussLinkReddit} />
      </div>

      <div className={styles['post__comments']}>
        <Comments />
      </div>
    </div>
  );
};

export default Post;
