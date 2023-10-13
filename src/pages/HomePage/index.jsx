import { Suspense, lazy } from 'react';
import ComponentLoading from '../../components/ComponentLoading';
import useHomePage from './useHomePage';

const HomeHotProduct = lazy(() => import('./HomeHotProduct'));
const HomeIntro = lazy(() => import('./HomeIntro'));
const HomeDealOutlet = lazy(() => import('./HomeDealOutlet'));
const HomeBrand = lazy(() => import('./HomeBrand'));
const HomeCategoryProduct = lazy(() => import('./HomeCategoryProduct'));
const HomeSocial = lazy(() => import('./HomeSocial'));
const HomeServices = lazy(() => import('./HomeServices'));

const HomePage = () => {
  const {
    hotProductProps,
    categoryProductProps,
    introProductProps,
    brandProps,
    dealOutletProps,
    serviceProps,
    getDealProps,
  } = useHomePage();

  return (
    <Suspense fallback={<ComponentLoading />}>
      <main className="main">
        <HomeIntro {...introProductProps} />

        <HomeHotProduct {...hotProductProps} />

        <div className="mb-7 mb-lg-11" />

        <HomeDealOutlet {...dealOutletProps} />

        <HomeBrand {...brandProps} />

        <div className="container">
          <hr className="mt-3 mb-6" />
        </div>

        <div className="container">
          <hr className="mt-5 mb-6" />
        </div>

        <HomeCategoryProduct {...categoryProductProps} />

        <div className="container">
          <hr className="mt-5 mb-0" />
        </div>

        <HomeServices {...serviceProps} />

        <HomeSocial {...getDealProps} />
      </main>
    </Suspense>
  );
};

export default HomePage;
