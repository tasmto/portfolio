// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import post from './post'
import technologies from './technologies'
import portfolio from './portfolio'
import codeEmbed from './custom/codeEmbed'
import textImage from './custom/textImage'
import iframeEmbed from './custom/iframeEmbed'
import plainText from './custom/plainText'
import strippedRCE from './custom/strippedRCE'
import customList from './custom/customList'
import button from './custom/button'
import page from './page'
import postSeries from './postSeries'
import customSEO from './areas/customSEO'
import imageEmbed from './custom/imageEmbed'

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
