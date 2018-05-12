import React, { Children, ReactElement } from 'react';
import styled from 'styled-components';

const Grid = styled.ul`
  display: grid;
  list-style: none;
  padding: 0;
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
`;

const ProductGrid = ({ children }) => (
  <Grid>
    {Children.map(children, (child: ReactElement<any>) => (
      <li>{child}</li>
    ))}
  </Grid>
);

export default ProductGrid;
