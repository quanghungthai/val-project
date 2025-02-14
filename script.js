document.getElementById('yesButton').addEventListener('click', function() {
  document.getElementById('response').classList.remove('hidden');
  document.getElementById('questionbox').classList.add('hidden');
  document.getElementById('bgMusic').play();
  // fetchImagesAndStartGif();
  startFallingHearts();

  // Make "No" button disappear when "Yes" is clicked
  document.getElementById('noButton').style.display = "none";
});

function fetchImagesAndStartGif() {
  fetch('get_images.php')
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        console.error("PHP Error:", data.error);
        return;
      }
      if (data.length > 0) {
        startGifEffect(data);
      } else {
        console.error("No images found!");
      }
    })
    .catch(error => console.error('Error fetching images:', error));
}

// Function to cycle through images like a GIF
function startGifEffect(images) {
  const imgElement = document.getElementById('valentinePic');
  let imgIndex = 0;

  function updateImage() {
    imgElement.src = `images/${images[imgIndex]}`; // Update image source
    imgIndex = (imgIndex + 1) % images.length;
  }

  updateImage(); // Show first image immediately
  setInterval(updateImage, 1000); // Change image every 1 second
}

// "No" Button Hover Effect (Moves away randomly)
const noButton = document.getElementById('noButton');

noButton.addEventListener('mouseover', function() {
  let maxMove = 10000; // Maximum movement distance

  let newX = Math.random() * maxMove * 5 - maxMove; // Move randomly left or right
  let newY = Math.random() * maxMove * 5 - maxMove; // Move randomly up or down

  let buttonRect = noButton.getBoundingClientRect();
  let parentRect = noButton.parentElement.getBoundingClientRect();

  // Ensure the button stays within the card
  let finalX = Math.min(parentRect.width - buttonRect.width, Math.max(0, buttonRect.left + newX - parentRect.left));
  let finalY = Math.min(parentRect.height - buttonRect.height, Math.max(0, buttonRect.top + newY - parentRect.top));

  noButton.style.position = "absolute";
  noButton.style.left = `${finalX}px`;
  noButton.style.top = `${finalY}px`;
});

// Prevent clicking No (just for fun)
noButton.addEventListener('click', function(event) {
  event.preventDefault();
  alert("You can't say no! 😆");
});

// 💖 Falling Hearts Effect
function startFallingHearts() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';

    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `-5vh`;
    heart.style.fontSize = `${Math.random() * 20 + 10}px`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 300);
}