module.exports = {
  siteMetadata: {
    siteUrl: 'https://your-site.io' + '/',
    title: 'My Blog',
    twitterHandle: '@eggheadio',
    description: 'This is where they post things!',
    keywords: ['Video Blogger'],
    canonicalUrl: 'https://your-site.io',
    image: 'images/logo.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
    author: {
      name: 'Author',
      minibio: `
        <strong>egghead</strong> is the premier place on the internet for
        experienced developers to enhance their skills and stay current
        in the fast-faced field of web development.
      `,
    },
    organization: {
      name: 'egghead.io LLC',
      url: 'https://your-site.io',
      logo: 'images/logo.png',
    },
    social: {
      twitter: '@eggheadio',
      twitterUrl: 'https://twitter.com/eggheadio/',
      githubUrl: 'eggheadio',
      linkedinUrl: '',
      fbAppID: '',
    },
  },
  __experimentalThemes: ['@eggheadio/gatsby-theme-egghead-blog'],
}
