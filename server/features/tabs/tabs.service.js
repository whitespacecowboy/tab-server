import { createManyTabEntry, deleteAllTabEntries, readTabEntry } from "./tabs.repository.js"

export const constructTree = async () => {
	let tree = []

	// if (output === undefined) {
	// 	console.error("Can't construct tree")
	// 	return 0
	// }
	//
	// for (let entry of output) {
	// 	let queryResult = await readTabEntry({ openerTabId: entry.id })
	// 	const plainEntry = entry.toObject()
	// 	if ( queryResult.length !== 0) {
	// 		plainEntry["openerTabRef"] = queryResult
	// 	}
	// 	tree.push(plainEntry)
	// }
	return output
	return tree
}

export const sync = async (arr) => {
	await deleteAllTabEntries()
	await createManyTabEntry(arr)
}

