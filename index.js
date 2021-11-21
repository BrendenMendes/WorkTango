const { getLocation } = require('./operations')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(query) {
    return new Promise(resolve => {
        readline.question(query, resolve);
    })
}

(async ()=> {
	let plateau, longitude, latitude, landing, roverLongitude, roverLatitude, roverDirection;
	console.log('\x1b[36m%s\x1b[0m', 'Mars Rover Exploration 🤖');
	while(true){
		if(!longitude || longitude < 0 || !latitude || latitude < 0){
			plateau = await question(`Enter the longitude and latitude of the plateau (space separated) : `)
			longitude = plateau.split(' ')[0]
			latitude = plateau.split(' ')[1]
		}
		if(longitude && longitude > 0 && latitude && latitude > 0 &&
			roverLongitude == undefined && roverLatitude == undefined && roverDirection == undefined){
			let landing = await question(`Enter the landing co ordinates for the rover (longitude latitude direction) : `)
			if(landing.split(' ').length == 3){
				roverLongitude = landing.split(' ')[0]
				roverLatitude = landing.split(' ')[1]
				roverDirection = landing.split(' ')[2]
			}
		}
		if(longitude && longitude > 0 && latitude && latitude > 0 && 
			roverLongitude && roverLongitude % 1 == 0 && roverLongitude <= longitude && 
			roverLatitude && roverLatitude % 1 == 0 && roverLatitude <= latitude && 
			roverDirection && roverDirection.length == 1 && ['N', 'S', 'E', 'W'].includes(roverDirection)){
			instructions = await question(`Enter the navigation instructions without spaces (L, R, M) : `)
		    instructions = instructions.split('')
		}
		if(longitude && longitude > 0 && latitude && latitude > 0 && 
			roverLongitude % 1 == 0 && roverLongitude <= longitude && 
			roverLatitude % 1 == 0 && roverLatitude <= latitude && 
			roverDirection.length == 1 && ['N', 'S', 'E', 'W'].includes(roverDirection) &&
			instructions.every(item => ['L', 'R', 'M'].includes(item))){
	    	let finalLocation = await getLocation(instructions, longitude, latitude, roverLongitude, roverLatitude, roverDirection)
	    	console.log('\x1b[32m%s\x1b[0m', `Current location (longitude latitude direction) : ${finalLocation.roverLongitude} ${finalLocation.roverLatitude} ${finalLocation.roverDirection}`)
	    	plateau = longitude = latitude = landing = roverLongitude = roverLatitude = roverDirection = finalLocation = undefined
		}
		else{
			console.log('Invalid input')
		}
    }
    readline.close();
})()