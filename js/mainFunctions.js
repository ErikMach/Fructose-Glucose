const foods = {
  "apple" : {types: {
		"Red Delicious" : {fructose:0.073, glucose: 0.03},
		"Granny Smith" : {fructose:0.023, glucose: 0.011},
		"Fuji" : {fructose:0.077, glucose: 0.033},
		"Royal Gala" : {fructose:0.069, glucose: 0.023},
		"Golden Delicious" : {fructose:0.052, glucose: 0.020},
		"Pink Lady" : {fructose:0.048, glucose: 0.014},
		}, servingSize: "150g"},
  "banana" : {types: [], servingSize: "150g", fructose: 0.0231, glucose: 0.0238},
  "mandarin" : {types: [], servingSize: "150g", fructose: 0.0222, glucose: 0.0198},
};

function listenType(e) {
  var dropDown = document.getElementById("DROPDOWN" + e.id);
  for (i=0; i<dropDown.children.length; i++) {
    if (VAR.indexOf(dropDown.children[i].innerHTML) == -1) {
      dropDown.removeChild(dropDown.children[i]);
    }
  }
  for (x in foods) {
    if (x.indexOf(e.value) !== -1) {
      var suggestion = document.createElement('p');
      suggestion.className = "dropDownSugg";
      suggestion.innerHTML = x;
      suggestion.setAttribute("onclick", "addFood(" + x + ")");
      dropDown.appendChild(suggestion);
    }
  }
}

function addFood(food) {
  var newCard = document.createElement('div');
      newCard.className = "foodCard";
      newCard.id = food;
  var img = document.createElement('img');
      img.src = "./res/img/" + food + ".png";
  var cardTitle = document.createElement('h2');
      cardTitle.innerHTML = food;
  var cardType = document.createElement('h3');
      cardType.innerHTML = "Type:";
  var cardAmount = document.createElement('h3');
      cardAmount.innerHTML = "Amount:";
  var cardIn1 = document.createElement('input');
      cardIn1.value = "Yeet";
  var cardIn2 = document.createElement('input');
      cardIn2.value = 5;
  var cardIn3 = document.createElement('input');
      cardIn3.value = "g";
  newCard.appendChild(img);
  newCard.appendChild(cardTitle);
  newCard.appendChild(cardType);
  newCard.appendChild(cardIn1);
  newCard.appendChild(cardAmount);
  newCard.appendChild(cardIn2);
  newCard.appendChild(cardIn3);
  document.getElementsByClassName("cardContainer")[0].appendChild(newCard);
/*
get input
create card
add image
add heading
add Type and dropdown menu (if applicable)
add Amount and input (input value = 1 serving) add input for g/mg/oz/floz/cups/servings
*/
}
