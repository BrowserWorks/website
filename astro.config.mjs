import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import blog from 'starlight-blog'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	integrations: [
		blog({
			authors: {
				alex: {
					name: 'Alex Kontos',
					title: 'Founder',
					picture: '/alex.jpg',
					url: 'https://www.linkedin.com/in/alex-kontos'
				}
			}
		}),
		starlight({
			components: {
				MarkdownContent: 'starlight-blog/overrides/MarkdownContent.astro',
				Sidebar: 'starlight-blog/overrides/Sidebar.astro',
				ThemeSelect: 'starlight-blog/overrides/ThemeSelect.astro'
			},
			customCss: ['./src/assets/global.scss'],
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight'
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Example Guide',
							link: '/guides/example/'
						}
					]
				},
				{
					label: 'Reference',
					autogenerate: {
						directory: 'reference'
					}
				}
			]
		}),
		tailwind({
			applyBaseStyles: false
		})
	]
})
