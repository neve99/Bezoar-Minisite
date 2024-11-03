
//backgroumd change
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

//parallel scroll
document.addEventListener('scroll', function () {
  const topViewport = window.scrollY;
  const midViewport = topViewport + window.innerHeight / 2;

  //select all container elements
  const containers = document.querySelectorAll('.container');
  sections.forEach(section => {
    const topSection = section.offsetTop;
    const midSection = topSection + section.offsetHeight / 2;
    const distanceToSection = midViewport - midSection;
    // console.log(distanceToSection);

    const parallaxTags = section.querySelectorAll(`[data-parallax]`)

    parallaxTags.forEach(tag => {
      const speed = tag.getAttribute('data-parallax')
      tag.style.transform = `translate(0, ${distanceToSection * speed}px)`
    })
  })
})