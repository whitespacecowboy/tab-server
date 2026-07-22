import app from './config/express.js';
import connectDB from './config/database.js'
import { deleteAllTabEntries as clear } from './features/tabs/tabs.repository.js'

const PORT_EXPRESS = 3000;
const PORT_DB = 27017;

async function main() {
	try {
		await connectDB(PORT_DB)
		await clear()
		app.listen(PORT_EXPRESS, () => {
			console.info(`listening on http://localhost:${PORT_EXPRESS}/`);
			console.info(`listening on http://localhost:${PORT_EXPRESS}/api/tabs/show`);
		})
	} catch (error) {
		console.error(error)
	}
}

main()

