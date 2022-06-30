import { SanityReference } from '@sanity/image-url/lib/types/types';

export type TextImageType = {
  _key: string;
  _type: 'textImage';
  description: string;
  heading?: string;
  image: any;
  textLast: boolean;
  link?: string;
  linkText?: string;
};
export type PlainTextType = {
  _type: 'plainText';
  _key: string;
  heading?: string;
  subheading?: string;
  description: SanityBlockContentType[];
  link?: string;
  linkText?: string;
};
export type IframeEmbedType = {
  _type: 'iframeEmbed';
  _key: string;
  heading?: string;
  subheading?: string;
  description?: string;
  iframeLink: string;
  link?: string;
  linkText?: string;
};
export type ImageEmbedType = {
  _type: 'imageEmbed';
  _key: string;
  heading?: string;
  subheading?: string;
  description?: SanityBlockContentType[];
  image: SanityReferenceType;
  link?: string;
  linkText?: string;
};
export type CodeEmbedType = {
  _key: string;
  _type: 'codeEmbed';
  heading?: string;
  subheading?: string;
  description?: SanityBlockContentType;
  code: {
    _type: 'code';
    code: string;
    language: string;
  };
  link?: string;
  linkText?: string;
};
export type ButtonType = {
  _key: string;
  _type: 'button';
  heading?: string;
  subheading?: string;
  link: string;
  linkText?: string;
};
export type CustomListType = {
  _type: 'customList';
  _key: string;
  heading?: string;
  subheading?: string;
  numbered?: boolean;
  description?: string;
  listItems: string[];
};
export type SanityReferenceType = {
  _type: string;
  asset: SanityReference;
};

export type SanitySlug = {
  _type: 'slug';
  current: string;
};

export type SanityBlockContentType = {
  _key: string;
  _type: 'block';
  children: [
    {
      _key: string;
      _type: string;
      marks: any[];
      text: string;
    }
  ];
  level?: 1;
  listItem?: string;
  markDefs: [];
  style: 'normal';
};

export type PortfolioPieceType = {
  _type: string;
  projectName: string;
  projectSubtitle: string;
  slug: SanitySlug;

  bannerImage: SanityReferenceType;
  productImage: SanityReferenceType;
  logo: SanityReferenceType;

  walkthrough: string;

  startedAt: string;
  completedAt: string;
  ongoing: boolean;

  technologies: SanityReference[];

  extractTitle: string;
  extract: SanityBlockContentType[];
  brief: SanityBlockContentType[];
  body: Array<
    | PlainTextType
    | CodeEmbedType
    | ImageEmbedType
    | IframeEmbedType
    | TextImageType
    | ButtonType
    | CustomListType
  >;
  repoUrl: string;
  liveUrl: string;

  featured: boolean;
  relatedProjects: any[];
  relatedArticles: SanityReference;

  // Meta
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
};
