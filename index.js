var numberOfDrumButtons = document.querySelectorAll(".drum").length; //this is a variable to capture all drum elements

for(var i = 0; i < numberOfDrumButtons; i++) {  // This is a loop affecting all the buttons

document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);   // 2 - this DOM is calling the function handleClick!
function handleClick() {            // 1 - the function handleClick was created first here!

var buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML);

buttonAnimation(buttonInnerHTML);

}
}

// section 2 - detect keyboard press

document.addEventListener("keydown", function (event) {

  makeSound(event.key);

buttonAnimation(event.key);

});

// section 3 - play right sound for right key

function makeSound (key) {
  switch (key) {
      case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

      case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

      case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio ("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    var snare = new Audio ("sounds/snare.mp3");
    snare.play();
    break;

    case "k":
    var crash = new Audio ("sounds/crash.mp3");
    crash.play();
    break;

    case "l":
    var kick = new Audio ("sounds/kick-bass.mp3");
    kick.play();
    break;

  default: console.log(buttonInnerHTML);
  }

}

// section 4 - code for animation of the buttons

function buttonAnimation (currentKey) {
  var activeButton = document.querySelector("." + currentKey); // act 1 - recognizes which key was pressed

  activeButton.classList.add("pressed"); // act 2 - adds the class "pressed", configured in the CSS page

  setTimeout (function() {  // timer to remove the class pressed, imediatelly erasing the box effect 
    activeButton.classList.remove("pressed");
  }, 100);

}
