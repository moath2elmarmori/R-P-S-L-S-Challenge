// select page container
const pageContainer = document.querySelector(".page-container");
// select the overlay
const overlay = document.querySelector(".overlay");
// make function that will generate the overlay and the rules
function generateOverlay() {
  // select the close overlay
  let closeRules = document.querySelector(".close");
  // select the rules container
  let rules = document.querySelector(".rules-container");
  // on click of rules container
  rules.addEventListener("click", function () {
    // add class active to the overlay
    overlay.classList.add("active");
  });
  // on click of close rules
  closeRules.addEventListener("click", function () {
    // remove class active from the overlay
    overlay.classList.remove("active");
  });
}

// select the rock paper scissors page markup
function rockPaperScissorsGenerator() {
  // put the markup of the this game in a variable
  let rockPaperScissorsMarkup = `<div class="container">
    <div class="score-container">
    <div class="score">
        <div class="game-name">
        <p>rock</p>
        <p>paper</p>
        <p>scissors</p>
        </div>
        <div class="the-score">
        <p>score</p>
        <h1 class="score-num">${scoring}</h1>
        </div>
    </div>
    </div>
    <div class="component-container">
    <div class="r-p-s-component">
        <div class="choose three-possibilties" id="r-p-s">
        <div class="img-cont paper" data-select="paper">
            <img src="images/icon-paper.svg" alt="" />
        </div>
        <div class="img-cont rock" data-select="rock">
            <img src="images/icon-rock.svg" alt="" />
        </div>
        <div class="img-cont scissors" data-select="scissors">
            <img src="images/icon-scissors.svg" alt="" />
        </div>
        </div>
    </div>
    </div>
    </div>`;
  // create a new div 
  let gameDiv = document.createElement("div");
  // add class game to the created div
  gameDiv.classList.add("game");
  // make the innerHTML of the new div = the markup of the game
  gameDiv.innerHTML = rockPaperScissorsMarkup;
  // reset the page container's innnerHTML
  pageContainer.innerHTML = "";
  // append the new div to the page container
  pageContainer.append(gameDiv);
  // add class [r-p-s-game] to the page container
  pageContainer.classList.add("r-p-s-game");
  // select the rules container
  let rules = document.querySelector(".rules-container");
  // remove class [d-none] from the rules container
  rules.classList.remove("d-none");
  // call the generate overlay function
  generateOverlay();
  // call our big function
  wow();
}

// rockPaperScissorsGenerator();

// generate the rock paper scissors lizard spock page
function rockPaperScissorsLizardSpockGenerator() {
  // put the markup of the game inside  a varialbe
  let rockPaperScissorsLizardSpockMarkup = `<div class="container">
      <div class="score-container">
        <div class="score">
          <div class="game-name">
            <p>rock</p>
            <p>paper</p>
            <p>scissors</p>
            <p>lizard</p>
            <p>spock</p>
          </div>
          <div class="the-score">
            <p>score</p>
            <h1 class="score-num">${scoring}</h1>
          </div>
        </div>
      </div>
        <div class="component-container">
        <div class="r-p-s-l-s-component">
          <div class="choose three-possibilties" id="r-p-s">
            <div class="img-cont paper" data-select="paper">
              <img src="images/icon-paper.svg" alt="" />
            </div>
            <div class="img-cont rock" data-select="rock">
              <img src="images/icon-rock.svg" alt="" />
            </div>
            <div class="img-cont scissors" data-select="scissors">
              <img src="images/icon-scissors.svg" alt="" />
            </div>
            <div class="img-cont lizard" data-select="lizard">
              <img src="images/icon-lizard.svg" alt="" />
            </div>
            <div class="img-cont spock" data-select="spock">
              <img src="images/icon-spock.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>`;
    // create a new div 
  let gameDiv = document.createElement("div");
  // add class game to the created div
  gameDiv.classList.add("game");
  // make the innerHTML of the new div = the markup of the game
  gameDiv.innerHTML = rockPaperScissorsLizardSpockMarkup;
  // reset the page container's innnerHTML
  pageContainer.innerHTML = "";
  // append the new div to the page container
  pageContainer.append(gameDiv);
  // add class [r-p-s-l-s-game] to the page container
  pageContainer.classList.add("r-p-s-l-s-game");
  // select the rules container
  let rules = document.querySelector(".rules-container");
  // remove class [d-none] from the rules container
  rules.classList.remove("d-none");
  // call the generate overlay function
  generateOverlay();
  // change the rules image to the lizard spock rules image
  overlay.querySelector(".rules-image").src = "images/image-rules-bonus.svg";
  // call our big function
  wow();
}

// select the choosing game
let choosingGame = document.querySelectorAll(".choosing");
// loop over them
choosingGame.forEach((game) => {
  // on every click on any game
  game.addEventListener("click", function (e) {
    // if the clicked option is the rock paper scissors
    if (e.currentTarget.classList.contains("r-p-s-choosing")) {
      // call the function that will generate this game
      rockPaperScissorsGenerator();
      // if the choosing game is rock paper scissors lizard spock
    } else if (e.currentTarget.classList.contains("r-p-s-l-s-choosing")) {
      // call the function that will generate this game
      rockPaperScissorsLizardSpockGenerator();
    }
  });
});

// make our logical data an array of objects
let selections = [
  {
    name: "rock",
    beats: ["scissors", "lizard"],
  },
  {
    name: "paper",
    beats: ["rock", "spock"],
  },
  {
    name: "scissors",
    beats: ["paper", "lizard"],
  },
  {
    name: "lizard",
    beats: ["paper", "spock"],
  },
  {
    name: "spock",
    beats: ["scissors", "rock"],
  },
];

