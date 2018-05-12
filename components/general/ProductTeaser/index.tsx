import React from 'react';
import Placeholder from 'components/general/Placeholder';

const ProductTeaser: React.SFC<Props> = ({
  title,
  price,
}) => (
  <article>
    <Placeholder width={4} height={3} />
    <h3>{title}</h3>
    <span>{price}</span>
  </article>
);

interface Props {
  title: string;
  price: string;
}

export default ProductTeaser;
