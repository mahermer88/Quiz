import { data } from "../data.js"

export function timer() {
  data.seconds++;
  //Logic to determine when to increment next value
  if(data.seconds / 60 === 1){ data.seconds = 0; data.minutes++;
  if(data.minutes / 60 === 1){ data.minutes = 0; data.hours++; 
  }}
  //If seconds/minutes/hours are only one digit, add a leading 0 to the value
  if(data.seconds < 10){data.displaySeconds = "0" + data.seconds.toString();  }
  else{data.displaySeconds = data.seconds;}

  if(data.minutes < 10){data.displayMinutes = "0" + data.minutes.toString();}
  else{data.displayMinutes = data.minutes;}

  //Display updated time values to user
  document.getElementById("timing").innerText = data.displayMinutes + ":" + data.displaySeconds;
}
