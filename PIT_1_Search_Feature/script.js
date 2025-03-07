document.addEventListener("DOMContentLoaded", function () {
    fetch("courses.json")
        .then(response => response.json())
        .then(data => {
            let subjectsBody = document.getElementById("subjects-body");

            function displayCourses(courses) {
                subjectsBody.innerHTML = ""; 
                courses.forEach(course => {
                    let row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${course.year_level}</td>
                        <td>${course.sem}</td>
                        <td>${course.code}</td>
                        <td>${course.description}</td>
                        <td>${course.credit}</td>
                    `;
                    subjectsBody.appendChild(row);
                });
            }

            displayCourses(data.courses);

            document.getElementById("search-input").addEventListener("input", function () {
                let searchText = this.value.toLowerCase();
                let filteredCourses = data.courses.filter(course =>
                    course.code.toLowerCase().includes(searchText) ||
                    course.description.toLowerCase().includes(searchText)
                );
                displayCourses(filteredCourses);
            });
        })
        .catch(error => console.error("Error fetching JSON:", error));
});
