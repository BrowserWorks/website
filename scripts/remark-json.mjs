import sanitizeHtml from 'sanitize-html'
import { visit } from 'unist-util-visit'

export function remarkJson() {
	return function (tree, { data }) {
		const json = []

		visit(tree, (node) => {
			const previousNode = json?.[json.length - 1]

			if (node.type === 'heading') {
				json.push({
					heading: node?.children?.[0]?.value?.trim() || 'N/A',
					content: []
				})
			} else if (previousNode) {
				const value = (node?.value || node?.children?.[0]?.value || '')?.trim()
				const exists =
					sanitizeHtml(value, {
						allowedTags: [],
						allowedAttributes: []
					}) === previousNode.heading || previousNode.content.find((n) => n === value)

				if (value && !exists) {
					json[json.length - 1].content.push(value)
				}
			}
		})

		data.astro.frontmatter.json = json.map((n) => ({
			...n,
			content: n.content.join('')
		}))
	}
}
