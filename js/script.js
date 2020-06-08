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