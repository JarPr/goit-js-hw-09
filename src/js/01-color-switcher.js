function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const bodyColor = document.querySelector('body');
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
  
startButton.addEventListener("click", colorChange);
stopButton.addEventListener("click", stopChange);

let RandomColor;
  
function colorChange () {
 RandomColor = setInterval(() => {
 bodyColor.style.backgroundColor = getRandomHexColor();
    }, 1000)
      
    startButton.disabled = true ;
    stopButton.disabled = false;
}
    
function stopChange() { 
 clearInterval(RandomColor);
 startButton.disabled = false;
 stopButton.disabled = true;
 }