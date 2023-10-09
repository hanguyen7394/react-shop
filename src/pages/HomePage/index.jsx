import { Suspense, lazy } from 'react';
import ComponentLoading from '../../components/ComponentLoading';

const HomeTopProduct = lazy(() => import('./HomeTopProduct'));
const HomeIntro = lazy(() => import('./HomeIntro'));
const HomeDealOutlet = lazy(() => import('./HomeDealOutlet'));
const HomeBrand = lazy(() => import('./HomeBrand'));
const HomeCategoryProduct = lazy(() => import('./HomeCategoryProduct'));
const HomeSocial = lazy(() => import('./HomeSocial'));
const HomeIconBox = lazy(() => import('./HomeIconBox'));

const HomePage = () => {
  return (
    <Suspense fallback={<ComponentLoading />}>
      <main className="main">
        <HomeIntro />

        <HomeTopProduct />

        <div className="mb-7 mb-lg-11" />

        <HomeDealOutlet />

        <HomeBrand />

        <div className="container">
          <hr className="mt-3 mb-6" />
        </div>

        <div className="container">
          <hr className="mt-5 mb-6" />
        </div>

        <HomeCategoryProduct />

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
