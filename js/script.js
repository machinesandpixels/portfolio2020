// Init on load
document.addEventListener('DOMContentLoaded', init);

// Typewriter effect
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
 
  type() {
    const index = this.wordIndex % this.words.length;
    const fullTxt = this.words[index];
  
    // Check typing span
    if(this.isDeleting){
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    }
    else{
      // Add character
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
  let typing = document.querySelector('.typing');
  let words = JSON.parse(typing.getAttribute('data-words'));
  let wait = typing.getAttribute('data-wait');
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





 
 
 
 

