// setInterval(() => {
//   let prn = document.querySelector('.principal');
//   // prn.style.opacity = 0;
//   prn.classList.add('cw-opacity')
//   setInterval(() => {
//     prn.classList.add('d-none')
//   }, 500);
//   document.querySelector('body').classList.remove('overflow-hidden')
// }, 4000);

// const contentGenerator = () => {
//   let sky = document.querySelector("#sky");
//   for (let i = 0; i < 300; i++) {
//     let duration = Math.floor(Math.random() * 10);
//     let left = Math.floor(Math.random() * 100);
//     let top = Math.floor(Math.random() * 100);
//     sky.innerHTML += `<div class="start-cw" style="top:${top}vh; left: ${left}vw; animation-duration: ${duration}s;"></div>`;
//   }

//   let skyrot = document.querySelector("#sky-rota");
//   for (let i = 0; i < 500; i++) {
//     let duration = Math.floor(Math.random() * 10);
//     let left = Math.floor(Math.random() * 200);
//     let top = Math.floor(Math.random() * 200);
//     skyrot.innerHTML += `<div class="start2-cw" style="top:${top}vh; left: ${left}vw; animation-duration: ${duration}s;"></div>`;
//   }
// };
// contentGenerator();

// let StaAnimate = document
//   .querySelector("#sky-rota")
//   .animate([{ transform: "rotate(360deg)" }], {
//     duration: 360500,
//     iterations: Infinity,
//   });

// window.onfocus = function () {
//   setInterval(() => {
//     scrollFunction();
//   }, 1000);
//   console.log("no hay focus");
// };

// window.onblur = function () {
//   StaAnimate.pause();
//   console.log("si hay focus");
// };

// window.onscroll = function () {
//   scrollFunction();
// };
let stateSky = false;
const scrollFunction = () => {
  let scroll = document.body.scrollTop;
  if (scroll > 5 || document.documentElement.scrollTop > 5) {
    if (stateSky == false) {
      StaAnimate.pause();
    }
    stateSky = true;
  } else {
    if (stateSky == true) {
      StaAnimate.play();
    }
    stateSky = false;
  }
};

const cw_skill = () => {
  const btn01 = document.querySelector("#cw-btnSkill");
  const btn02 = document.querySelector("#cw-btnProject");
  const body01 = document.querySelector("#cw--skills");
  const body02 = document.querySelector("#cw--projects");
  btn01.classList.add("cw__background--transparent");
  btn02.classList.remove("cw__background--transparent");
  body01.classList.remove('d-none');
  body02.classList.add('d-none');
};

const cw_project = () => {
  const btn01 = document.querySelector("#cw-btnProject");
  const btn02 = document.querySelector("#cw-btnSkill");
  const body01 = document.querySelector("#cw--projects");
  const body02 = document.querySelector("#cw--skills");
  btn01.classList.add("cw__background--transparent");
  btn02.classList.remove("cw__background--transparent");
  body01.classList.remove('d-none');
  body02.classList.add('d-none');
};
