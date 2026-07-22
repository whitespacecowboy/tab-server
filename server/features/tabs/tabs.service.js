import { readTabEntry } from "./tabs.repository.js"

export const constructTree = async () => {
	let tree = []

	const output = await readTabEntry({})
	if (output === undefined) {
		console.error("Can't construct tree")
		return 0
	}

	for (let entry of output) {
		let queryResult = await readTabEntry({ openerTabId: entry.id })
		const plainEntry = entry.toObject()
		if ( queryResult.length !== 0) {
			plainEntry["openerTabRef"] = queryResult
		}
		tree.push(plainEntry)
	}
	return tree
}

