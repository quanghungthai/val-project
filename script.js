document.getElementById('yesButton').addEventListener('click', function() {
  document.getElementById('response').classList.remove('hidden');
  document.getElementById('bgMusic').play();
  fetchImagesAndStartGif();
});

const noButton = document.getElementById('noButton');

noButton.addEventListener('mouseover', function() {
  let rect = noButton.getBoundingClientRect();
  let maxMove = 20; // Maximum movement distance

  let newX = rect.left + (Math.random() * maxMove * 2 - maxMove);
  let newY = rect.top + (Math.random() * maxMove * 2 - maxMove);

  newX = Math.min(window.innerWidth - noButton.offsetWidth, Math.max(0, newX));
  newY = Math.min(window.innerHeight - noButton.offsetHeight, Math.max(0, newY));

  noButton.style.position = "absolute";
  noButton.style.left = `${newX}px`;
  noButton.style.top = `${newY}px`;
});

noButton.addEventListener('click', function(event) {
  event.preventDefault();
  alert("Are you sure?");
});

// Fetch images from PHP and start GIF effect
function fetchImagesAndStartGif() {
  fetch('get_images.php')
    .then(response => response.json())
    .then(images => {
      if (images.length > 0) {
        startGifEffect(images);
      }
    })
    .catch(error => console.error('Error loading images:', error));
}

// Function to cycle through images like a GIF
function startGifEffect(images) {
  const imgElement = document.getElementById('valentinePic');
  let imgIndex = 0;
  
  setInterval(() => {
    imgElement.src = `img/${images[imgIndex]}`;
    imgIndex = (imgIndex + 1) % images.length;
  }, 1000);
}
