window.addEventListener('load', () => {
    const overlay = document.getElementById('overlay');
    const loader = document.getElementById('loader');

    if (loader) {
        loader.style.display = 'block';
        overlay.style.display = 'block';

        setTimeout(() => {
            loader.style.display = 'none';
            overlay.style.display = 'none';
        }, 1500);
    }
});

document.querySelector('.search-input').addEventListener('input', function() {
    if (this.value.length > 0) {
        this.classList.add('has-text');
    } else {
        this.classList.remove('has-text');
    }
});

document.querySelectorAll('.search-btn , .add-btn , .delete-btn , .cancel-btn').forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.setProperty('--x', `${x}px`);
        button.style.setProperty('--y', `${y}px`);
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.querySelector('.add-student-container');
    const addStudentElement = document.querySelector('.add-student');

    container.classList.add('hide-overflow');

    addStudentElement.addEventListener('animationend', () => {
        container.classList.remove('hide-overflow');
    });
});

const studentCard = document.querySelector('.student-card');

studentCard.addEventListener('mouseenter', () => {
    studentCard.style.opacity = '1';
    studentCard.classList.remove('opacityhidden');
    studentCard.classList.add('showing');
});

studentCard.addEventListener('mouseleave', () => {
    studentCard.classList.remove('showing');
    studentCard.classList.add('opacityhidden');
});


var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });