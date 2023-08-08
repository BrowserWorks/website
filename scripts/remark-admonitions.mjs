import { h } from 'hastscript'
import { visit } from 'unist-util-visit'

const acceptableCalloutTypes = {
	// defaults (note, tip, caution, danger)
	note: { cssClass: 'message-note' },
	tip: { cssClass: 'message-tip' },
	caution: { cssClass: 'message-caution' },
	danger: { cssClass: 'message-danger' },

	// synonyms
	info: { cssClass: 'message-note' },
	important: { cssClass: 'message-caution' }
}

export function remarkAdmonitions() {
	return (tree) => {
		visit(tree, (node) => {
			if (
				node.type === 'textDirective' ||
				node.type === 'leafDirective' ||
				node.type === 'containerDirective'
			) {
				if (!Object.keys(acceptableCalloutTypes).includes(node.name)) {
					return
				}

				const boxInfo = acceptableCalloutTypes[node.name]

				// Adding CSS classes according to the type.
				const data = node.data || (node.data = {})
				const tagName = node.type === 'textDirective' ? 'span' : 'div'
				data.hName = tagName
				data.hProperties = h(tagName, { class: `message ${boxInfo.cssClass}` }).properties

				// Creating the content's column.
				const contentColWrapper = h('div')
				const contentColWrapperData = contentColWrapper.data || (contentColWrapper.data = {})
				contentColWrapperData.hName = 'div'
				contentColWrapperData.hProperties = h('div', { class: 'column' }).properties
				contentColWrapper.children = [...node.children] // Adding markdown's content block.

				// Creating the column's wrapper.
				const columnsWrapper = h('div')
				const columnsWrapperData = columnsWrapper.data || (columnsWrapper.data = {})
				columnsWrapperData.hName = 'div'
				columnsWrapperData.hProperties = h('div', { class: 'columns' }).properties
				columnsWrapper.children = [contentColWrapper]

				// Creating the wrapper for the callout's content.
				const contentWrapper = h('div')
				const wrapperData = contentWrapper.data || (contentWrapper.data = {})
				wrapperData.hName = 'div'
				wrapperData.hProperties = h('div', { class: 'message-body' }).properties
				contentWrapper.children = [columnsWrapper]
				node.children = [contentWrapper]
			}
		})
	}
}
