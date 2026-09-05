import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// Chess-specific: my rating at the time of a post
			// Optional so non-chess posts (or early posts) don't require it.
			rating: z.number().int().positive().optional(),
			ratingType: z
				.enum(['uscf', 'fide', 'chesscom', 'lichess'])
				.optional(),
		}),
});

export const collections = { blog };
