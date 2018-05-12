import React from 'react';

/**
 * A generic 'HTML' element that will render out raw markup.
 */
const HTML: React.SFC<PropDef> = ({ html, tag }) => {
  const Component = tag;
  return <Component dangerouslySetInnerHTML={{ __html: html }} />
};

interface PropDef {
  // Markup
  html: string;
  // The tag/container for the markup
  tag?: 'div'|'span'|'script';
}

export default HTML;
