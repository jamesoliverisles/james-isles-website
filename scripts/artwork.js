// Gallery Array
const galleries = {
  thesis: [
    { id: "honors3", src: "../assets/images/thesis/honors3.png" },
    { id: "honors4", src: "../assets/images/thesis/honors4.png" },
    { id: "honors5", src: "../assets/images/thesis/honors5.png" },
    { id: "honors6", src: "../assets/images/thesis/honors6.png" },
    { id: "honors7", src: "../assets/images/thesis/honors7.png" },
    { id: "honors8", src: "../assets/images/thesis/honors8.png" },
    { id: "honors9", src: "../assets/images/thesis/honors9.png" },
    { id: "honors10", src: "../assets/images/thesis/honors10.png" },
    { id: "honors11", src: "../assets/images/thesis/honors11.png" },
    { id: "honors12", src: "../assets/images/thesis/honors12.png" },
    { id: "honors13", src: "../assets/images/thesis/honors13.png" },
    { id: "honors14", src: "../assets/images/thesis/honors14.png" },
    { id: "honors15", src: "../assets/images/thesis/honors15.png" },
    { id: "honors16", src: "../assets/images/thesis/honors16.png" },
    { id: "honors17", src: "../assets/images/thesis/honors17.png" },
    { id: "honors18", src: "../assets/images/thesis/honors18.png" },
    { id: "honors19", src: "../assets/images/thesis/honors19.png" },
  ],

  work: [
    { id: "work18", src: "../assets/images/work/work18.jpg"},
    { id: "work19", src: "../assets/images/work/work19.jpg"},
    { id: "work20", src: "../assets/images/work/work20.jpg"},
    { id: "work21", src: "../assets/images/work/work21.jpg"},
    { id: "work22", src: "../assets/images/work/work22.jpg"},
    { id: "work23", src: "../assets/images/work/work23.jpg"},
      { id: "work24", src: "../assets/images/work/work24.jpg"},
    { id: "work25", src: "../assets/images/work/work25.jpg"},
    { id: "work26", src: "../assets/images/work/work26.jpg"},
    { id: "work27", src: "../assets/images/work/work27.jpg"},
    { id: "work28", src: "../assets/images/work/work28.jpg"},
    { id: "exhibit3", src: "../assets/images/work/exhibit3.jpg"},
    { id: "exhibit5", src: "../assets/images/work/exhibit5.jpg"},
    { id: "exhibit4", src: "../assets/images/work/exhibit4.jpg"},
    { id: "exhibit1", src: "../assets/images/work/exhibit1.jpg"},
    { id: "work1", src: "../assets/images/work/work1.jpg"},
    { id: "work14", src: "../assets/images/work/work14.jpg"},
    { id: "work15", src: "../assets/images/work/work15.jpg"},
    { id: "work2", src: "../assets/images/work/work2.jpg"},
    { id: "work10", src: "../assets/images/work/work10.jpg"},
    { id: "work11", src: "../assets/images/work/work11.jpg"},
    { id: "work13", src: "../assets/images/work/work13.jpg"},
    { id: "work16", src: "../assets/images/work/work16.jpg"},
    { id: "work12", src: "../assets/images/work/work12.jpg"},
    { id: "work17", src: "../assets/images/work/work17.jpg"},
    { id: "work3", src: "../assets/images/work/work3.jpg"},
    { id: "work4", src: "../assets/images/work/work4.jpg"},
    { id: "work5", src: "../assets/images/work/work5.jpg"},
    { id: "work6", src: "../assets/images/work/work6.jpg"},
    { id: "work7", src: "../assets/images/work/work7.jpg"},
    { id: "work8", src: "../assets/images/work/work8.jpg"},
    { id: "work9", src: "../assets/images/work/work9.jpg"},
    { id: "work11.1", src: "../assets/images/work/work11.1.jpg"},
    { id: "work0.1", src: "../assets/images/work/work0.1.jpg"},
    { id: "work0.01", src: "../assets/images/work/work0.01.jpg"},
    { id: "work0.2", src: "../assets/images/work/work0.2.jpg"},
    { id: "work0.02", src: "../assets/images/work/work0.02.jpg"},
    { id: "work0.3", src: "../assets/images/work/work0.3.jpg"},
    { id: "work0.4", src: "../assets/images/work/work0.4.jpg"},
    { id: "work1 2", src: "../assets/images/work/work1 2.jpg"},
    { id: "work3 2", src: "../assets/images/work/work3 2.jpg"},
    { id: "work4 2", src: "../assets/images/work/work0.01.jpg"},
    { id: "work5.2", src: "../assets/images/work/work5.2.jpg"},

  ]

};

// Determine Current Gallery
const params = new URLSearchParams(window.location.search);
const galleryName = params.get("gallery");
const currentGallery = galleries[galleryName] || [];
const currentId = params.get("image");
let currentIndex = currentGallery.findIndex(item => item.id === currentId);

// Get references to HTML elements
const imageElement = document.getElementById("artwork-image");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

