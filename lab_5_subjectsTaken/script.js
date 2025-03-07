document.addEventListener("DOMContentLoaded", function() {
    fetch("courses.json") 
    .then(response => response.json())
    .then(data => {
        let subjectsBody = document.getElementById("subjects-body");
        data.courses.forEach(course => {
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
    })
    .catch(error => console.error("Error fetching JSON:", error));
});
