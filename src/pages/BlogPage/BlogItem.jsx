import React from 'react';
import { PATHS } from '../../constant/paths';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/format';

const BlogItem = ({name, slug, image, description, author, updatedAt}) => {
  const detailPath = `${PATHS.BLOG.INDEX}/${slug}`;
  return (
    <div className="entry-item col-sm-6">
      <article className="entry entry-grid">
        <figure className="entry-media">
          <Link to={detailPath}>
            <img src={image} alt={name} />
          </Link>
        </figure>
        <div className="entry-body">
          <div className="entry-meta">
            <span>{formatDate(updatedAt, 'll')}</span>
            <span className="meta-separator">|</span>
            <span className="entry-author">
              by {author}
            </span>
          </div>
          <h2 className="entry-title">
            <Link to={detailPath}>{name}</Link>
          </h2>
          <div className="entry-content">
            {/* <div dangerouslySetInnerHTML={{__html: description}}></div> */}
            <Link to={detailPath} className="read-more">
              Read More
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogItem;
