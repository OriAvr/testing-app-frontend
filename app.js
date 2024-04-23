const SERVER_IP = "%%SERVER_IP%%";

document.addEventListener("DOMContentLoaded", function () {
  fetchCourses();
});

function fetchCourses() {
  fetch(`http://${SERVER_IP}:3000/courses`)
    .then((response) => response.json())
    .then((data) => populateTable(data))
    .catch((error) => console.error("Error fetching courses:", error));
}

function populateTable(courses) {
  const tableBody = document
    .getElementById("coursesTable")
    .getElementsByTagName("tbody")[0];
  courses.forEach((course) => {
    let row = tableBody.insertRow();
    let nameCell = row.insertCell(0);
    nameCell.textContent = course.name;

    let descriptionCell = row.insertCell(1);
    descriptionCell.textContent = course.description;

    let imageCell = row.insertCell(2);
    let image = document.createElement("img");
    image.src = course.image_key;
    image.alt = course.name;
    imageCell.appendChild(image);
  });
}
