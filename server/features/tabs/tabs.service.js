import { readTabEntry } from "./tabs.repository.js"

let tree = {}

export const constructTree = async () => {
	const output = await readTabEntry({})
	return output
}
