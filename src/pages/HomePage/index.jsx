import { Suspense, lazy, useEffect, useState } from 'react';
import ComponentLoading from '../../components/ComponentLoading';
import useMutation from '../../hooks/useMutation';
import useDebounce from '../../hooks/useDebounce';
import productService from '../../services/productService';
import { owlCarousels } from '../../utils/common';
import useQuery from '../../hooks/useQuery';

const HomeTopProduct = lazy(() => import('./HomeTopProduct'));
const HomeIntro = lazy(() => import('./HomeIntro'));
const HomeDealOutlet = lazy(() => import('./HomeDealOutlet'));
const HomeBrand = lazy(() => import('./HomeBrand'));
const HomeCategoryProduct = lazy(() => import('./HomeCategoryProduct'));
const HomeSocial = lazy(() => import('./HomeSocial'));
const HomeIconBox = lazy(() => import('./HomeIconBox'));

const HomePage = () => {
  const PRODUCT_QUERY = {
    featured: '?featured=true',
    sale: '?onSale=true',
    rated: '?topRated=true'
  }
  const [selectedTab, setSelectedTab] = useState('featured');
  const {
    data: productTop,
    execute: getProductList,
    loading: loadingProduct,
  } = useMutation(productService.getProducts);
  const { data: categoryData } = useQuery(productService.getCategories);

  const productDebounce = useDebounce(loadingProduct, 300);

  useEffect(() => {
    getProductList(PRODUCT_QUERY[selectedTab]);
    setTimeout(() => {
      owlCarousels();
    }, 300);
  }, [selectedTab]);

  const handleChangeTab = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <Suspense fallback={<ComponentLoading />}>
      <main className="main">
        <HomeIntro />

        <HomeTopProduct products={productTop?.products} handleChangeTab={handleChangeTab} seletedTab={selectedTab} />

        <div className="mb-7 mb-lg-11" />

        <HomeDealOutlet />

        <HomeBrand />

        <div className="container">
          <hr className="mt-3 mb-6" />
        </div>

        <div className="container">
          <hr className="mt-5 mb-6" />
        </div>

        <HomeCategoryProduct categories={categoryData?.products}/>

        <div className="container">
          <hr className="mt-5 mb-0" />
        </div>

        <HomeIconBox />

        <HomeSocial />
      </main>
    </Suspense>
  );
};

export default HomePage;
