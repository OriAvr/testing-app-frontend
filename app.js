document.addEventListener("DOMContentLoaded", function () {
  fetchCourses();
});

function fetchCourses() {
  fetch("http://your-backend-api-url/courses")
    .then((response) => response.json())
    .then((data) => displayCourses(data))
    .catch((error) => console.error("Error fetching courses:", error));
}

function displayCourses(courses) {
  const coursesElement = document.getElementById("courses");
  coursesElement.innerHTML = ""; // Clear existing courses
  courses.forEach((course) => {
    const courseElement = document.createElement("div");
    courseElement.textContent = course.name; // Assume each course has a 'name'
    coursesElement.appendChild(courseElement);
  });
}
