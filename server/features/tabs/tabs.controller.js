import { createTabEntry, updateTabEntry, removeTabEntry } from "./tabs.repository.js"

export const handleTabCreated = async (req, res) => {
	await createTabEntry(req.body)
	res.status(200).json({ message: 'Tab created event received' });
};

export const handleTabRemoved = async (req, res) => {
	await removeTabEntry(req.body)
	res.status(200).json({ message: 'Tab removed event received' });
};

export const handleTabUpdated = async (req, res) => {
	await updateTabEntry(req.body)
	res.status(200).json({ message: 'Tab updated event received' });
};
