const PORT = 3000

browser.tabs.onCreated.addListener(async (tab) => {
	try {
		await fetch(`http://localhost:${PORT}/tabCreated`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				id: tab.id,
				index: tab.index,
				windowId: tab.windowId,
				lastAccessed: tab.lastAccessed,
				groupId: tab.groupId,
				url: tab.url,
				title: tab.title,
				openerTabId: tab.openerTabId
			})
		})
	} catch (err) {
		throw new Error("Couldn't send onCreated event", err)
	}
});

browser.tabs.onRemoved.addListener(async (tabId, removeInfo) => {
	try {
		await fetch(`http://localhost:${PORT}/tabRemoved`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				tabId: tabId,
				removeInfo: removeInfo
			})
		})
	} catch (err) {
		throw new Error("Coundn't send onRemoved event", err)
	}
});

const args = browser.tabs.onUpdated.addListener(async (tabId, changeInfo, newState) => {
	try {
		await fetch(`http://localhost:${PORT}/tabUpdated`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				tabId: tabId,
				changeInfo: changeInfo,
				newState: newState
			})
		})
	} catch (err) {
		throw new Error("Cound't send onUpdate event", err)
	}
}
	,{
		properties: ["title", "url", "openerTabId", "groupId"]
		// properties: ["pinned", "title", "url", "status", "openerTabId", "groupId"]
	}
);
