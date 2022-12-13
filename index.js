function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    const price = `This one is on me!`;
    return price;
  } else if (distance > 401 && distance < 2000 ) {
    const price = 'That will be twenty bucks.';
    return price;
  } else if (distance > 2000 && distance < 2500) {
    const price = `I will gladly take your thirty bucks.`
    return price;
  } else if (distance >= 2500) {
    const price = `No can do.`;
    return price;
  }

}


function ternaryCheckCity(destination){
  if (destination === `NYC`) {
    const response = `Ok, sounds good.`;
    return response;
  } else {
    const response = `No go.`;
    return response;
  }
}


function switchOnCharmFromTip(tip){
  let goodbye;

  switch(tip) {
    case `generous`:
      goodbye = `Thank you so much.`
      break;
    case `not as generous`:
      goodbye = `Thank you.`
      break;
    default:
      goodbye = `Bye.`
      break;
  }
  return goodbye;
}