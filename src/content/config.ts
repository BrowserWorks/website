import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";
import { blogSchema } from "starlight-blog/schema";
import { defineCollection } from "astro:content";

export const collections = {
	docs: defineCollection({ schema: docsSchema({ extend: blogSchema() }) }),
	i18n: defineCollection({ type: "data", schema: i18nSchema() }),
};
