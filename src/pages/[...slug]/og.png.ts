import { getCollection, type CollectionEntry } from 'astro:content'
import fs from 'fs'
import path from 'path'
import { ImageResponse } from '@vercel/og'

const imgUrl =
	'data:image/png;base64,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'

interface Props {
	params: { slug: string }
	props: { post: CollectionEntry<'docs'> }
}

export async function GET({ props }: Props) {
	const { post } = props

	// using custom font files
	const MontserratBold = fs.readFileSync(path.resolve('./src/fonts/Montserrat-Bold.ttf'))

	// Astro doesn't support tsx endpoints so use React-element objects
	const html = {
		type: 'div',
		props: {
			tw: 'w-full h-full flex items-center justify-center relative px-22',
			style: {
				backgroundImage: 'linear-gradient(135deg, rgba(182,156,254,1) 0%, rgba(123,165,255,1) 100%)'
			},
			children: [
				{
					type: 'div',
					props: {
						tw: 'flex inset-x-0 top-0 shrink text-[#053361]',
						children: {
							type: 'div',
							props: {
								style: {
									fontSize: '72px',
									fontFamily: 'Montserrat Bold'
								},
								children: post.data.title
							}
						}
					}
				},
				{
					type: 'div',
					props: {
						tw: 'flex absolute bottom-0 right-0 h-24 pb-8 pr-8',
						children: {
							type: 'div',
							props: {
								tw: 'flex',
								children: {
									type: 'img',
									props: {
										src: imgUrl
									}
								}
							}
						}
					}
				}
			]
		}
	}

	return new ImageResponse(html, {
		width: 1200,
		height: 630,
		fonts: [
			{
				name: ' Montserrat Bold',
				data: MontserratBold.buffer,
				style: 'normal'
			}
		]
	})
}

// to generate an image for each blog posts in a collection
export async function getStaticPaths() {
	const blogPosts = await getCollection('docs')
	return blogPosts.map((post) => ({
		params: { slug: post.slug },
		props: { post }
	}))
}
