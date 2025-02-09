import { loadTranslations } from '$lib/i18n/translations';

export const prerender = true;

export const ssr = false;

export const trailingSlash = 'always';

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url }) => {
	const { pathname } = url;

	const initLocale = 'zh-hk';

	await loadTranslations(initLocale, pathname);

	return {};
};
