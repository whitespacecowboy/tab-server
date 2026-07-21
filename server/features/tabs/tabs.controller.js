import { createTabEntry, updateTabEntry, removeTabEntry } from "./tabs.repository.js"

export const handleTabCreated = (req, res) => {
  createTabEntry(req.body)
  res.status(200).json({ message: 'Tab created event received' });
};

export const handleTabRemoved = (req, res) => {
  removeTabEntry(req.body)
  res.status(200).json({ message: 'Tab removed event received' });
};

export const handleTabUpdated = (req, res) => {
  updateTabEntry(req.body)
  res.status(200).json({ message: 'Tab updated event received' });
};