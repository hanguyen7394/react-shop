import HomeTopProduct from "./HomeTopProduct";
import HomeIntro from "./HomeIntro";
import HomeDealOutlet from "./HomeDealOutlet";
import HomeBrand from "./HomeBrand";
import HomeCategoryProduct from "./HomeCategoryProduct";
import HomeSocial from "./HomeSocial";
import HomeIconBox from "./HomeIconBox";

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
