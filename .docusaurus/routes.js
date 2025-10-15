import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e0f'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '7c2'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'a98'),
            routes: [
              {
                path: '/add-ons/discord',
                component: ComponentCreator('/add-ons/discord', 'c8d'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/add-ons/email',
                component: ComponentCreator('/add-ons/email', 'f8c'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/add-ons/paypal',
                component: ComponentCreator('/add-ons/paypal', '044'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/add-ons/video',
                component: ComponentCreator('/add-ons/video', 'b92'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/admin/',
                component: ComponentCreator('/admin/', '701'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/admin/optimizer',
                component: ComponentCreator('/admin/optimizer', 'f22'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/appearance',
                component: ComponentCreator('/appearance', '685'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/catalog/about',
                component: ComponentCreator('/catalog/about', '69f'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/catalog/builders',
                component: ComponentCreator('/catalog/builders', 'a7a'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/catalog/categories',
                component: ComponentCreator('/catalog/categories', '37b'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/catalog/coaches',
                component: ComponentCreator('/catalog/coaches', '609'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/catalog/hero',
                component: ComponentCreator('/catalog/hero', '2ab'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/catalog/packs',
                component: ComponentCreator('/catalog/packs', '764'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/catalog/partners',
                component: ComponentCreator('/catalog/partners', '08f'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/catalog/services',
                component: ComponentCreator('/catalog/services', '67a'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/catalog/slides',
                component: ComponentCreator('/catalog/slides', '85a'),
                exact: true
              },
              {
                path: '/changelog',
                component: ComponentCreator('/changelog', 'eaa'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/commerce/coupons',
                component: ComponentCreator('/commerce/coupons', '3b3'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/commerce/orders',
                component: ComponentCreator('/commerce/orders', 'f81'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/faq',
                component: ComponentCreator('/faq', '0ff'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/getting-started',
                component: ComponentCreator('/getting-started', '421'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/platform/analytics',
                component: ComponentCreator('/platform/analytics', 'ce2'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/platform/info',
                component: ComponentCreator('/platform/info', 'cf8'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/platform/privacy',
                component: ComponentCreator('/platform/privacy', '36d'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/seo/media',
                component: ComponentCreator('/seo/media', '4cd'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/seo/pages',
                component: ComponentCreator('/seo/pages', '2af'),
                exact: true,
                sidebar: "guide"
              },
              {
                path: '/troubleshoting',
                component: ComponentCreator('/troubleshoting', 'e6a'),
                exact: true,
                sidebar: "guide"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
