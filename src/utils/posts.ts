import { getCollection } from 'astro:content';

export async function getPublishedPosts() {
	return getCollection('blog', ({ data }) => {
		// In dev, show everything (including drafts). In prod, hide drafts.
		return import.meta.env.PROD ? data.draft !== true : true
});
}