// Populate Image and Update Arrow Visibility
function populateImage() {
  console.log("hi");
  if (currentIndex === -1 || currentIndex >= currentGallery.length) {
    console.error("Image not found or index out of bounds!");
    return;
  }
  // console.log("Image found");

  // Update image source
  const currentImage = currentGallery[currentIndex];
  imageElement.src = currentImage.src;
  imageElement.alt = `Artwork ${currentImage.id}`;
  // console.log(imageElement);
  // console.log(imageElement.src);


  // Update arrow visibility
  updateArrowVisibility();
}

// Update Arrow Visibility
function updateArrowVisibility() {
  
  if (currentIndex === 0) {
    leftArrow.classList.add("hidden");
  } else {
    leftArrow.classList.remove("hidden");
  }

  if (currentIndex === currentGallery.length - 1) {
    rightArrow.classList.add("hidden");
  } else {
    rightArrow.classList.remove("hidden");
  }
  
  
  // leftArrow.style.display = currentIndex === 0 ? "none" : "block"; // Hide left arrow on the first image
  // rightArrow.style.display = currentIndex === gallery.length - 1 ? "none" : "block"; // Hide right arrow on the last image
}

// Navigate Left or Right
function navigateImage(direction) {
  if (direction === "left" && currentIndex > 0) {
    currentIndex--;
  } else if (direction === "right" && currentIndex < currentGallery.length - 1) {
    currentIndex++;
  }

  // Ensure currentIndex stays in valid bounds
  currentIndex = Math.max(0, Math.min(currentIndex, currentGallery.length - 1));

  // Update the URL and display the new image
  const newUrl = `?gallery=${galleryName}&image=${currentGallery[currentIndex].id}`;
  window.history.replaceState(null, "", newUrl);
  populateImage();
}

// Navigate to fullscreen and store scroll position
function openFullscreen(galleryName, imageId) {
  // Store current scroll position
  const scrollPosition = window.scrollY;
  sessionStorage.setItem("scrollPosition", scrollPosition);

  // Navigate to fullscreen page
  const fullscreenUrl = `artwork.html?gallery=${galleryName}&image=${imageId}`;
  window.location.href = fullscreenUrl;
}


// Close Fullscreen and Go Back to Page your opened image was on
function closeFullscreen() {
  let returnPage;
  
  switch (galleryName) {

    case "thesis":
      returnPage = "../pages/books-prints.html";
      break;
    case "work":
      returnPage = "../index.html";
      break;

    default:
      returnPage = `../pages/${galleryName}.html`; // Default case for other galleries
  }

  window.location.href = returnPage;
}


// Event Listeners
// Close fullscreen on outside click
document.addEventListener("click", (event) => {
  if (!imageElement.contains(event.target) && !leftArrow.contains(event.target) && !rightArrow.contains(event.target)) {
    closeFullscreen();
  }
});

// Navigate with keyboard arrows
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" && currentIndex > 0) {
    navigateImage("left");
  } else if (event.key === "ArrowRight" && currentIndex < currentGallery.length - 1) {
    navigateImage("right");
  } else if (event.key === "Escape") {
    closeFullscreen();
  }
});

// Ensure valid currentIndex
if (currentIndex === -1) {
  currentIndex = 0; // Default to the first image
} else if (currentIndex >= currentGallery.length) {
  currentIndex = currentGallery.length - 1; // Default to the last image
}


// Add click listeners to arrows
leftArrow.addEventListener("click", () => navigateImage("left"));
rightArrow.addEventListener("click", () => navigateImage("right"));

// Highlight the active page in the sidebar
// navigation.js

function setActivePage() {
  // 1️⃣ Grab the links (adjusted selector if you kept the original markup)
  const workLink          = document.getElementById("work-link");
  const booksPrintsLink   = document.getElementById("books-prints-link");
  const aboutLink         = document.getElementById("about-link");

  // 2️⃣ Clear any previous active class
  [workLink, booksPrintsLink, aboutLink].forEach(l => l && l.classList.remove("active"));

  // 3️⃣ Determine which page we’re on
  const path = window.location.pathname;
  const page = path.split("/").pop();
  let activeKey = null;

  switch (page) {
    case "index.html":
    case "test.html":
      activeKey = "work";
      break;
    case "books-prints.html":
    case "thesis.html":
      activeKey = "prints";
      break;
    case "about.html":
      activeKey = "about";
      break;
    case "artwork.html":
      const p = new URLSearchParams(window.location.search);
      const g = p.get("gallery");
      activeKey = g === "work" ? "work" : g === "thesis" ? "prints" : null;
      break;
  }

  // 4️⃣ Apply the active class
  if (activeKey === "work" && workLink) workLink.classList.add("active");
  else if (activeKey === "prints" && booksPrintsLink) booksPrintsLink.classList.add("active");
  else if (activeKey === "about" && aboutLink) aboutLink.classList.add("active");
}

document.addEventListener("DOMContentLoaded", setActivePage);
// Restore scroll position if available
document.addEventListener("DOMContentLoaded", () => {
  const storedScrollPosition = sessionStorage.getItem("scrollPosition");
  if (storedScrollPosition !== null) {
    window.scrollTo(0, parseInt(storedScrollPosition, 10));
    sessionStorage.removeItem("scrollPosition"); // Clear it after restoring
  }
});


// Call the function to set the active page
setActivePage();


// Initialize by populating the first image
populateImage();
