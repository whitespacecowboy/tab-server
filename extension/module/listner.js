const tabCreatedListener = (PORT) => {
	browser.tabs.onCreated.addListener(async (tab) => {
		try {
			await fetch(`http://localhost:${PORT}/api/tabs/tabCreated`, {
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
					openerTabId: tab.openerTabId,
					status: tab.status,
					pinned: tab.pinned,
					active: tab.active,
					attention: tab.attention,
					successorTabId: tab.successorTabId,
					hidden: tab.hidden,
					discarded: tab.hidden,
					incognito: tab.incognito
				})
			})
		} catch (err) {
			throw console.error(new Error("Couldn't send onCreated event", err))
		}
	});
}

const tabRemovedListener = (PORT) => {
	browser.tabs.onRemoved.addListener(async (tabId, removeInfo) => {
		try {
			await fetch(`http://localhost:${PORT}/api/tabs/tabRemoved`, {
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
}

const tabUpdatedListener = (PORT) => {
	browser.tabs.onUpdated.addListener(async (tabId, changeInfo) => {
		try {
			await fetch(`http://localhost:${PORT}/api/tabs/tabUpdated`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					tabId: tabId,
					changeInfo: changeInfo,
				})
			})
		} catch (err) {
			throw new Error("Cound't send onUpdate event", err)
		}
	},
		{
			properties: ["title", "url", "status", "groupId"]
		}
	);
}

export {
	tabCreatedListener,
	tabRemovedListener,
	tabUpdatedListener
}
