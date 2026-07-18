import express from 'express';
import cors from 'cors';
const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.text());
app.use(cors());

app.post('/tabRemoved', (req, res) => {
	console.log(req.body)
	res.status(200).json({ message: 'Tab removed event received' });
})

app.post('/tabUpdated', (req, res) => {
	console.log(req.body)
	res.status(200).json({ message: 'Tab updated event received' });
})

app.post('/tabCreated', (req, res) => {
	console.log(req.body)
	res.status(200).json({ message: 'Tab created event received' });
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`)
})
