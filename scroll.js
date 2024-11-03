document.addEventListener('scroll', function () {
  const section2 = document.querySelector('.s2');
  const section2Top = section2.getBoundingClientRect().top;
  const section2Bottom = section2.getBoundingClientRect().bottom;
  const viewportHeight = window.innerHeight;

  if (section2Bottom <= viewportHeight) {
    document.body.style.backgroundColor = 'white';
  } else {
    document.body.style.backgroundColor = 'black'; // Change back to original color
  }
});