// make a function that will come return a random selection from the [rock, paper scissors or [lizard, spock]]
function rockPaperScissorsComputerSelection(numberOfPossiblities) {
  // make a variable that will come with a random number form 0 - 2;
  let randomNumber = Math.floor(Math.random() * numberOfPossiblities);
  // return the object of the selected element from the selections
  return selections[randomNumber];
}

// make our big function that will handle the clicking of the img
function wow() {
  // select the images cont
  let imagesCont = document.querySelectorAll(".img-cont");
  // loop over the images
  imagesCont.forEach((img) => {
    // add an event listener to the img
    img.addEventListener("click", function (e) {
      // make the clicked event's dataset.select in a variable
      let selectionName = e.currentTarget.dataset.select;
      // loop over the selections and return the object that will matches it's name to the cliced img.dataset.select
      let yourSelection = selections.find(
        (selection) => selection.name === selectionName
      );
      // check if the page container had the class [r-p-s-game]
      if (pageContainer.classList.contains("r-p-s-game")) {
        // if so, call isWinner function and pass to it (the object of the cliced img, the object the random selection of the computer)
        isWinner(yourSelection, rockPaperScissorsComputerSelection(3));
        // check if the page container contais the class [r-p-s-l-s-game]
      } else if (pageContainer.classList.contains("r-p-s-l-s-game")) {
        // // check if the page container contais the class [r-p-s-l-s-game]
        isWinner(yourSelection, rockPaperScissorsComputerSelection(5));
      }
      // call the play again function
      playAgain()
    });
  });
}

// make the socring = 0 in the begining
let scoring = 0

// make the function isWinner that expect (your selection's object, the computer object selection)
function isWinner(selection, oponentSelection) {
  // check if the  name of your selection's object name = computer's selection object name 
  if (selection.name === oponentSelection.name) {
    // call function winner and pass to it(your selection, opponentSelection, "its a draw" [the result display to the user])
    winner(selection, oponentSelection, "it's a draw")
    // if the your selection's object beats[0] or beats[1] === computer selection's name
  } else if (
    selection.beats[0] === oponentSelection.name ||
    selection.beats[1] === oponentSelection.name
  ) {
    // call function winner and pass to it(your selection, opponentSelection, "you win" [the result display to the user])
    winner(selection, oponentSelection, "you win");
    // select the element of your selection
    let winElement = document.querySelector(".result-display .picking:first-child");
    // call the addWinnerClass and pass to it the element of you selection
    addwinnerClass(winElement);
    // call handle score function and pass to it "increase"
    handleScore("increase")
  // if the computer selection's object beats[0] or beats[1] === your selection's name
  } else if (
    oponentSelection.beats[0] === selection.name ||
    oponentSelection.beats[1] === selection.name
  ) {
    // call function winner and pass to it(your selection, opponentSelection, "you lose" [the result display to the user])
    winner(selection, oponentSelection, "you lose");
    // select the element of the computer selection
    let winElement = document.querySelector(".result-display .picking:last-child");
    // call the addWinnerClass and pass to it the element of the computer selection
    addwinnerClass(winElement);
    // call handle score function and pass to it "decrease"
    handleScore("decrease")
  }
}

// make a winner function that will accept your selection and the computer selection and the result display
function winner(selection, computerSelection, res) {
  // select the component container
  let component = document.querySelector(".component-container");
  // add class [d-none] to the component to [display: none;] to it
  component.classList.add("d-none");
  // select the game element
  let game = document.querySelector(".game");
  // make the game element's innerHTML = the resultDisplay function and pass to it your selection and the computer selection and the result display
  game.innerHTML += resultDisplay(selection.name, computerSelection.name, res);
}


// make a result display function that expect your selection name and the computer selection name and the result
function resultDisplay(selectionName, computerSelectionName, result) {
  // make the result markup in a variable
  let resultMarkup = `<div class="container">
<div class="result-display">
  <div class="you picking">
    <p>you picked</p>
    <div class="img-cont ${selectionName}">
      <img src="images/icon-${selectionName}.svg" alt="" />
    </div>
  </div>
  <div class="the-result-container">
    <h1><span class="the-reslut">${result}</span></h1>
    <p class="play-again">play again</p>
  </div>
  <div class="computer picking">
    <p>the house picked</p>
    <div class="img-cont ${computerSelectionName}">
      <img src="images/icon-${computerSelectionName}.svg" alt="" />
    </div>
  </div>
</div>
</div>`;
// return the result markup in the end
return resultMarkup;
}
// make a function that will handle score depending on the situation [increase, decrease]
function handleScore(situation) {
  // select the score-num
  let scoreHolder = document.querySelector(".score-num");
  // i think the rest of this function's code is veeeeery clear
  if (situation === "increase") {
    scoreHolder.innerHTML = ++scoring
  } else if (situation === "decrease") {
    scoreHolder.innerHTML = --scoring;
  }
}

// make a funciton that will add winner class to the passing parameter
function addwinnerClass(winner) {
  winner.classList.add("winner");
}

// make a funciton that will make you can play again
function playAgain() {
  // select the play again element
  let playAgainEle = document.querySelector(".play-again");
  // add an evengt listener to it
  playAgainEle.addEventListener("click", function () {
    // if the pgae container has class [r-p-s-game]
    if (pageContainer.classList.contains("r-p-s-game")) {
      // generate the rock paper scissors function again
      rockPaperScissorsGenerator();
      // if the pgae container has class [r-p-s--l-s-game]
    } else if (pageContainer.classList.contains("r-p-s-l-s-game")) {
      // generate the rock paper scissors lizard spock function again
      rockPaperScissorsLizardSpockGenerator();
    }
  })
}