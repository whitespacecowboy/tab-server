import mongoose from "mongoose"
import Tabs from "./tabs.model.js"

export const createTabEntry = async (tabObj) => {
    try {
        const status = await new Tabs(tabObj).save()
    } catch (error) {
        console.error(new Error("Cound't insert tab entry"), { cause: error} )
    }
    console.log("Tab Entry added successfully", tabObj.id)
}

export const updateTabEntry = async (updatedInfo) => {
    // TODO: This function is invoked way too many times because of how onUpdated event lister works. Fix that later
    try {
        const status = await Tabs.updateOne(
            { id: updatedInfo.tabId },
            updatedInfo.changeInfo
        )
    } catch (error) {
        console.error(new Error("Couldn't update tab entry"), {cause: error})
    }
    console.log("Tab Entry updated successfully", changeInfo.tabId)
}

export const removeTabEntry = async (removeInfo) => {
    try {
        const status = await Tabs.deleteOne( { id: removeInfo.tabId })
    } catch (error) {
        console.error(new Error("Couldn't remove tab entry"), {cause: error})
    }
    console.log("Tab Entry removed successfully")
}

const readTabEntry = async (id) => {
    const output = await Tabs.find()
    console.log(output)
}

const deleteAllTabEntries = async () => {
    try {
        const status = await Tabs.deleteMany({})
    } catch (error) {
        console.error(new Error("Couldn't delete all table entries"), {cause: error})
    }
    console.log("DELETED ALL TAB ENTRIES")
}

// deleteAllTabEntries()
// readTabEntry()