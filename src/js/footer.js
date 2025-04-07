const emailInput = document.getElementById("emailInput");
const emailMessage = document.getElementById("emailMessage");
const commentInput = document.querySelector(".footer-comment");
const sendBtn = document.querySelector(".send-btn");
const modal = document.querySelector(".backdrop");
const modalCloseBtn = document.querySelector(".modal-btn");

// validation 
emailInput.addEventListener("input", () => {
  const email = emailInput.value;
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  emailMessage.classList.remove("success", "error");

  if (email === "") {
    emailMessage.textContent = "";
    emailMessage.style.borderTop = "none";
  } else if (valid) {
    emailMessage.textContent = "Success!";
    emailMessage.classList.add("success");
  } else {
    emailMessage.textContent = "Invalid email, try again";
    emailMessage.classList.add("error");
  }
});

// comment with dots
commentInput.addEventListener("input", () => {
  const maxChars = 100;
  if (commentInput.value.length > maxChars) {
    commentInput.value = commentInput.value.slice(0, maxChars) + "...";
  }
});

// input form
sendBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const comment = commentInput.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!email || !valid) {
    alert("Please enter a valid email.");
    return;
  }

  if (!comment) {
    alert("Please leave a comment.");
    return;
  }

  try {
    const response = await fetch("/api/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message }),
    });

    if (!response.ok) throw new Error("Server error");

    // show modal window and clear the form
    modal.classList.add("is-open");
    emailInput.value = "";
    commentInput.value = "";
    emailMessage.textContent = "";
    emailMessage.classList.remove("success", "error");
  } catch (error) {
    alert("Something went wrong. Please check your inputs and try again.");
  }
});

// to close modal
modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("is-open");
});