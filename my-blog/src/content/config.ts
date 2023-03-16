import { z, defineCollection } from 'astro:content';
import { zonedTimeToUtc } from 'date-fns-tz';

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		pubDate: z.string().transform((str) => zonedTimeToUtc(str, 'Asia/Tokyo')),
		image: z.string(),
		category: z.array(z.string()),
		description: z.string(),
	}),
});

export const collections = {
	blog: blogCollection,
};
