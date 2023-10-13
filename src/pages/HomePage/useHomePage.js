import useQuery from '../../hooks/useQuery';
import productService from '../../services/productService';
import { useState } from 'react';
import pageService from '../../services/pageService';
import subscribeService from '../../services/subscribeService';
import useMutation from '../../hooks/useMutation';
import { message } from 'antd';
import { MESSAGE } from '../../constant/message';

const useHomePage = () => {
  //API Handling
  const { data: productData } = useQuery(productService.getProducts);
  const { data: categoryData } = useQuery(productService.getCategories);
  const { data: homeData } = useQuery(() => pageService.getPageDataByName('home'));
  const { execute: dealExecute } = useMutation(subscribeService.subscribeDeal);

  const { products } = productData || {};
  const categories = categoryData?.products || [];
  const brands = homeData?.data?.brands || [];
  const services = homeData?.data?.information || {};

  const [selectedCatSlug, setSelectedCatSlug] = useState('all');

  const productFeatured = products?.filter((product) => product.featured);
  const productIntro = productFeatured?.slice(0, 3);
  const productOnSale = products?.filter((product) => product.onSale);
  const dealProducts = productOnSale?.filter((product) => product.discount > 0)?.slice(0, 3);;
  const productTopRated = products?.filter((product) => product.topRated);
  const productCategory =
    selectedCatSlug === 'all' ? products : products?.filter((product) => product?.category?.slug === selectedCatSlug);

  const handleChangeCatSlug = (catSlug) => {
    setSelectedCatSlug(catSlug);
  };

  const handleSubscribeDeal = (email, callback) => {
    if (email) {
      dealExecute(email, {
        onSuccess: (data) => {
          message.success(MESSAGE.dealSuccess);
          callback?.();
        },
        onFail: (error) => {
          message.error(MESSAGE.error);
        },
      });
    }
  };

  const introProductProps = {
    productIntro,
  };

  const hotProductProps = {
    productFeatured,
    productOnSale,
    productTopRated,
  };

  const dealOutletProps = {
    dealProducts,
  };

  const brandProps = {
    brands,
  };

  const categoryProductProps = {
    categories: [{ id: 'all', name: 'All', slug: 'all' }, ...categories],
    handleChangeCatSlug,
    productCategory,
    selectedCatSlug,
  };

  const serviceProps = {
    services,
  };

  const getDealProps = {
    handleSubscribeDeal,
  };

  return {
    introProductProps,
    hotProductProps,
    dealOutletProps,
    brandProps,
    categoryProductProps,
    serviceProps,
    getDealProps
  };
};

export default useHomePage;
