//switch statements （kinda like if statement)
function caseInSwitch(val) {
  var answer = "";
  switch (
    val //find if statement
  ) {
    case 1:
      answer: "aplpha";
      break; //run stop
    case 2:
      answer = "beta";
      break;
  }

  return answer;
}

console.log(caseInSwitch(2));

//default option in switch statement (similar to else)
//break(end the statement) when the condition met
//default(else statement)
//if we add return we don't need to

function caseOfStuff(val) {
  var answer = "";
  switch (
    val //find if statement
  ) {
    case "a":
      answer: "apple";
      break; //run stop
    case "b":
      answer = "bird";
      break;
    default:
      answer = "stuff";
      break;
  }

  return answer;
}

console.log(caseOfStuff("a"));

//Multiple indentical options in switch statements
function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}

console.log(sequentialSizes(1));

//Replacing if else chains with switch
function chaintoSwitch(val) {
  var answer = "";
  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this month";
  } else if (val === 9) {
    answer = "Ate Nine";
  }

  return answer;
}

//change to switch
function chaintoSwitch(val) {
  var answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this month";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  return answer;
}

let key = 300;
switch (key) {
  case 100:
    console.log("考了100分");
    break;
  case 200:
    console.log("考了200分");
    break;
  case 300:
    console.log("考了300分");
    break;
  default:
    console.log("沒有來考試");
    break;
}
