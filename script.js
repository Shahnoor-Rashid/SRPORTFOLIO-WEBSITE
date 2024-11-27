document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  const form = e.target;
  const responseMessage = document.getElementById("responseMessage");
  responseMessage.style.color = "#333";
  responseMessage.textContent = "Sending...";

  // Submit the form data
  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        responseMessage.style.color = "green";
        responseMessage.textContent = "Thank you! Your message has been sent.";
        form.reset();
      } else {
        responseMessage.style.color = "red";
        responseMessage.textContent =
          "Something went wrong. Please try again later.";
      }
    })
    .catch((error) => {
      responseMessage.style.color = "red";
      responseMessage.textContent =
        "An error occurred. Please try again later.";
    });
});
