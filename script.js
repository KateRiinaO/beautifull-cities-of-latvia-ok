function button() {
  let name = prompt("What is your name?");
  if (name.length < 1) {
    alert("Enter a valid name!");
    let name = prompt("What is your name?");
  } else {
    let email = prompt("What is your email?");
    if (email.length < 1) {
      alert("Enter a valid email!");
      let email = prompt("What is your email?");
    }
    alert(
      "Thank you, " +
        name +
        " We'll be in touch by email: " +
        email +
        ", meanwhile enjoy planning your trip to beautiful LATVIA ❤🤍❤"
    );
  }
}
let guideButton = document.querySelector(".bookGuide");
guideButton.addEventListener("click", button);
