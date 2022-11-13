import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'e2259ab7bb7a44e5b67a8ce594927af0',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Bryan Lue',
  domain: 'bryanlue.me',
  author: 'Bryan Lue',

  // open graph metadata (optional)
  description: 'Hello! I am Bryan, a student based in Kuala Lumpur, Malaysia. On this site I will be sharing my opinions on various world events, technology related tips, and various interesting ideas. ',

  // social usernames (optional)
  twitter: 'bryanlue721',
  github: 'bryanlue721',
  newsletter: 'https://newsletters.bryanlue.me/',
  youtube: '@bryanlue721',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
     {
       title: 'About',
       pageId: '91694f2fbe494744afd741966c018358'
     },
     {
       title: 'Contact',
       pageId: 'f760498823c94f9d97f713f40c7110a0'
     }
   ]
})
