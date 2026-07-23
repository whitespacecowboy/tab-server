import mongoose from "mongoose";

export default async function connectDatabase(PORT_DB) {
	try {
		await mongoose.connect(`mongodb://localhost:${PORT_DB}/tabmanager`);
	} catch (err) {
		throw new Error("Connecting to database failed\n", { cause: err.message })
	}
}
