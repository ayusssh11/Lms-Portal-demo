
let courses = [];
let users = [];

// Function to add a course
function addCourse(event) {
    event.preventDefault();
    
    const courseName = document.getElementById('courseName').value;
    
    // Add course to the array
    courses.push(courseName);
    
    // Clear input field
    document.getElementById('courseName').value = '';
    
    // Display updated course list
    displayCourses();
}

// Function to display courses
function displayCourses() {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = ''; // Clear existing list

    courses.forEach((course, index) => {
        const listItem = document.createElement('div');
        listItem.textContent = `Course ${index + 1}: ${course}`;
        courseList.appendChild(listItem);
    });
}

// Function to add a user
function addUser(event) {
    event.preventDefault();
    
    const userName = document.getElementById('userName').value;
    
    // Add user to the array
    users.push(userName);
    
    // Clear input field
    document.getElementById('userName').value = '';
    
    // Display updated user list
    displayUsers();
}

// Function to display users
function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear existing list

    users.forEach((user, index) => {
        const listItem = document.createElement('div');
        listItem.textContent = `User ${index + 1}: ${user}`;
        userList.appendChild(listItem);
    });
}