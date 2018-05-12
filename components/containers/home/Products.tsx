import React from 'react';
import * as R from 'ramda';
import gql from 'graphql-tag';
import { compose, mapProps } from 'recompose';
import { graphql } from 'react-apollo';

const Products = ({ products }) => (
  <div>
    {products.map(({ title }) => (
      <h3>{title}</h3>
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
      R.map(R.prop('node')),
    ),
  })),
)(Products);
