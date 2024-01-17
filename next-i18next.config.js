// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeDetection: true,
  },
  // eslint-disable-next-line no-undef
  localePath: path.resolve('./public/locales'),
  react: {
    useSuspense: false,
  },
};
