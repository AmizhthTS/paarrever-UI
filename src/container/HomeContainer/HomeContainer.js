import { Parallax } from 'react-scroll-parallax';
import { BannerSection, CategorySection } from '../../sections';

const HomeContainer = () => {
  return (
    <div>
      {/* <Parallax speed={-20}> */}
      <BannerSection />
      {/* </Parallax> */}
      <Parallax speed={10}>
        <CategorySection />
      </Parallax>
    </div>
  );
};

export default HomeContainer;
