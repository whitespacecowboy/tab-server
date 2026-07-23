const removeTab = async (PORT, tabIds) => {
	const response = await fetch(`http://localhost:${PORT}/api/tabs/delete/${tabIds}`, { 
		method: 'DELETE',
	})

	if (!response.ok) {
		console.error(new Error("something went wrong in processing DELETE request", { cause: error }))
		return
	}

	try {
		await browser.tabs.remove(tabIds)
	} catch (error) {
		console.error(new Error("Couldn't close tab", { cause: error }))
		return -1
	}
}

// tabs.ungroup()

// export async function createTab(tabObj) {
// 	let status = await browser.tabs.create({
// 		active: true,
// 		discarded: true,
// 		url: tabObj.url,
// 		opernerTabId: tabObj.url,
// 	})
// }

const getAllTabs = async (PORT) => {
	let output;
	try {
		output = await browser.tabs.query({ currentWindow: true })
	} catch (error) {
		console.error(new Error("Couldn't sync tab", { cause: error }))
		return -1
	}

	const response = await fetch(`http://localhost:${PORT}/api/tabs/getAll`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(output)
	})

	if (!response.ok) {
		console.error(new Error("couldn't send tab data"))
	}
}

export {
	getAllTabs,
	removeTab
}
