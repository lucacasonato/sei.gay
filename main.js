const $envelope = document.getElementById("envelope");
$envelope.addEventListener("click", () => {
  $envelope.classList.toggle("open");
});

const name = new URLSearchParams(location.search).get("n");
if (name) {
  document.getElementById("name").textContent = ` ${name}`;
}
