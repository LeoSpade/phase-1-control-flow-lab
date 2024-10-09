function scuberGreetingForFeet(distance){
  if (distance < 400) {
    return "This one is on me!"
  }
  else if (distance < 2000) {
    return "That will be twenty bucks."
  }
  else if (distance < 2500) {
    return "I will gladly take your thirty bucks."
  }
  else if (distance > 2500) {
    return "No can do."
  }
  // Write your code here!
}

function ternaryCheckCity(city) {
    return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){

  let charm;

  switch (tip) {
    case "generous":
      charm = "Thank you so much.";
      break;
    case "not as generous":
      charm = "Thank you.";
      break;
    default:
      charm = "Bye."
      break;
  }
  return charm
}

// const ternaryCheckCity = "NYC": "Ok, sounds good."
