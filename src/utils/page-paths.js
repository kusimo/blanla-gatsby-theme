const postPagePath = page => (page <= 1 ? '/blog/' : `/blog/page/${page}/`);
const postBlogPath = page => (page <= 1 ? '/blog/' : `/blog/page/${page}/`);
const topPostsPagePath = page => (page <= 1 ? '/top/' : `/top/page/${page}/`);

const tagPagePath = (tagSlug, page) => (page <= 1 ? tagSlug : `${tagSlug}page/${page}/`);

const tagBlogPath = (tagSlug, page) => (page <= 1 ? tagSlug : `${tagSlug}blog/${page}/`);

module.exports = {
  postPagePath,
  postBlogPath,
  topPostsPagePath,
  tagPagePath,
  tagBlogPath
};
