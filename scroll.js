
//backgroumd change
document.addEventListener('scroll', function () {
  const section2 = document.querySelector('.s2');
  const section4 = document.querySelector('.s4');
  const section2Top = section2.getBoundingClientRect().top;
  const section2Bottom = section2.getBoundingClientRect().bottom;
  const section4Bottom = section4.getBoundingClientRect().bottom;
  const viewportHeight = window.innerHeight;

  // const leftSection = document.querySelector('.left-section');

  if (section2Bottom <= viewportHeight && section4Bottom >= viewportHeight) {
    document.body.style.backgroundColor = 'white';
    // leftSection.style.backgroundColor = 'white';

  } else {
    document.body.style.backgroundColor = 'black'; // Change back to original color
    // leftSection.style.backgroundColor = 'black';

  }

  // if (section4Bottom <= viewportHeight) {
  //   document.body.style.backgroundColor = 'black';
  // }

});

//parallel scroll
document.addEventListener('scroll', function () {
  const topViewport = window.scrollY;
  const midViewport = topViewport + window.innerHeight / 2;

  //select all container elements
  const containers = document.querySelectorAll('.container');

  containers.forEach(container => {
    const topContainer = container.offsetTop;
    const midContainer = topContainer + container.offsetHeight / 2;
    const distanceToContainer = midViewport - midContainer;
    // console.log(distanceTocontainer);

    const parallaxTags = container.querySelectorAll(`[data-parallax]`)

    parallaxTags.forEach(tag => {
      const speed = tag.getAttribute('data-parallax')
      tag.style.transform = `translate(0, ${distanceToContainer * speed}px)`
    })
  })
})