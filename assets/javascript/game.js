
  var computerChoices = ["r", "p", "s"];
  var victor;
  var img;
  alert("User may choose 'P' for Paper, 'R' for Rock, or 'S' for Scissors");
      // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
  alert('Please choose "r", "p", or "s"');
  // This function is run whenever the user presses a key.
  document.onkeyup = function(event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    if (userGuess !== "r" && userGuess !== "s" && userGuess !== "p") {
      alert("HEY MORON! You can only play 'r', 'p', or 's'.");
    } else {
    }
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // Alerts the key the user pressed (userGuess).
    alert("User guess: " + userGuess);
    // Alerts the Computer's guess.
    alert("Computer guess: " + computerGuess);
    if (userGuess === "r" && computerGuess === "p") {
      victor = "Computer"
    } else if (userGuess === "r" && computerGuess === "s") {
      victor = "User";
    } else if (userGuess === "p" && computerGuess === "r") {
      victor = "User";
    } else if (userGuess === "p" && computerGuess === "s") {
      victor = "Computer";
    } else if (userGuess === "s" && computerGuess === "r") {
      victor = "Computer";
    } else if (userGuess === "s" && computerGuess === "p") {
      victor = "User";
    } else {
      victor = "Tie";
    }
    if (victor === "Tie") {
      alert("INCONCIEVABLE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      console.log(document.getElementById('img'))
      document.getElementById('img').style["background-image"] = "url(https://media.giphy.com/media/ohBeIPJ4MEuas/giphy.gif)";
    } else {
      alert("The winner is " + victor);
    }
  };
