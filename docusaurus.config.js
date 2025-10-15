// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BaseForge — User Guide',
  tagline: 'How to use your platform like a pro',
  favicon: 'img/favicon.ico',

  url: 'https://docs.base-forge.com',
  baseUrl: '/',

  organizationName: 'baseforge',
  projectName: 'user-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    image: 'img/og.png',
    navbar: {
      title: 'BaseForge',
      logo: {alt: 'BaseForge', src: 'img/logo.svg'},
      items: [
        {href: 'https://demo.base-forge.com', label: 'Demo', position: 'right'},
        {href: 'https://discord.gg/VqDp2SPM6N', label: 'Discord', position: 'right'}
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title:'Resources', items:[
          {label:'Demo', href:'https://demo.base-forge.com'},
          {label:'Discord', href:'https://discord.gg/VqDp2SPM6N'}
        ]},
        {title:'Docs', items:[
          {label:'Getting Started', to:'/getting-started'},
          {label:'Packs', to:'/catalog/packs'},
          {label:'Add-ons', to:'/integrations/discord'}
        ]}
      ],
      copyright: `© ${new Date().getFullYear()} BaseForge.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
