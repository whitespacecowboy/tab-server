import mongoose from "mongoose"

const tabsSchema = new mongoose.Schema({
	id: { type: Number, required: true },
	index: { type: Number, required: true },
	windowId: { type: Number, required: true },
	lastAccessed: { type: Number, required: true },
	groupId: { type: Number, required: true },
	url: { type: String, required: true },
	title: { type: String, required: true },
	openerTabId: { type: Number },
	incognito: { type: Boolean },
	status: { type: String },
	pinned: { type: Boolean },
	active: { type: Boolean },
	attention: { type: Boolean },
	successorTabId: { type: Number },
	hidden: { type: Boolean },
	discarded: { type: Boolean }
}) 

const Tabs = mongoose.model('tabs-info', tabsSchema)
export default Tabs
