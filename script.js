
// SENHA
function checkPassword() {
  const input = document.getElementById("password");

  if (input.value === "230526") {

    document.getElementById("lock-screen").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");

    typeText();

  } else {
    input.classList.add("shake");
    setTimeout(() => input.classList.remove("shake"), 300);
  }
}

/* TEXTO DIGITANDO */
const text = "você não devia ter chegado até aqui... mas já que chegou, agora isso também é seu. eu ainda tenho mania de você.";

let i = 0;

function typeText() {
  const el = document.getElementById("typing");

  function typing() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 35);
    }
  }

  typing();
}

/* PARTÍCULAS */
function createParticles() {
  const colors = ["#7ec8ff", "#ffe66d"];

  for (let i = 0; i < 40; i++) {
    const p = document.createElement("div");
    p.classList.add("particle");

    p.style.left = Math.random() * window.innerWidth + "px";
    p.style.top = Math.random() * window.innerHeight + "px";

    p.style.background = colors[Math.floor(Math.random() * colors.length)];

    p.style.animationDuration = (3 + Math.random() * 5) + "s";

    document.body.appendChild(p);
  }
}

createParticles();