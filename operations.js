function getLocation(instructions, longitude, latitude, roverLongitude, roverLatitude, roverDirection){
	for(let instruction of instructions){
		let data;
		switch(instruction){
			case 'L':
				data = updateLocation('-', roverLongitude, roverLatitude, roverDirection)
			break;
			case 'R':
				data = updateLocation('+', roverLongitude, roverLatitude, roverDirection)
			break;
			case 'M':
				data = updateLocation('', roverLongitude, roverLatitude, roverDirection)
			break;
		}
		roverLongitude = data.roverLongitude
		roverLatitude = data.roverLatitude
		roverDirection = data.roverDirection
	}
	return { roverLongitude, roverLatitude, roverDirection }
}

function updateLocation(operator, roverLongitude, roverLatitude, roverDirection){
	if(operator == '-'){
		if(roverDirection == 'N'){
			roverDirection = 'W'
		}
		else if(roverDirection == 'S'){
			roverDirection = 'E'
		}
		else if(roverDirection == 'E'){
			roverDirection = 'N'
		}
		else if(roverDirection == 'W'){
			roverDirection = 'S'
		}
	}
	else if(operator == '+'){
		if(roverDirection == 'N'){
			roverDirection = 'E'
		}
		else if(roverDirection == 'S'){
			roverDirection = 'W'
		}
		else if(roverDirection == 'E'){
			roverDirection = 'S'
		}
		else if(roverDirection == 'W'){
			roverDirection = 'N'
		}
	}
	else{
		if(roverDirection == 'N'){
			roverLatitude = parseInt(roverLatitude) + 1
		}
		else if(roverDirection == 'S'){
			roverLatitude = parseInt(roverLatitude) - 1
		}
		else if(roverDirection == 'E'){
			roverLongitude = parseInt(roverLongitude) + 1
		}
		else if(roverDirection == 'W'){
			roverLongitude = parseInt(roverLongitude) - 1
		}
	}
	return { roverLongitude, roverLatitude, roverDirection }
}

module.exports = { getLocation }