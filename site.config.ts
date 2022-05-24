import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'b20cba2d2c8948aa8ce3e92869900e69',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'qvinhprolol Blog',
  domain: 'qvinhprolol.vercel.app',
  author: 'Nguyen Quang Vinh',

  // open graph metadata (optional)
  description: 'qvinhprolol blog',

  // social usernames (optional)
  twitter: 'qvinhprolol',
  github: 'IceWizard4902',
  linkedin: 'vinh-nguyen-447755130',

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
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Resume',
      pageId: '6a9e752085ea4fbb9a9df3eebacd1bb1'
    },
    {
      title: 'CTFs',
      pageId: '3aeda92ef9054bd285f43efcc7dbb100'
    }
  ]
})
