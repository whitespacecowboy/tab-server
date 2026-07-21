import Tabs from "./tabs.model.js";

export const createTabEntry = async (tabObj) => {
	let status;
	try {
		status = await new Tabs(tabObj).save();
	} catch (error) {
		console.error(new Error("Couldn't insert tab entry"), { cause: error });
		return;
	}
	if (status?._id) {
		console.log("Tab entry added successfully", tabObj.id);
	} else {
		console.warn("Couldn't insert tab entry", tabObj.id);
	}
};

export const updateTabEntry = async (updatedInfo) => {
	// TODO: This function is invoked way too many times because of how onUpdated event listener works. Fix that later
	let status;
	try {
		status = await Tabs.updateOne(
			{ id: updatedInfo.id },
			updatedInfo.changeInfo
		);
	} catch (error) {
		console.error(new Error("Couldn't update tab entry"), { cause: error });
		return;
	}
	if (status.acknowledged) {
		if (status.matchedCount === 0) {
			console.warn("Couldn't update, no match found", updatedInfo.id);
		} else if (status.modifiedCount === 1) {
			console.log("Tab entry updated successfully", updatedInfo.id);
		}
	}
};

export const removeTabEntry = async (removeInfo) => {
	let status;
	try {
		status = await Tabs.deleteOne({ id: removeInfo.id });
	} catch (error) {
		console.error(new Error("Couldn't remove tab entry"), { cause: error });
		return;
	}
	if (status.acknowledged && status.deletedCount === 1) {
		console.log("Tab entry removed successfully", removeInfo.id);
	} else {
		console.warn("Tab entry wasn't removed", removeInfo.id);
	}
};

const readTabEntry = async (searchCondition) => {
	let output;
	try {
		output = Tabs.find(searchCondition)
	} catch (error) {
		console.error(new Error("Couldn't read tab entries"), { cause: error });
		return;
	}
	if (output.length !== 0) {
		console.log(output);
	} else {
		console.log("tab-info table was empty");
	}
};

export const deleteAllTabEntries = async () => {
	let status;
	try {
		status = await Tabs.deleteMany({});
	} catch (error) {
		console.error(new Error("Couldn't delete all table entries"), { cause: error });
		return;
	}
	if (status.acknowledged && status.deletedCount > 0) {
		console.log("tab-info is now empty");
	} else {
		console.warn("tab-info was already empty");
	}
};
