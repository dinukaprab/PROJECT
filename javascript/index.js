// Loader
window.addEventListener('load', () => {
    const overlay = document.getElementById('overlay');
    const loader = document.getElementById('loader');
    const CardContainer = document.getElementById('card-container');

    if (loader) {
        loader.style.display = 'block';
        overlay.style.display = 'block';
        CardContainer.style.opacity = '0';

        setTimeout(() => {
            loader.style.display = 'none';
            overlay.style.display = 'none';
            CardContainer.style.opacity = '1';
        }, 1500);
    }
});

// Searchbar
document.querySelector('.search-input').addEventListener('input', function() {
    if (this.value.length > 0) {
        this.classList.add('has-text');
    } else {
        this.classList.remove('has-text');
    }
});

// Buttons Animations
document.querySelectorAll('.search-btn , .add-btn , .delete-btn , .cancel-btn').forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.setProperty('--x', `${x}px`);
        button.style.setProperty('--y', `${y}px`);
    });
});

// Hide Overflow add-student Button
document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.querySelector('.add-student-container');
    const addStudentElement = document.querySelector('.add-student');

    container.classList.add('hide-overflow');

    addStudentElement.addEventListener('animationend', () => {
        container.classList.remove('hide-overflow');
    });
});

// Dynamic Text Animation
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

// Student Array
let students = [
    {
        name: "Kavindu Perera",
        gender: "Male",
        dob: "2001-04-03",
        address: "Kaluthara",
        contact: "077-1234234"
    },
    {
        name: "Nimali Silva",
        gender: "Female",
        dob: "2000-05-12",
        address: "Colombo",
        contact: "077-9876543"
    }
];

// Capitalize First character
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Display Students
function displayStudents() {
        const cardContainer = document.querySelector('.card-container');
        cardContainer.innerHTML = '';
        students.forEach((student, index) => {
            const card = document.createElement('div');
            card.className = 'card student-card';
            card.id = 'student-card'
            card.style.width = '18rem';
            card.innerHTML = `
                <div class="card-head">
                    <img src="./asset/${student.gender === 'Male' ? 'boy' : 'girl'}.png" alt="Image">
                </div>
                <div class="card-body">
                    <div class="content">
                        <h6>Student Name</h6><span>-</span><h6 class="output">${capitalizeFirstLetter(student.name)}</h6>
                    </div>
                    <div class="content">
                        <h6>Gender</h6><span>-</span><h6 class="output">${student.gender}</h6>
                    </div>
                    <div class="content">
                        <h6>DOB</h6><span>-</span><h6 class="output">${student.dob}</h6>
                    </div>
                    <div class="content">
                        <h6>Address</h6><span>-</span><h6 class="output">${capitalizeFirstLetter(student.address)}</h6>
                    </div>
                    <div class="content">
                        <h6>Contact</h6><span>-</span><h6 class="output">${student.contact}</h6>
                    </div>
                    <div class="Delete">
                        <button class="btn btn-primary delete-btn" data-bs-toggle="modal" data-bs-target="#staticDelete" data-index="${index}"><span class="delete-text">Delete</span></button>
                    </div>
                </div>
            `;
            cardContainer.appendChild(card);
        });

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                document.getElementById('student-delete-button').setAttribute('data-index', index);
            });
        });
}

// Add Student
document.getElementById('student-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('student-name').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;

    students.push({ name, gender, dob, address, contact });
    displayStudents();
    showStudentAdd();
    this.reset();
});

document.getElementById('student-delete-button').addEventListener('click', function() {
    const index = this.getAttribute('data-index');
    if (students.length > 0) {
        showLoader();
        setTimeout(() => {
            hideLoader();
            students.splice(index, 1);
            displayStudents();
            showStudentDelete();
        }, 1000);
    }
});

// Show Loader
function showLoader() {
    const overlay = document.getElementById('overlay');
    const loader = document.getElementById('loader');

    if (loader && overlay) {
        loader.style.display = 'block';
        overlay.style.display = 'block';

        setTimeout(() => {
            loader.style.display = 'none';
            overlay.style.display = 'none';
        }, 1500);
    } else {
        console.error('Loader or overlay element not found');
    }
}

// Hide Loader
function hideLoader() {
    const loader = document.getElementById('loader');
    const overlay = document.getElementById('overlay');

    if (loader && overlay) {
        loader.style.display = 'none';
        overlay.style.display = 'none';
    } else {
        console.error('Loader or overlay element not found');
    }
}


// Show Student Popup Message
function showStudentAdd() {
    const popup = document.getElementById('popup-student-add');
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}

// Delete Student Popup Message
function showStudentDelete() {
    const popup = document.getElementById('popup-student-delete');
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}

displayStudents();