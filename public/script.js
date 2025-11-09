document.getElementById("subscription-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;

  const response = await fetch("/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  });

  const result = await response.json();
  document.getElementById("message").textContent = result.message;
});
