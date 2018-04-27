//document.querySelector() allows us to access the FIRST HTML element on the page that can be identified with the given CSS selector.
//document.querySelectorAll() will give us an array-like LIST of elements that can be identified with the given CSS selector.

let cashTotal = parseInt($('#cashTotal').text());

//The addEventListener() function allows to run a javascript function when a specific event occurs on the HTML page (such as a mouse-click, or a hover over).
//addEventListener() takes two arguments, the first being a string that specifies what event we want to "listen" to, and the second being the function we want to run.
//Notice that the function passed in as an argument is not invoked (aka there's no parenthesis next to the name), but rather the function name alone is given.
$('#smallQuest').on('click', takeSmallQuest);
$('#longQuest').on('click', takeLongQuest);
$('#bossFight').on('click', takeBossFight);

//TO DO: alter the behavior of the takeSmallQuest, takeLongQuest, and takeBossFight functions so that they randomly add a value within their defined ranges to your total cash!
function randGold(q){
  let rm = 0;
  // Check if it is sq, lq, or bf
  if (q === `sq`){
    rm = Math.floor(Math.random()*10) + 10;
  }
  else if (q === `lq`){
    rm = Math.floor(Math.random()*20) + 30;
  }
  else {
    rm = Math.floor(Math.random()*30) + 70;
  }

  console.log(rm);

  return rm;
}

function takeSmallQuest(){
  console.log(`Took small quest!`);

  cashTotal += randGold(`sq`);
  $(`#cashTotal`).text(cashTotal);
}

function takeLongQuest(){
  console.log(`Took long quest!`);

  cashTotal += randGold(`lq`);
  $(`#cashTotal`).text(cashTotal);
}

function takeBossFight(){
  console.log(`Took boss fight!`);

  cashTotal += randGold(`bf`);
  $(`#cashTotal`).text(cashTotal);
}
//HINT: All visible elements on HTML web page will be represented as strings when they are accessed using javascript
//HINT: To get the text value of the cash that's currently on the page, access it's inner text using cashLabel.innerText
//HINT: To set the text value of the cash that's currently on the page, try using cashLabel.innerText = '(some other value)'
