import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import useMutation from '../../hooks/useMutation';
import productService from '../../services/productService';
import useDebounce from '../../hooks/useDebounce';
import useQuery from '../../hooks/useQuery';
import { SORT_OPTIONS } from '../../constant/common';
import queryString from 'query-string';

const PRODUCT_LIMIT = 6;

const useProductPage = () => {
  const { search } = useLocation();
  const queryObj = queryString.parse(search);
  let [_, setSearchParams] = useSearchParams();
  const selectedCategories = Array.isArray(queryObj?.category) ? queryObj?.category : [queryObj?.category] || [];
  const currentPriceRange = [queryObj?.minPrice || 0, queryObj?.maxPrice || 1200];

  const {
    data: productData,
    execute: getProductList,
    loading: loadingProduct,
  } = useMutation(productService.getProducts);
  const { products, pagination } = productData || {};
  const productDebounce = useDebounce(loadingProduct, 300);

  const { data: categoryData } = useQuery(productService.getCategories);
  const categories = categoryData?.products || [];

  useEffect(() => {
    const newQueryString = queryString.stringify({
      ...queryObj,
      limit: PRODUCT_LIMIT
    });
    getProductList(`?${newQueryString}`);
  }, [search]);

  const updateQueryString = (newQueryObj) => {
    const newQueryString = queryString.stringify({
      ...newQueryObj,
      limit: PRODUCT_LIMIT,
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

  const getActiveSort = () => {
    return (
      Object.values(SORT_OPTIONS).find((option) => {
        return option.queryObj.order === queryObj.order && option.queryObj.orderBy === queryObj.orderBy;
      })?.value || SORT_OPTIONS.popularity.value
    );
  };

  const handleChangeSort = (sortType) => {
    const sortQueryObj = SORT_OPTIONS[sortType].queryObj;
    if (sortQueryObj) {
      updateQueryString({
        ...queryObj,
        ...sortQueryObj,
        stopSrolling: true,
        page: 1,
      });
    }
  };

  const handleChangePriceRange = (range) => {
    updateQueryString({
      ...queryObj,
      stopSrolling: true,
      minPrice: range[0],
      maxPrice: range[1],
      page: 1,
    });
  };

  const handleChangeCategory = (category) => {
    updateQueryString({ ...queryObj, category, page: 1, stopSrolling: true });
  };

  const productToolboxProps = {
    getActiveSort,
    handleChangeSort,
    products,
    pagination,
  };

  const productListProps = {
    products,
    productDebounce,
  };

  const productFilterProps = {
    categories,
    currentPriceRange,
    handleChangePriceRange,
    selectedCategories,
    handleChangeCategory,
  };

  const paginationProps = {
    ...pagination,
    handleChangePage,
  };

  return {
    productToolboxProps,
    productListProps,
    productFilterProps,
    paginationProps,
  };
};

export default useProductPage;
