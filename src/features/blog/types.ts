import {
  ButtonType,
  CodeEmbedType,
  CustomListType,
  IframeEmbedType,
  ImageEmbedType,
  PlainTextType,
  SanitySlug,
  TextImageType,
} from '../portfolio/types'

export type BlogPostType = {
  _type: string
  title: string
  slug: SanitySlug
  coverImage: any
  categories: {
    description: string
    title: string
    slug: SanitySlug
  }[]

  publishedAt: string

  extract: string
  body: Array<
    | PlainTextType
    | CodeEmbedType
    | ImageEmbedType
    | IframeEmbedType
    | TextImageType
    | ButtonType
    | CustomListType
  >

  relatedArticles: any[]

  // Todo: Add SEO fields

  // Meta
  _createdAt: string
  _rev: string
  _updatedAt: string
}
