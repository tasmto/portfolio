import imageUrlBuilder from '@sanity/image-url';
import { SanityReference } from '@sanity/image-url/lib/types/types';
import client from '../../client';

const GetResourceUrl = (source: SanityReference): any => {
  if (!source) return null;
  return imageUrlBuilder(client).image(source);
};

export default GetResourceUrl;
