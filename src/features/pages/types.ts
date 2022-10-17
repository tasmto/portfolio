import {
  ButtonType,
  CodeEmbedType,
  CustomListType,
  IframeEmbedType,
  ImageEmbedType,
  PlainTextType,
  SanitySlug,
  TextImageType,
} from '../portfolio/types';

export type pageType = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: 'page';
  _updatedAt: string;
  body: Array<
    | PlainTextType
    | CodeEmbedType
    | ImageEmbedType
    | IframeEmbedType
    | TextImageType
    | ButtonType
    | CustomListType
  >;
  customSEO: boolean;
  seo: {
    _type: 'customSEO';
    seoDescription: string;
    seoTitle: string;
  };

  slug: SanitySlug;
  title: string;
};
