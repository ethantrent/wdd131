// When the button is clicked show the menu if it is hidden, hide the menu if it is shown. */
const menuButton = document.querySelector(".menu-btn");
// toggle menu function
function toggleMenu() {
    const menu = document.querySelector(".menu")
    menu.classList.toggle("hide");
}
// handle resize function
function handleResize() {
    const menu = document.querySelector(".menu")
    if (innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}
// open modal on click
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.img-modal');

gallery.addEventListener('click', (event) => {
  const img = event.target.closest('img');
  if (!img) return;

  // Build full-size image src
  const srcParts = img.src.split('-');
  const fullSrc = srcParts[0] + '-full.jpeg';

  // Inject content into modal
  modal.innerHTML = `
    <img src="${fullSrc}" alt="${img.alt}">
    <button class="close-viewer">X</button>
  `;
  modal.showModal();
});

// close modal on click
modal.addEventListener('click', (event) => {
  if (event.target.classList.contains('close-viewer')) {
    modal.close();
  }
  // Close modal if clicking outside the image
  if (event.target === modal) {
    modal.close();
  }
});

// call handleResize function
handleResize();
/* Add an event listener to the menu button to listen for a click event.*/
menuButton.addEventListener("click", toggleMenu);
// event listener for resize event
window.addEventListener("resize", handleResize);
