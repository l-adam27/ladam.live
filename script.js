/* ===========================
   REVEAL AO ROLAR
=========================== */
const elements = document.querySelectorAll(".reveal");

function onScroll() {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", onScroll);
onScroll();

/* ===========================
   PROJETOS
=========================== */
const projects = [
  {
    title: "KeyFlow — Programmable Macro Keyboard",
    desc: "Customizable keyboard with knob, own software and entirely programmable layout.",
    img: "placeholder_1.jpg",
    github: "https://github.com/l-adam27/KeyFlow",
    page: "keyflow.html"
  },
  {
    title: "PROJETO 2",
    desc: "Descrição curta do projeto 2 aqui.",
    img: "placeholder_2.jpg",
    github: "https://github.com/seu-usuario/ladam-live",
    page: "projeto2.html"
  }
];

/* ===========================
   ELEMENTOS
=========================== */
let index = 0;

const projImg   = document.getElementById("projImg");
const projTitle = document.getElementById("projTitle");
const projDesc  = document.getElementById("projDesc");

const prevBtn   = document.getElementById("prevBtn");
const nextBtn   = document.getElementById("nextBtn");

const githubBtn      = document.getElementById("githubBtn");
const projectPageBtn = document.getElementById("projectPageBtn");

/* ===========================
   FUNÇÃO PRINCIPAL
=========================== */
function renderProject() {
  const p = projects[index];

  projImg.src = p.img;
  projImg.alt = p.title;

  projTitle.textContent = p.title;
  projDesc.textContent  = p.desc;
}

/* ===========================
   NAVEGAÇÃO
=========================== */
if (prevBtn) {
  prevBtn.onclick = () => {
    index = (index - 1 + projects.length) % projects.length;
    renderProject();
  };
}

if (nextBtn) {
  nextBtn.onclick = () => {
    index = (index + 1) % projects.length;
    renderProject();
  };
}

/* ===========================
   BOTÕES
=========================== */
if (githubBtn) {
  githubBtn.onclick = () => {
    window.open(projects[index].github, "_blank");
  };
}

if (projectPageBtn) {
  projectPageBtn.onclick = () => {
    window.location.href = projects[index].page;
  };
}

/* ===========================
   INICIALIZA
=========================== */
renderProject();
