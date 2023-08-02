// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import category from './category';
import post from './post';
import resume from './resume';
import technologies from './technologies';
import portfolio from './portfolio';
import codeEmbed from './custom/codeEmbed';
import textImage from './custom/textImage';
import iframeEmbed from './custom/iframeEmbed';
import plainText from './custom/plainText';
import strippedRCE from './custom/strippedRCE';
import basicRCE from './custom/basicRCE';
import customList from './custom/customList';
import button from './custom/button';
import page from './page';
import postSeries from './postSeries';
import customSEO from './areas/customSEO';
import imageEmbed from './custom/imageEmbed';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    portfolio,
    page,
    technologies,
    post,
    postSeries,
    category,
    resume,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    // Customized RCEs
    blockContent,
    strippedRCE,
    basicRCE,

    // Custom sections
    customSEO,
    imageEmbed,
    codeEmbed,
    iframeEmbed,
    textImage,
    plainText,
    customList,
    button,
  ]),
});
