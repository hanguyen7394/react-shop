import React from 'react';
import { Link } from 'react-router-dom';

const BlogTag = ({ tags, handleChangeTag }) => {
  // const _onChangeTag = (e, idTag) => {
  //   e.preventDefault();
  //   handleChangeTag(idTag);
  // };

  return (
    <div className="widget">
      <h3 className="widget-title">Browse Tags</h3>
      <div className="tagcloud">
        {tags?.map(({ id, name }) => (
          <Link key={id} disabled style={{ pointerEvents: 'none' }}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogTag;
