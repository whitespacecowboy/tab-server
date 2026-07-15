import find from 'local-devices'

find().then(devices => {
	console.log(devices)
}).catch(() => {
	console.log("Shit didn't work")
})
