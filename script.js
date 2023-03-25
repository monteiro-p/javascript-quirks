var submitAnswer = function (inputId) {
  let input = document.getElementById(inputId);
  evaluate(input);
};

var evaluate = function(input) {
  let isCorrect = undefined;

  switch (input.id) {
    case 'inputEx1': 
      isCorrect = input.value === '1';
      break;
    case 'inputEx2': 
      isCorrect = input.value.replace(/\s/g, '') === "{'x':1}";
      break;
    case 'inputEx3': 
      isCorrect = input.value.replace(/\s/g, '') === "{'x':2}";
      break;
    default:
      break;
  };

  if (isCorrect === undefined) {
    return;
  }

  input.className = isCorrect ? "correct" : "incorrect";
  alert(isCorrect ? "correct" : "incorrect");
};

var showOrHideAnswer = function(button, inputId) {
  let input = document.getElementById(inputId);
  let value = '';

  input.className = "";

  if (button.innerHTML === 'Hide Answer') {
    input.value = value;
    button.innerHTML = 'Show Answer';
    return;
  }

  switch (input.id) {
    case 'inputEx1': 
      value = '1';
      break;
    case 'inputEx2': 
      value = "{ 'x': 1 }";
      break;
    case 'inputEx3': 
      value = "{ 'x': 2 }";
      break;
    default:
      break;
  };
  
  input.value = value;
  button.innerHTML = 'Hide Answer';
};

var conclusionEx1 = function() {
  //alert('the value of b is 1');
  console.log("It's always pass by value. But for objects, the value of the variable is a reference. So, when you pass an object and change its members, those changes will be replicated by reference.")
};