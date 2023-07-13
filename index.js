// Code your solution in this file!


distanceFromHqInBlocks(30);
distanceFromHqInFeet(30);

function distanceFromHqInBlocks(passengerStreet){
    return Math.abs(passengerStreet-42);
}

function distanceFromHqInFeet(passengerStreet){
    return (Math.abs(passengerStreet-42)*264);
}

function distanceTravelledInFeet(destination,start){
    return (Math.abs(destination-start) * 264);
}

function calculatesFarePrice(destination,start){
    const distanceFeet = Math.abs(destination-start) * 264;
    let fare

    if (distanceFeet <= 400 ){
        fare = 0;
    } else if (distanceFeet> 400 && distanceFeet <=2000){
        fare = (distanceFeet-400) * 2/100;
    } else if (distanceFeet>2000 && distanceFeet <=2500){
        fare = 25
    }
    else{
        fare = 'cannot travel that far'
    }

    return fare;
}

