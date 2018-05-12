import React from 'react';
import withData from 'hoc/withData';
import Page from 'components/general/Page';
import Products from 'components/containers/home/Products';

const Home = () => (
  <Page>
    <Products />
  </Page>
);

export default withData(Home);
