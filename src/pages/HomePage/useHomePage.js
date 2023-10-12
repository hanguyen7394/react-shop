import useMutation from '../../hooks/useMutation';
import useDebounce from '../../hooks/useDebounce';
import useQuery from '../../hooks/useQuery';
import productService from '../../services/productService';
import { owlCarousels } from '../../utils/common';
import { useEffect, useState } from 'react';

const useHomePage = () => {
  //API Handling
  const { data: productData } = useQuery(productService.getProducts);
  const { data: categoryData } = useQuery(productService.getCategories);

  const { products } = productData || {};
  const categories = categoryData?.products || [];

  const [selectedCatSlug, setSelectedCatSlug] = useState('all');

  const productFeatured = products?.filter((product) => product.featured);
  const productIntro = productFeatured?.slice(0, 3);
  const productOnSale = products?.filter((product) => product.onSale);
  const productTopRated = products?.filter((product) => product.topRated);
  const productCategory =
    selectedCatSlug === 'all' ? products : products?.filter((product) => product?.category?.slug === selectedCatSlug);

  const handleChangeCatSlug = (catSlug) => {
    setSelectedCatSlug(catSlug);
  };

  const introProductProps = {
    productIntro
  }

  const hotProductProps = {
    productFeatured,
    productOnSale,
    productTopRated,
  };

  const categoryProductProps = {
    categories: [{ id: 'all', name: 'All', slug: 'all' }, ...categories],
    handleChangeCatSlug,
    productCategory,
    selectedCatSlug,
  };

  return {
    introProductProps,
    hotProductProps,
    categoryProductProps,
  };
};

export default useHomePage;
