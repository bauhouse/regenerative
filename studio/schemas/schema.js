// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import user defined schema types
import config from './config.js';
import header from './header.js';
import footer from './footer.js';
import person from './person.js';
import category from './category.js';
import page from './page.js';
import post from './post.js';
import advanced from './advanced.js';
import blog_feed_section from './blog_feed_section.js';
import contact_section from './contact_section.js';
import content_section from './content_section.js';
import cta_section from './cta_section.js';
import features_section from './features_section.js';
import hero_section from './hero_section.js';
import team_section from './team_section.js';
import feature from './feature.js';
import action from './action.js';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    config,
    header,
    footer,
    person,
    category,
    page,
    post,
    advanced,
    blog_feed_section,
    contact_section,
    content_section,
    cta_section,
    features_section,
    hero_section,
    team_section,
    feature,
    action
    ])
})
