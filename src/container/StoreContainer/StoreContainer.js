import React from 'react';
import { StoreBanner, StoreLocaterList, StoreSpecial } from '../../sections';

const StoreContainer = () => {
  return (
    <>
      <StoreBanner />
      {/* <StoreNearby /> */}
      <StoreLocaterList />
      <StoreSpecial />
    </>
  );
};

export default StoreContainer;
