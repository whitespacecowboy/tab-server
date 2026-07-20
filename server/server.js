import app from './config/express.js';

const PORT = 3000

app.listen(PORT, () => {
	console.info(`listening on http://localhost:${PORT}/`)
})
