import HomeBrand from './HomeBrand';
import HomeCategoryProduct from './HomeCategoryProduct';
import HomeDealOutlet from './HomeDealOutlet';
import HomeHotProduct from './HomeHotProduct';
import HomeIntro from './HomeIntro';
import HomeServices from './HomeServices';
import HomeSocial from './HomeSocial';
import useHomePage from './useHomePage';

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
  );
};

export default HomePage;
