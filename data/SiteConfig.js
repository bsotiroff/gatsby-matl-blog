const config = {
  siteTitle: 'Brandon Sotiroff', // Site title.
  siteTitleShort: 'Brandon Sotiroff', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'GatsbyJS Material Blog', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://vagr9k.github.io', // Domain of your website without pathPrefix.
  pathPrefix: '/gatsby-material-starter', // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: 'A GatsbyJS stater with Material design in mind.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteRssTitle: 'Gatsby Material Starter RSS feed', // Title of the RSS feed
  siteFBAppID: '1825356251115265', // FB Application ID for using app insights
  siteGATrackingID: 'UA-47311644-4', // Tracking code ID for google analytics.
  disqusShortname: 'https-vagr9k-github-io-gatsby-material-starter', // Disqus shortname.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  userName: 'BSotiroff', // Username to display in the author segment.
  userEmail: 'bsotiroff1@gmail.com', // Email used for RSS feed's author segment
  userTwitter: '', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Chicago, IL', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription: 'Using this blog to learn in public and share knowledge.', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/bsotiroff',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Email',
      url: 'mailto:bsotiroff1@gmail.com',
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: 'Copyright © 2020. Brandon Sotiroff', // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
