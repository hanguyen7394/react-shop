import React from 'react';
import { Link } from 'react-router-dom';

const BlogCategory = ({ categories, handleChangeCategory }) => {
  const _onChangeCategory = (e, idCategory) => {
    e.preventDefault();
    handleChangeCategory(idCategory);
  };

  return (
    <div className="widget widget-cats">
      <h3 className="widget-title">Categories</h3>
      <ul>
        {categories?.map(({ id, name }) => (
          <li key={id}>
            <Link onClick={(e) => _onChangeCategory(e, id)}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogCategory;
