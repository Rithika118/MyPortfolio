const contactForm = document.getElementById("contact-form");
const formSuccess = document.getElementById("form-success");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    clearErrors();

    let isValid = true;

    if (!name.value.trim()) {
      showError("name-error", "Please enter your name.");
      isValid = false;
    }

    if (!email.value.trim()) {
      showError("email-error", "Please enter your email.");
      isValid = false;
    } else if (!email.value.includes("@")) {
      showError("email-error", "Please enter a valid email address.");
      isValid = false;
    }

    if (!message.value.trim()) {
      showError("message-error", "Please enter a message.");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${name.value.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.value.trim()}\nEmail: ${email.value.trim()}\n\nMessage:\n${message.value.trim()}`
    );

    window.location.href = `mailto:paduchuririthika@gmail.com?subject=${subject}&body=${body}`;

    formSuccess.classList.remove("hidden");
    contactForm.reset();
  });
}

function showError(id, text) {
  const errorElement = document.getElementById(id);
  if (errorElement) {
    errorElement.textContent = text;
    errorElement.classList.remove("hidden");
  }
}

function clearErrors() {
  ["name-error", "email-error", "message-error"].forEach((id) => {
    const errorElement = document.getElementById(id);
    if (errorElement) {
      errorElement.textContent = "";
      errorElement.classList.add("hidden");
    }
  });

  if (formSuccess) {
    formSuccess.classList.add("hidden");
  }
}
