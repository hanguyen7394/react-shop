import { useEffect, useState } from 'react';
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
  let [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(Array.isArray(queryObj?.category) ? queryObj?.category : [queryObj?.category] || []);
  const minPrice = queryObj?.minPrice || 0;
  const maxPrice = queryObj?.maxPrice || 1000;
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

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
    getProductList(`?${searchParams}`);
  }, [searchParams]);

  useEffect(() => {
    updateQueryString({
      ...queryObj,
      stopSrolling: true,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      category: selectedCategories,
      page: 1
    });
  }, [selectedCategories, priceRange]);

  const updateQueryString = (queryObj) => {
    const newQueryString = queryString.stringify({
      ...queryObj,
      limit: PRODUCT_LIMIT,
    });

    setSearchParams(new URLSearchParams(newQueryString));
  };

  const onPageChange = (e, pageNumber) => {
    e.preventDefault();
    updateQueryString({
      ...queryObj,
      page: pageNumber,
    });
  };

  const getActiveSort = () => {
    return (
      Object.values(SORT_OPTIONS).find((option) => {
        option.queryObj.order === queryObj.order && option.queryObj.orderBy === queryObj.orderBy;
      })?.value || SORT_OPTIONS.popularity.value
    );
  };

  const onChangeSort = (sortType) => {
    const sortQueryObj = SORT_OPTIONS[sortType].queryObj;
    if (sortQueryObj) {
      updateQueryString({
        ...queryObj,
        ...sortQueryObj,
        page: 1,
      });
    }
  };

  const productToolboxProps = {
    getActiveSort,
    onChangeSort,
    products,
    pagination,
  };

  const productListProps = {
    products,
    productDebounce,
  };

  const productFilterProps = {
    categories,
    selectedCategories,
    setSelectedCategories,
    priceRange,
    setPriceRange,
  };

  const paginationProps = {
    ...pagination,
    onPageChange,
  };

  return {
    productToolboxProps,
    productListProps,
    productFilterProps,
    paginationProps,
  };
};

export default useProductPage;
