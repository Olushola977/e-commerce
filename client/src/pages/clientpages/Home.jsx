import React from 'react';
import Carousel from 'components/clientcomponents/Carousel';
import Categories from 'components/clientcomponents/Categories';
import Products from 'components/clientcomponents/Products';
import NewsLetter from 'components/clientcomponents/NewsLetter';

const Home = () => {
  return (
    <>
        <Carousel />
        <Categories />
        <Products />
        <NewsLetter />
    </>
  )
}

export default Home