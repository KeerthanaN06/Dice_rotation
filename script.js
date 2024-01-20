let images = ["dice-01.png", "dice-2.png", "dice-33.png", "dice-04.png", "dice-05.png", "dice-06.png"];
let dice = document.querySelectorAll("img");

function touch() {
  dice.forEach(function (die) {
    die.classList.add("shake");
  });

  setTimeout(function () {
    dice.forEach(function (die, index) {
      die.classList.remove('shake');
      // let randomNumber = Math.floor(Math.random() * 6);
      // die.setAttribute("src", "/images/" + images[randomNumber]);
    });

    let die1 = Math.floor(Math.random() * 6);
    let die2 = Math.floor(Math.random() * 6);
    document.querySelector("#img1").setAttribute("src", "/images/" + images[die1]);
    document.querySelector("#img2").setAttribute("src", "/images/" + images[die2]);
    document.querySelector("#total").innerHTML = "Your roll is" + " " + ((die1 + 1) + (die2 + 1));
  }, 1000);
}

touch();
