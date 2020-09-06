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

class TypeWriter{
  constructor(txtSpan, words, wait = 500){
    this.txtSpan = txtSpan;
    this.words = words;
    this.txt = ''; // current letter in the span
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type()
    this.isDeleting = false;
  }
 
  type(){
    const index = this.wordIndex % this.words.length;
    const fullTxt = this.words[index];
  
    // Check typing span
    if(this.isDeleting){
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    }
    else{
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.txtSpan.innerHTML =`<span class="txt">${this.txt}</span>`;
    let typeSpeed = 200;

    if(this.isDeleting){
      typeSpeed = 30;
      // typeSpeed /= 2;
    }
  
    if(!this.isDeleting && this.txt === fullTxt){
      typeSpeed = this.wait;
      this.isDeleting = true;
    }
    
    else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        // Move on to the next word
        this.wordIndex++;
        // Pause before typing again;
        typeSpeed = 500;
    }
  
    setTimeout(() => this.type(), typeSpeed); 

  }
 
}
// Init on load
document.addEventListener('DOMContentLoaded', init);

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


// Functions for event listeners
function init(){
  const typing = document.querySelector('.typing');
  const words = JSON.parse(typing.getAttribute('data-words'));
  const wait = typing.getAttribute('data-wait');
  new TypeWriter(typing, words, wait);
}

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



 
 
 
 

