import type { LayoutServerLoad } from './$types';

// @ts-expect-error: preview mode is not yet supported
export const load: LayoutServerLoad = async ({ locals: { previewMode }, url }) => {
	const isPreview = previewMode && url.searchParams.get('isPreview') === 'true';

	return {
		previewModeEmbed: isPreview,
		previewMode
	};
};
