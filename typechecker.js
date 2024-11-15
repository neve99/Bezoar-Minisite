document.addEventListener('DOMContentLoaded', (event) => {
  const rightSectionLetters = document.querySelectorAll('.right-section .letter');
  const leftSectionBigLetter = document.querySelector('.left-section .big-letter');

  rightSectionLetters.forEach(letter => {
    letter.addEventListener('mouseover', () => {
      leftSectionBigLetter.textContent = letter.textContent;
      const classes = ['ss01', 'ss02', 'ss03', 'ligatures'];
      classes.forEach(cls => {
        if (letter.classList.contains(cls)) {
          leftSectionBigLetter.classList.add(cls);
        } else {
          leftSectionBigLetter.classList.remove(cls);
        }
      });

    });
  });
});