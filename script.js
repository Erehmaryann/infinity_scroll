// Global Variables
const imageContainer = document.getElementById("imageContainer");
const loader = document.getElementById("loader");

let ready = false;
let loadedImages = 0;
let totalImages = 0;
let photosArray = [];

//Unsplash API
let count = 5;
const apiKey = "RYnkyRnjFT192RS26aNbAiAl8xDkz6G6DaRoDcIVl_c";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Check when each image has loaded
function imageLoaded() {
  loadedImages++;
  if (loadedImages === totalImages) {
    ready = true;
    loader.hidden = true;
    count = 30;
  }
}

// Helper function to setAttributes on an element
function setAttributes(element, attributes) {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create Elements for links and photos, Add to DOM
function displayPhotos() {
  loadedImages = 0;
  // set totalImages to the length of the array
  totalImages = photosArray.length;
  // Run function for each obj in photosArray
  photosArray.forEach((photo) => {
    // Create a link to unsplash
    const link = document.createElement("a");
    // link.setAttribute("href", photo.links.html);
    // link.target = "_blank";
    setAttributes(link, {
      href: photo.links.html,
      target: "_blank",
    });
    // Create an image tag to hold the image
    const image = document.createElement("img");
    // image.src = photo.urls.regular;
    // image.setAttribute("alt", photo.alt_description);
    // image.title = photo.alt_description;
    setAttributes(image, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // Event Listener, check when each image has loaded
    image.addEventListener("load", imageLoaded);
    // Put image into link, and then put both into the imageContainer
    link.appendChild(image);
    imageContainer.appendChild(link);
  });
}
// Get random photo from Unsplash API
async function getRandomPhoto() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (e) {
    //catch error
  }
}

// On load
getRandomPhoto();

// Check to see if scrolling is near the bottom of the page, if so, load more photos
window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getRandomPhoto();
  }
});
