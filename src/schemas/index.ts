// We import object and document schemas
import customSEO from './areas/customSEO'
import button from './custom/button'
import codeEmbed from './custom/codeEmbed'
import customList from './custom/customList'
import iframeEmbed from './custom/iframeEmbed'
import imageEmbed from './custom/imageEmbed'
import plainText from './custom/plainText'
import strippedRCE from './custom/strippedRCE'
import textImage from './custom/textImage'
import blockContent from './blockContent'
import category from './category'
import page from './page'
import portfolio from './portfolio'
import post from './post'
import postSeries from './postSeries'
import technologies from './technologies'

export const schemaTypes = [
  // The following are document types which will appear
  // in the studio.
  portfolio,
  page,
  technologies,
  post,
  postSeries,
  category,

  // Customized RCEs
  blockContent,
  strippedRCE,

  // Custom sections
  customSEO,
  imageEmbed,
  codeEmbed,
  iframeEmbed,
  textImage,
  plainText,
  customList,
  button,
]
