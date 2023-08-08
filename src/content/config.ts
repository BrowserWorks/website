import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		id: z.string().optional(),
		title: z.string(),
		description: z.string().optional(),
		author: z.string(),
		authorTitle: z.string(),
		authorUrl: z.string().optional(),
		authorImageUrl: z.string(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val))
	})
})

const docs = defineCollection({
	type: 'content',
	schema: z.object({
		id: z.string().optional(),
		title: z.string(),
		description: z.string().optional(),
		subtitle: z.string().optional(),
		label: z.string(),
		jsonLD: z.any().optional(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val))
			.optional()
	})
})

const support = defineCollection({
	type: 'content',
	schema: z.object({
		id: z.string().optional(),
		title: z.string(),
		description: z.string().optional(),
		subtitle: z.string().optional(),
		label: z.string(),
		jsonLD: z.any().optional()
	})
})

const download = defineCollection({
	type: 'content',
	schema: z.object({
		id: z.string().optional(),
		title: z.string(),
		description: z.string().optional(),
		subtitle: z.string().optional(),
		label: z.string(),
		jsonLD: z.any().optional()
	})
})

export const collections = { blog, docs, support, download }
