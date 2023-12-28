import React from 'react';
import BlogItem from './BlogItem';
import SkeletonLoading from '../../components/SkeletonLoading';
import classNames from 'classnames';
import { Empty } from 'antd';

const BlogList = ({ blogs, blogDebounce }) => {
  return (
    <div className="entry-container max-col-2" data-layout="fitRows">
      {blogDebounce && <SkeletonLoading columns={2} />}
      {blogs?.length && (
        <div
          className={classNames('', {
            'is-loading': blogDebounce,
            'is-loaded': !blogDebounce,
          })}
        >
          {blogs?.map((blog) => (
            <BlogItem key={blog.id} {...blog} />
          ))}
        </div>
      )}
      {!blogDebounce && !blogs?.length && <Empty description="Not found any post" />}
    </div>
  );
};

export default BlogList;
