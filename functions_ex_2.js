"use strict";{

 let position = 0;
 let direction = "positive";

 const moveForward = (distance) => {
  if (direction === "positive") {
   position += distance;
  } else {
    position -= distance;
  }
}

 const moveBackward = (distance) => {
  if (direction === "positive") {
   position -= distance;
  } else {
    position += distance;
  }
}
 const turnAround = () => {
   if (direction === 'positive') {
    direction = "negative";
   } else {
    direction = "positive";
   }
 }

 const printLocation = () => console.log (position);

 moveForward(5);
 moveBackward(3);
 printLocation();
 turnAround();
 moveForward(10);
 moveBackward(5);
 printLocation();
}