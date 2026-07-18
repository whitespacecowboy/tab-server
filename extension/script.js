const PORT = 3000
browser.tabs.onCreated.addListener( async (tab) => {
	try {
		await fetch(`http://localhost:${PORT}/tabCreate`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(tab)
		})
	} catch (err) {
		throw new Error("Couldn't send tab object to website")
	}
});

browser.tabs.onRemoved.addListener( async (tabId) => {
	try {
		await fetch(`http://localhost:${PORT}/tabDelete`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(tabId)
		})
	} catch (err) {
		throw new Error("Couldn't send tab object to website")
	}
});

browser.tabs.onReplaced.addListener( async (tabId) => {
	try {
		await fetch(`http://localhost:${PORT}/tabReplaced`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(tabId)
		})
	} catch (err) {
		throw new Error("Couldn't send tab object to website")
	}
});

browser.tabs.onUpdated.addListener( async (tabId) => {
	try {
		await fetch(`http://localhost:${PORT}/tabReplaced`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(tabId)
		})
	} catch (err) {
		throw new Error("Couldn't send tab object to website")
	}
});
