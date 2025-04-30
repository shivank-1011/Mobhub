import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import FadeInSection from '../components/FadeInSection/FadeInSectio';

const ShopHere = () => {
  return (
    <div>
      <Hero />
      
      <FadeInSection>
        <Popular />
      </FadeInSection>
      
      <FadeInSection>
        <Offers />
      </FadeInSection>
      
      <FadeInSection>
        <NewCollections />
      </FadeInSection>
      
      <FadeInSection>
        <NewsLetter />
      </FadeInSection>
    </div>
  );
};

export default ShopHere
