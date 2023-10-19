import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import blog from 'starlight-blog'
import svelte from '@astrojs/svelte'

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
				PageFrame: '~/components/CustomPageFrame.astro',
				Sidebar: 'starlight-blog/overrides/Sidebar.astro',
				ThemeSelect: '~/components/NavBar.astro'
			},
			title: 'Waterfox',
			logo: {
				replacesTitle: true,
				src: './src/assets/waterfox-logo.svg'
			},
			social: {
				github: 'https://github.com/WaterfoxCo/Waterfox',
				mastodon: 'https://mastodon.social/@Waterfox',
				twitter: 'https://twitter.com/Waterfoxproject'
			},
			sidebar: [
				{
					label: 'Blog',
					autogenerate: { directory: 'blog' }
				},
				{
					label: 'Policies',
					autogenerate: { directory: 'docs/policies' }
				},
				{
					label: 'Releases',
					collapsed: true,
					autogenerate: { directory: 'docs/releases' }
				}
			]
		}),
		svelte(),
		tailwind({
			applyBaseStyles: false
		})
	]
})
