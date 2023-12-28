import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import useMutation from '../../hooks/useMutation';
import blogService from '../../services/blogService';
import useDebounce from '../../hooks/useDebounce';
import useQuery from '../../hooks/useQuery';
import queryString from 'query-string';

const BLOG_LIMIT = 6;

const useBlogPage = () => {
  const { search } = useLocation();
  const queryObj = queryString.parse(search);
  let [_, setSearchParams] = useSearchParams();

  const { data: blogData, execute: getBlogList, loading: loadingBlog } = useMutation(blogService.getBlogs);
  const { blogs, pagination } = blogData || {};
  const blogDebounce = useDebounce(loadingBlog, 300);
  const popularBlogs = blogs?.filter((blog) => blog.isPopular === true);

  const { data: categoryData } = useQuery(blogService.getCategories);
  const categories = categoryData?.blogs || [];

  const { data: tagData } = useQuery(blogService.getTags);
  const tags = tagData?.blogs || [];

  useEffect(() => {
    const newQueryString = queryString.stringify({
      ...queryObj,
      limit: BLOG_LIMIT,
    });
    getBlogList(`?${newQueryString}`);
  }, [search]);

  const updateQueryString = (newQueryObj) => {
    const newQueryString = queryString.stringify({
      ...newQueryObj,
      limit: BLOG_LIMIT,
    });

    setSearchParams(new URLSearchParams(newQueryString));
  };

  const handleChangePage = (e, pageNumber) => {
    e.preventDefault();
    updateQueryString({
      ...queryObj,
      page: pageNumber,
      stopSrolling: false,
    });
  };

  const handleChangeCategory = (category) => {
    updateQueryString({ ...queryObj, category, page: 1, stopSrolling: true });
  };

  const handleChangeTag = (tag) => {
    updateQueryString({ ...queryObj, tag, page: 1, stopSrolling: true });
  };

  const blogListProps = {
    blogs,
    blogDebounce,
  };

  const paginationProps = {
    ...pagination,
    handleChangePage,
  };

  const blogCategoryProps = {
    categories,
    handleChangeCategory,
  };

  const blogTagProps = {
    tags,
    handleChangeTag,
  };

  const blogPopularProps = {
    popularBlogs,
  };

  return {
    blogListProps,
    paginationProps,
    blogCategoryProps,
    blogTagProps,
    blogPopularProps,
  };
};

export default useBlogPage;
