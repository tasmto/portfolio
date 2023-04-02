import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = {
	loaders: [
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./localizations/en/common.json')).default
		},
		{
			locale: 'en',
			key: 'nav',
			loader: async () => (await import('./localizations/en/nav.json')).default
		}
	],
	initLocale: 'en',
	fallbackLocale: 'en'
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
