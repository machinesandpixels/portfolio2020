// Check if browser is Edge
if (/Edge/.test(navigator.userAgent)) {
  alert('Hello Microsoft User!');
}

const letters = document.querySelector('.typing');

let i = 0;
let text = 'Hi, I am a self taught developer and bootcamp grad.';
let speed = 80;

function typeWriter() {
    if (i < text.length) {
      letters.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

typeWriter();