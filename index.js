const i18next = require('i18next');

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        key1: 'EN {{var}}'
      }
    },
    nl: {
      translation: {
        key1: 'NL {{var}}'
      }
    }
  }
}, (err, t) => {
  const english = i18next.getFixedT('en');
  const dutch = i18next.getFixedT('nl');

  // This prints "EN foo NL foo"
  console.log(english('key1', { var: 'foo' }), dutch('key1', { var: 'foo' }));

  // This prints "EN foo EN foo"
  const interpolation = {
    var: 'foo'
  }
  console.log(english('key1', interpolation), dutch('key1', interpolation));
});
