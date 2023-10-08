import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PATHS } from './constant/paths';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Page404 from './pages/Page404';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';
import DashboardPage from './pages/DashboardPage';
import FaqPage from './pages/FaqPage';
import PaymentMethodsPage from './pages/PaymentMethodsPage';
import PolicyPage from './pages/PolicyPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ReturnsPage from './pages/ReturnsPage';
import ShippingPage from './pages/ShippingPage';
import MyAccount from './pages/DashboardPage/MyAccount';
import MyOrder from './pages/DashboardPage/MyOrder';
import MyAddress from './pages/DashboardPage/MyAddress';
import MyWishlist from './pages/DashboardPage/MyWishlist';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
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
            <Route path={PATHS.CHECKOUT_SUCCESS} element={<CheckoutPage />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
