document.addEventListener('DOMContentLoaded', (event) => {
  const rightSectionLetters = document.querySelectorAll('.right-section .letter');
  const leftSectionBigLetter = document.querySelector('.left-section .big-letter');

  rightSectionLetters.forEach(letter => {
    letter.addEventListener('mouseover', () => {
      leftSectionBigLetter.textContent = letter.textContent;
      const classes = ['ss01', 'ss02', 'ss03', 'ss04', 'ligatures', 'oldstyle'];
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


const outputTag = document.querySelector('.output');
const originalText = outputTag.textContent;

const typesizeTag = document.querySelector('input[name="typesize"]');
const typesizeOutput = document.querySelector('.typesize-output');

const lineheightTag = document.querySelector('input[name="lineheight"]');
const lineheightOutput = document.querySelector('.lineheight-output');

const spacingTag = document.querySelector('input[name="spacing"]');
const spacingOutput = document.querySelector('.spacing-output');

const styleTag = document.querySelector('select[name="stylistic-sets"]');

const oldStyleNumbersTag = document.querySelector('.oldstyle-numbers');
//fontsize slider

typesizeTag.addEventListener('input', () => {
  outputTag.style.fontSize = typesizeTag.value + 'px';
  typesizeOutput.textContent = typesizeTag.value + 'px';
});

//lineheight slider

lineheightTag.addEventListener('input', () => {
  outputTag.style.lineHeight = lineheightTag.value;
  lineheightOutput.textContent = lineheightTag.value;
});

//spacing slider

spacingTag.addEventListener('input', () => {
  outputTag.style.letterSpacing = spacingTag.value + 'em';
  // spacingOutput.textContent = spacingTag.value + 'em';
  spacingOutput.textContent = Math.round(spacingTag.value * 100) + '%';
});

// stylistic sets
styleTag.addEventListener('input', () => {
  const selectedClass = styleTag.value;
  outputTag.className = 'output'; // Remove all previous classes
  if (selectedClass) {
    outputTag.classList.add(selectedClass);
  }
})

// old style numbers
oldStyleNumbersTag.addEventListener('click', () => {
  oldStyleNumbersTag.classList.toggle('button-selected');
  outputTag.classList.toggle('oldstyle');
});


