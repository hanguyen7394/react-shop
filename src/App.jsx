import { message } from 'antd';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComponentLoading from './components/ComponentLoading';
import { PATHS } from './constant/paths';
import MainLayout from './layout/MainLayout';
import { handleGetProfile } from './reducers/authReducer';
import { handleGetCart } from './reducers/cartReducer';
import tokenMethod from './utils/token';
const CheckoutSuccessPage = lazy(() => import('./pages/CheckoutSuccessPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const Page404 = lazy(() => import('./pages/Page404'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));
const PaymentMethodsPage = lazy(() => import('./pages/PaymentMethodsPage'));
const PolicyPage = lazy(() => import('./pages/PolicyPage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const ReturnsPage = lazy(() => import('./pages/ReturnsPage'));
const ShippingPage = lazy(() => import('./pages/ShippingPage'));
const MyAccount = lazy(() => import('./pages/DashboardPage/MyAccount'));
const MyOrder = lazy(() => import('./pages/DashboardPage/MyOrder'));
const MyAddress = lazy(() => import('./pages/DashboardPage/MyAddress'));
const MyWishlist = lazy(() => import('./pages/DashboardPage/MyWishlist'));
const PrivateRoute = lazy(() => import('./components/PrivateRoute'));

function App() {
  const dispatch = useDispatch();
  const { isShowNavbar } = useSelector((state) => state.main);

  message.config({
    top: 80,
    duration: 2,
  });

  useEffect(() => {
    if (isShowNavbar) {
      $('body').addClass('mmenu-active');
    } else {
      $('body').removeClass('mmenu-active');
    }
  }, [isShowNavbar]);

  useEffect(() => {
    if (!!tokenMethod.get()) {
      dispatch(handleGetProfile());
      dispatch(handleGetCart());
    }
  }, []);

  return (
    <Suspense fallback={<ComponentLoading style={{ height: '100vh' }} />}>
      <BrowserRouter>
        <Routes>
          <Route path={PATHS.HOME} element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path={PATHS.ABOUT} element={<AboutPage />} />
            <Route path={PATHS.BLOG.INDEX} element={<BlogPage />} />
            <Route path={PATHS.BLOG.DETAIL} element={<BlogDetailPage />} />
            <Route path={PATHS.CART} element={<CartPage />} />
            <Route path={PATHS.CONTACT} element={<ContactPage />} />
            <Route path={PATHS.FAQ} element={<FaqPage />} />
            <Route path={PATHS.PAYMENT_METHODS} element={<PaymentMethodsPage />} />
            <Route path={PATHS.POLICY} element={<PolicyPage />} />
            <Route path={PATHS.PRODUCT.INDEX} element={<ProductPage />} />
            <Route path={PATHS.PRODUCT.DETAIL} element={<ProductDetailPage />} />
            <Route path={PATHS.RETURNS} element={<ReturnsPage />} />
            <Route path={PATHS.SHIPPING} element={<ShippingPage />} />

            <Route redirectPath={PATHS.HOME} element={<PrivateRoute />}>
              <Route path={PATHS.DASHBOARD.INDEX} element={<DashboardPage />}>
                <Route index element={<MyAccount />} />
                <Route path={PATHS.DASHBOARD.ORDER} element={<MyOrder />} />
                <Route path={PATHS.DASHBOARD.ADDRESS} element={<MyAddress />} />
                <Route path={PATHS.DASHBOARD.WISHLIST} element={<MyWishlist />} />
              </Route>
              <Route path={PATHS.CHECKOUT} element={<CheckoutPage />} />
              <Route path={PATHS.CHECKOUT_SUCCESS} element={<CheckoutSuccessPage />} />
            </Route>
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
