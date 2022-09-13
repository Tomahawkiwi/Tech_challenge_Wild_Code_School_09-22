const message =
  "Thank you for submitting your request. The King will maybe respond when he'll wake up.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    alert(message);
  });