/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guide: [
    'getting-started',
    'appearance',
    {
      type: 'category',
      label: 'Admin',
      collapsed: false,
      items: [
        'admin/admin',
        'admin/optimizer',
      ],
    },
    {
      type: 'category',
      label: 'Catalog',
      collapsed: true,
      items: [
        'catalog/packs',
        'catalog/coaches',
        'catalog/categories',
        'catalog/about',
        'catalog/hero',
        'catalog/partners',
        'catalog/services',
        'catalog/builders',
      ],
    },
    {
      type: 'category',
      label: 'Orders & Coupons',
      collapsed: true,
      items: [
        'commerce/orders',
        'commerce/coupons',
      ],
    },
    {
      type: 'category',
      label: 'Platform',
      collapsed: true,
      items: [
        'platform/privacy',
        'platform/analytics',
        'platform/info',
      ],
    },
    {
      type: 'category',
      label: 'Add ons',
      collapsed: true,
      items: [
        'add-ons/discord',
        'add-ons/email',
        'add-ons/video',
        'add-ons/paypal',
      ],
    },
    {
      type: 'category',
      label: 'Seo',
      collapsed: true,
      items: [
        'seo/pages',
        'seo/media',
      ],
    },
    'faq',
    'troubleshoting',
    'changelog'
  ],
};
export default sidebars;
