import app from './config/express.js';
import connectDB from './config/database.js'

const PORT_EXPRESS = 3000;
const PORT_DB = 27017;

async function main() {
	try {
		await connectDB(PORT_DB)
		app.listen(PORT_EXPRESS, () => {
			console.info(`listening on http://localhost:${PORT_EXPRESS}/`);
		})
	} catch (err) {
		console.error(err)
	}
}

main()
