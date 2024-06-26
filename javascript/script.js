// function displayStudents() {
//     const cardContainer = document.querySelector('.card-container');
//     cardContainer.innerHTML = '';
//     students.forEach((student, index) => {
//         const card = document.createElement('div');
//         card.className = 'card student-card';
//         card.id = 'student-card'
//         card.style.width = '18rem';
//         card.innerHTML = `
//             <div class="card-head">
//                 <img src="./asset/${student.gender === 'Male' ? 'boy' : 'girl'}.png" alt="Image">
//             </div>
//             <div class="card-body">
//                 <div class="content">
//                     <h6>Student Name</h6><span>-</span><h6 class="output">${capitalizeFirstLetter(student.name)}</h6>
//                 </div>
//                 <div class="content">
//                     <h6>Gender</h6><span>-</span><h6 class="output">${student.gender}</h6>
//                 </div>
//                 <div class="content">
//                     <h6>DOB</h6><span>-</span><h6 class="output">${student.dob}</h6>
//                 </div>
//                 <div class="content">
//                     <h6>Address</h6><span>-</span><h6 class="output">${capitalizeFirstLetter(student.address)}</h6>
//                 </div>
//                 <div class="content">
//                     <h6>Contact</h6><span>-</span><h6 class="output">${student.contact}</h6>
//                 </div>
//                 <div class="Delete">
//                     <button class="btn btn-primary delete-btn" data-bs-toggle="modal" data-bs-target="#staticDelete" data-index="${index}"><span class="delete-text">Delete</span></button>
//                 </div>
//             </div>
//         `;
//         cardContainer.appendChild(card);
//     });

//     document.getElementById('student-delete-button').forEach(button => {
//         button.addEventListener('click', function() {
//             const index = this.getAttribute('data-index');
//             showLoader();
//             setTimeout(() => {
//                 hideLoader();
//                 students.splice(index, 1);
//                 displayStudents();
//                 showStudentDelete();
//             }, 1000);
//         });
//     });
// }

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// }

// function showLoader() {
//     document.getElementById('loader').style.display = 'block';
// }

// function hideLoader() {
//     document.getElementById('loader').style.display = 'none';
// }


// document.getElementById('student-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     showLoader();

//     setTimeout(() => {
//         hideLoader();

//         const name = document.getElementById('student-name').value;
//         const gender = document.getElementById('gender').value;
//         const dob = document.getElementById('dob').value;
//         const address = document.getElementById('address').value;
//         const contact = document.getElementById('contact').value;

//         students.push({ name, gender, dob, address, contact });

//         displayStudents();

//         const modal = bootstrap.Modal.getInstance(document.getElementById('staticBackdrop'));
//         modal.hide();

//         document.getElementById('student-form').reset();

//         showStudentAdd();
//     }, 1000);
// });
// displayStudents();