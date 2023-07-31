/**
 * Return a copy ordered by iteratee
 *
 * @category Array
 */
export function orderBy<T>(
	array: readonly T[],
	iteratee: (keyof T | ((a: T) => any)) | (keyof T | ((a: T) => any))[],
	order?: ('asc' | 'desc') | ('asc' | 'desc')[]
): T[] {
	let arr = [...array]
	const iterateeArr = Array.isArray(iteratee) ? iteratee : [iteratee]
	const orderArr = Array.isArray(order) ? order : [order]
	for (let i = iterateeArr.length - 1; i >= 0; i--) {
		arr.sort(sortBy<T>(iterateeArr[i], orderArr?.[i] || 'asc'))
	}
	return arr
}

function sortBy<T>(key: keyof T | ((a: T) => any), order: 'asc' | 'desc') {
	const gt = order === 'asc' ? 1 : -1
	const lt = order === 'asc' ? -1 : 1
	const fn = typeof key === 'function'
	return (a: T, b: T) => {
		const l = fn ? key(a) : a[key]
		const r = fn ? key(b) : b[key]
		return l > r ? gt : r > l ? lt : 0
	}
}

export function parseSemVer(str: string): number[] {
	const [semVer, beta] = str.split(/(?:g|beta)/gi).filter(Boolean)
	const [major, minor, patch] = semVer.split('.')
	const version = [
		parseInt(major || '0'),
		parseInt(minor || '0'),
		parseInt(patch || '0'),
		parseInt(beta || '0')
	]
	return version
}
