import React from 'react';
import { formatDate } from '../../utils/format';
import { Link } from 'react-router-dom';
import { PATHS } from '../../constant/paths';

const BlogPopular = ({ popularBlogs }) => {
  console.log('popularBlogs :>> ', popularBlogs);
  return (
    <div className="widget">
      <h3 className="widget-title">Popular Posts</h3>
      <ul className="posts-list">
        {popularBlogs?.map(({ id, slug, name, image, updatedAt }) => {
          const detailPath = `${PATHS.BLOG.INDEX}/${slug}`;
          return (
            <li key={id}>
              <figure>
                <Link to={detailPath}>
                  <div className="img-box">
                    <img src={image} alt={name} />
                  </div>
                </Link>
              </figure>
              <div>
                <span>{formatDate(updatedAt, 'll')}</span>
                <h4>
                  <Link to={detailPath}>{name}</Link>
                </h4>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogPopular;
