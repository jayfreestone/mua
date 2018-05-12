import React from 'react';
import * as R from 'ramda';
import gql from 'graphql-tag';
import { compose, mapProps } from 'recompose';
import { graphql } from 'react-apollo';
import ProductTeaser from 'components/general/ProductTeaser';

const Products = ({ products }) => (
  <div>
    {products.map(({ title, price }) => (
      <ProductTeaser
        title={title}
        price={price}
      />
    ))}
  </div>
);

Products.defaultProps = {
  products: [],
};

export default compose(
  graphql(
    gql`
      {
        shop {
          products(first: 20) {
            edges {
              node {
                id
                title
                handle
                variants(first: 250) {
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                  }
                  edges {
                    node {
                      id
                      title
                      selectedOptions {
                        name
                        value
                      }
                      image {
                        src
                      }
                      price
                    }
                  }
                }
                images(first: 250) {
                    edges {
                      node {
                        transformedSrc
                      }
                    }
                  }
              }
            }
          }
        }
      }
    `,
    { name: 'products-query' },
  ),
  mapProps(R.applySpec({
    products: R.pipe(
      R.path(['products-query', 'shop', 'products', 'edges']),
      R.map(
        R.pipe(
          R.prop('node'),
          R.applySpec({
            title: R.prop('title'),
            handle: R.prop('handle'),
            price: R.path(['variants', 'edges', 0, 'node', 'price']),
          }),
        ),
      ),
    ),
  })),
)(Products);
