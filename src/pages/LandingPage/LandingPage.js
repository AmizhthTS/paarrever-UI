import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../../sections';
import { ParallaxProvider } from 'react-scroll-parallax';
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <ParallaxProvider>
        <Outlet></Outlet>
      </ParallaxProvider>
      <Footer />
    </>
  );
};

export default LandingPage;
