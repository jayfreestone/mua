import { HttpLink } from 'apollo-link-http';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const config = {
  link: new HttpLink({
    uri: publicRuntimeConfig.parsed.SHOPIFY_STOREFRONT_ENDPOINT,
    headers: {
      'X-Shopify-Storefront-Access-Token': publicRuntimeConfig.parsed.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
  })
};

export default config;
