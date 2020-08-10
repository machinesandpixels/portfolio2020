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

const letters = document.querySelector('.typing');
const about = document.querySelector('.about');
const icon = document.querySelector('.icon');

// Event Listeners
about.addEventListener('click', animateAbout);
icon.addEventListener('mouseover', addPulse);
icon.addEventListener('mouseout', removePulse);
document.querySelectorAll('.projects-btn').forEach(btn => {
  btn.addEventListener('mouseover', addPulse);
  btn.addEventListener('mouseout', removePulse);
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
  let h1 = document.querySelector('.bioText > p');
  let img = document.querySelector('.bioImage');
  h1.classList.add("animate__animated");
  h1.classList.add("animate__fadeInLeft");
  img.classList.add("animate__animated");
  img.classList.add("animate__fadeInRight");
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