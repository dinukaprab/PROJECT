document.querySelector('.search-input').addEventListener('input', function() {
    if (this.value.length > 0) {
        this.classList.add('has-text');
    } else {
        this.classList.remove('has-text');
    }
});

function showLoader() {
    const overlay = document.getElementById('overlay');
    const loader = document.getElementById('loader');
    overlay.style.display = 'flex';
    loader.focus();
}
function hideLoader() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

setTimeout(hideLoader, 3000);
  
let students = [
    {
        name: "Kavindu Perera",
        gender: "male",
        dob: "2001-04-03",
        address: "Kaluthara",
        contact: "077-1234234"
    },
    {
        name: "Nimali Silva",
        gender: "female",
        dob: "2000-05-12",
        address: "Colombo",
        contact: "077-9876543"
    }
];

// Function to display students in cards
function displayStudents() {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = '';
    students.forEach((student, index) => {
        const card = document.createElement('div');
        card.className = 'card student-card';
        card.style.width = '18rem';
        card.innerHTML = `
            <div class="card-head">
                <img src="./asset/${student.gender === 'male' ? 'boy' : 'girl'}.png" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
                <div class="content">
                    <h6>Student Name</h6><span>-</span><h6 class="output">${student.name}</h6>
                </div>
                <div class="content">
                    <h6>Gender</h6><span>-</span><h6 class="output">${student.gender}</h6>
                </div>
                <div class="content">
                    <h6>DOB</h6><span>-</span><h6 class="output">${student.dob}</h6>
                </div>
                <div class="content">
                    <h6>Address</h6><span>-</span><h6 class="output">${student.address}</h6>
                </div>
                <div class="content">
                    <h6>Contact</h6><span>-</span><h6 class="output">${student.contact}</h6>
                </div>
                <div class="Delete">
                    <button class="btn btn-primary delete-btn" data-index="${index}">Delete</button>
                </div>
            </div>
        `;
        cardContainer.appendChild(card);
    });

    // Add event listeners to delete buttons
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            showLoader();
            setTimeout(() => {
                hideLoader();
                students.splice(index, 1);
                displayStudents();
                showPopupMessage('Student deleted successfully');
            }, 1000);
        });
    });
}

function showLoader() {
    document.getElementById('loader').style.display = 'block';
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

function showPopupMessage(message) {
    const popup = document.getElementById('popup-message');
    popup.innerText = message;
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}

document.getElementById('student-form').addEventListener('submit', function(event) {
    event.preventDefault();
    showLoader();

    // Simulate a delay for adding a student
    setTimeout(() => {
        hideLoader();

        // Get form values
        const name = document.getElementById('student-name').value;
        const gender = document.getElementById('gender').value;
        const dob = document.getElementById('dob').value;
        const address = document.getElementById('address').value;
        const contact = document.getElementById('contact').value;

        // Add new student to the array
        students.push({ name, gender, dob, address, contact });

        // Display the updated student list
        displayStudents();

        // Close the modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('staticBackdrop'));
        modal.hide();

        // Clear the form
        document.getElementById('student-form').reset();

        // Show success message
        showPopupMessage('Student added successfully');
    }, 1000);
});

// Display the initial students
displayStudents();