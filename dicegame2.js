function playGame(isEven){

	let fourSidedValue = rollDice(4);
	let sixSidedValue = rollDice(6);
	let eightSidedValue = rollDice(8);
	let tenSidedValue = rollDice(10);
	let twelveSidedValue = rollDice(12);
	let twentySidedValue = rollDice(20);

	let total = addNumbersRolled (fourSidedValue, sixSidedValue, eightSidedValue, tenSidedValue, twelveSidedValue, twentySidedValue);
	let totalIsEven = determineIfOddOrEven (total);
	
	compareRollTotalWithPrediction(isEven, totalIsEven, total);
}

function compareRollTotalWithPrediction (isEven, totalIsEven, total){
	
	if (isEven === totalIsEven) {
 		alert("Congratulations! Your prediction was correct. The sum of your roll is " + total + ".");
  	}
  	else {
 		alert("Sorry, your prediction was incorrect. The sum of your roll is " + total + ".");
  	}	
}

function rollDice (numberofSides){
	let numberRolled = Math.floor((Math.random() * numberofSides) + 1);
	console.log (numberRolled);
	return numberRolled;
}

function addNumbersRolled (fourSidedValue, sixSidedValue, eightSidedValue, tenSidedValue, twelveSidedValue, twentySidedValue){
	let total = 0; 
	total = (fourSidedValue + sixSidedValue + eightSidedValue + tenSidedValue + twelveSidedValue + twentySidedValue);
	console.log (total);
	return total;
	}

function determineIfOddOrEven (total){
	let totalIsEven;
	if (total % 2 === 0) {
		totalIsEven = true;
	}
	 
	else {
		totalIsEven = false;
	}
		console.log (totalIsEven);
		return totalIsEven;
}

function getRadioValue (odd, even){
     let radios = document.getElementById("even");
     console.log(radios);
     for(let i = 0; i < radios.length; i++){
     	radios[i].onclick = radioValue (); {
     		document.getElementById("id").innerValue = radioValue;
     	}
     	console.log (radioValue);
		return radioValue;
     }
 }		