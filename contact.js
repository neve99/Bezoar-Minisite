const contactField = document.querySelector('.contact-field');
const contactButton = document.querySelector('.contact-button');

contactButton.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent the click event from bubbling up to the document

  contactField.classList.toggle('show-contact');

})


// Hide the contact field when clicking outside of it
document.addEventListener('click', (e) => {
  if (!contactField.contains(e.target) && !contactButton.contains(e.target)) {
    contactField.classList.remove('show-contact');
  }
});

// Prevent the contact field from hiding when clicking inside it
contactField.addEventListener('click', (e) => {
  e.stopPropagation();
});