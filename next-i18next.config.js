module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt"],
  },
  serializeConfig: false,
  use: [
    {
      init: (i18next) => {
        i18next.services.formatter.add("lowercase", (value) =>
          value.toLowerCase()
        );
      },
      type: "3rdParty",
    },
  ],
};
