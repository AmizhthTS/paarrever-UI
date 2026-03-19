import { Route, Routes } from 'react-router-dom';
import { Loader, Notification, ScrolltoTop } from '../components';
import { useSelector } from 'react-redux';
import {
  AboutPage,
  ContactPage,
  HomePage,
  LandingPage,
  PaarPassportPage,
  PageNotFound,
  ProductPage,
  SesstionTimeout,
  StorePage,
  UnderMaintenance,
  UnSusbcribe
} from '../pages';
import AuthRoute from './AuthRoute';
import AdminRoute from './AdminRoute';
import { Privacypolicy, TermsConditions } from '../sections';
const RouteConfig = () => {
  const isLoading = useSelector((state) => state?.loader?.isLoading ?? false);
  const notificationResp = useSelector(
    (state) => state?.notification?.notificationData ?? null
  );
  return (
    <>
      <Loader isLoading={isLoading} />
      <Notification {...notificationResp} />
      <ScrolltoTop />
      <Routes>
        {AdminRoute()}
        {AuthRoute()}
        <Route path="/" element={<LandingPage />}>
          <Route index element={<HomePage />} />
          <Route path="categories" element={<ProductPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="store-locator" element={<StorePage />} />
          <Route path="paarr-passport" element={<PaarPassportPage />} />
          <Route path="newsletter/unsubscribe" element={<UnSusbcribe />} />
          <Route path="privacy-policy" element={<Privacypolicy />} />
          <Route path="terms-conditions" element={<TermsConditions />} />
          <Route path="404" element={<PageNotFound />} />
          <Route path="under-maintenance" element={<UnderMaintenance />} />
          <Route path="sesstion-timeout" element={<SesstionTimeout />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouteConfig;
