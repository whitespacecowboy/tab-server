import mongoose from "mongoose"

async function connectDbTab() {
	try {
		await mongoose.connect('mongodb://localhost:27017/tab-manger')
	} catch (err) {
		console.error(err)
	}
}

connectDbTab()

const tabsSchema = new mongoose.Schema({
	id: { type: Number, required: true },
	index: { type: Number, required: true },
	windowId: { type: Number, required: true },
	lastAccessed: { type: Number, required: true },
	groupId: { type: Number, required: true },
	url: { type: String, required: true },
	title: { type: String, required: true },
	openerId: { type: Number, required: true }
}) 

export const Tabs =  mongoose.model('tabs-info', tabsSchema)
