import { createTabEntry, updateTabEntry, removeTabEntry } from "./tabs.repository.js"
import { constructTree } from './tabs.service.js'

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

export const showTree = async (req, res) => {
	const output = await constructTree()
	res.status(200).json(output);
};
