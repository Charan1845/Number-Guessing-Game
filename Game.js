  const winSound = new Audio('happy-happy-happy-cat.mp3');
  const wrongSound = new Audio('slap-sound-effect-free.mp3');
  let number = Math.floor(Math.random() * 20) + 1;
  let attempts = 0;
  const Maxattempts = 5;

  function guess() {
    if (attempts >= Maxattempts) {
      document.getElementById('message').textContent = "No More Chances! The correct number was: " + number;
      return;
    }

    const input = document.getElementById('guessInput');
    let num = parseInt(input.value);

    if (isNaN(num) || num < 1 || num > 20) {
      document.getElementById('message').textContent = "Invalid Number! Please enter a number between 1 and 20.";
      return;
    }

    attempts++;
    const attemptsLeft = Maxattempts - attempts;
    document.getElementById('attempts').textContent = "Attempts left: " + attemptsLeft;

    const diff = Math.abs(number - num);

    if (number === num) {
      winSound.play();
      document.getElementById('message').textContent = "🎉 CONGRATULATIONS! YOU WON!";
    } else {
      wrongSound.play();

      if (diff <= 5) {
        document.getElementById('message').textContent = "Too close (within 5). Try again!";
      } else if (diff > 10) {
        document.getElementById('message').textContent = "Too far. Try again!";
      } else if (number > num) {
        document.getElementById('message').textContent = "Your guess is small. Try again!";
      } else {
        document.getElementById('message').textContent = "Your guess is high. Try again!";
      }
    }

    input.value = ""; 
    input.focus();

    if (attempts >= Maxattempts && number !== num) {
      document.getElementById('message').textContent = "No More Chances! The correct number was: " + number;
    }
  }