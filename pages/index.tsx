import React from 'react';
import withData from 'hoc/withData';
import Products from 'components/containers/home/Products';

const Home = () => (
  <div>
    <h1>The Moon up Above</h1>
    <Products />
  </div>
);

export default withData(Home);
