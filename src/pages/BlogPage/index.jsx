import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { PATHS } from '../../constant/paths';
import BlogList from './BlogList';
import Pagination from '../../components/Pagination';
import BlogSearch from './BlogSearch';
import BlogCategory from './BlogCategory';
import BlogPopular from './BlogPopular';
// import BlogAds from './BlogAds';
import BlogTag from './BlogTag';
import useBlogPage from './useBlogPage';

const BlogPage = () => {
  const { blogListProps, paginationProps, blogCategoryProps, blogTagProps, blogPopularProps } = useBlogPage();

  return (
    <main className="main">
      <div className="page-header text-center" style={{ backgroundImage: 'url("/assets/images/page-header-bg.jpg")' }}>
        <div className="container">
          <h1 className="page-title">Blog</h1>
        </div>
      </div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={PATHS.HOME}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isActive>Blog</Breadcrumb.Item>
      </Breadcrumb>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <BlogList {...blogListProps} />
              <Pagination {...paginationProps} />
            </div>
            <aside className="col-lg-3">
              <div className="sidebar">
                <BlogSearch />
                <BlogCategory {...blogCategoryProps} />
                <BlogPopular {...blogPopularProps} />
                {/* <BlogAds /> */}
                <BlogTag {...blogTagProps} />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
