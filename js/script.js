// Check if browser is Edge
if (/Edge/.test(navigator.userAgent)) {
  alert('Hello Microsoft User!');
  let video = document.getElementById("video");
  // video.style.minHeight = '100%';
  // video.style.minWidth = "100%";
  // video.style.height = auto;
  // video.style.weight = auto;
  // video.style.left = '50%';
  // video.style.top = '50%';
  // video.style.transform = 'translate(-50%, -50%)';
     /* min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); */
}

// Scrolls to about section after Six seconds.
// setTimeout(()=> { scrollDown(1860); }, 6000);
function x(){
  setTimeout(()=> { alert('hello'); }, 6000);
}

// called when the window is scrolled.
window.onscroll = (e) => {  
  
  if (e){
    console.log(e);
    console.log('Scrolled!');
    return
  }
  
  x();
} 

const letters = document.querySelector('.typing');
const about = document.querySelector('.about');
const icon = document.querySelector('.icon');

// Event Listeners
about.addEventListener('click', animateAbout);

document.querySelectorAll('.projects-btn').forEach(btn => {
  btn.addEventListener('mouseover', addPulse);
  btn.addEventListener('mouseout', removePulse);
});
document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('mouseover', addPulse);
  icon.addEventListener('mouseout', removePulse);
});

// Typing effect
let i = 0;
let text = 'Hi, I am a self taught developer and bootcamp grad.';
let speed = 80;

const typeWriter = () => {
    if (i < text.length) {
      letters.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
}

typeWriter();

// Functions for event listeners
function animateAbout(){
  let p = document.querySelector('.about-text');
  let img = document.querySelector('.bio-image');
  let icons = document.querySelector('.icon--wrapper');
  let btn = document.querySelector('.projects-btn');
  p.classList.add("animate__animated");
  p.classList.add("animate__fadeInLeft");
  img.classList.add("animate__animated");
  img.classList.add("animate__fadeInRight");
  icons.classList.add("animate__animated");
  icons.classList.add("animate__fadeInLeft");
  btn.classList.add("animate__animated");
  btn.classList.add("animate__fadeInRight");
}

function addPulse(event){
  let element = event.target;
  element.classList.add("animate__animated");
  element.classList.add("animate__pulse");
  element.classList.add("animate__fast");
}

function removePulse(event){
  let element = event.target;
  element.classList.remove("animate__animated");
  element.classList.remove("animate__pulse");
  element.classList.remove("animate__fast");
}

// function scrollDown(seconds) {
//   window.scrollBy(0,seconds);
// }
