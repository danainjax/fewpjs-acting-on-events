
let dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#FF69B4";
// document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowLeft") {
//     let leftNumbers = dodger.style.left.replace("px", "");
//     let left = parseInt(leftNumbers, 10);

//     dodger.style.left = `${left - 1}px`;
//   }
// }); 

//moves dodger left, by reading the left keydown event
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
} 
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
}); 
//same as the other function except going the other direction and listening for the right keydown
function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
}); 