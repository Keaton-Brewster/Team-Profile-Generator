function generateManagerHTML(manager) {
  return `  <div class="card bg-dark col-3">
                <div class="card-body">
                    <h2 class="card-title">${manager.name}</h2>
                    <p class="card-text">Manager</p>
                    <ul class="list-group">
                        <li class="list-group-item">Employee ID: ${manager.id}</li>
                        <li class="list-group-item">Email: ${manager.email}</li>
                        <li class="list-group-item">Office Number: ${manager.office}</li>
                    </ul>
                </div>
            </div>`;
}

function generateEngineerHTML(engineer) {
  return `  <div class="card bg-dark col-3">
                <div class="card-body">
                    <h2 class="card-title">${engineer.name}</h2>
                    <p class="card-text">Engineer</p>
                    <ul class="list-group">
                        <li class="list-group-item">Employee ID: ${engineer.id}</li>
                        <li class="list-group-item">Email: ${engineer.email}</li>
                        <li class="list-group-item">Github: ${engineer.githubUsername}</li>
                    </ul>
                </div>
            </div>`;
}

function generateInternHTML(intern) {
  return `  <div class="card bg-dark col-3">
                <div class="card-body">
                    <h2 class="card-title">${intern.name}</h2>
                    <p class="card-text">Intern</p>
                    <ul class="list-group">
                        <li class="list-group-item">Employee ID: ${intern.id}</li>
                        <li class="list-group-item">Email: ${intern.email}</li>
                        <li class="list-group-item">School: ${intern.school}</li>
                    </ul>
                </div>
            </div>`;
}

module.exports = {
    managerHTML: generateManagerHTML,
    engineerHTML: generateEngineerHTML,
    internHTML: generateInternHTML
};
