const letters = document.querySelector('.typing');

let i = 0;
let text = 'Hi, I am a self taught developer and bootcamp grad.';
let speed = 100;

function typeWriter() {
    if (i < text.length) {
      letters.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

typeWriter();