function generateManagerHTML(manager) {
  return `  <div class="card col-3 p-0 m-1">
                <div class="card-header bg-dark">
                    <h2 class="card-title">${manager.name}</h2>
                    <p>Manager</p>
                </div>
                <div class="card-body bg-dark">

                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.email}" target="blank">${manager.email}</a></li>
                        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>`;
}

function generateEngineerHTML(engineer) {
  return `  <div class="card col-3 p-0 m-1">
                <div class="card-header bg-dark">
                    <h2 class="card-title">${engineer.name}</h2>
                    <p>Engineer</p>
                </div>
                <div class="card-body bg-dark">

                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.email}" target="blank">${engineer.email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.githubUsername}" target="blank">${engineer.githubUsername}</a></li>
                    </ul>
                </div>
            </div>`;
}

function generateInternHTML(intern) {
  return `  <div class="card col-3 p-0 m-1">
                <div class="card-header bg-dark">
                    <h2 class="card-title">${intern.name}</h2>
                    <p>Intern</p>
                </div>
                <div class="card-body bg-dark">

                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.email}" target="blank">${intern.email}</a></li>
                        <li class="list-group-item">School: ${intern.school}</li>
                    </ul>
                </div>
            </div>`;
}

module.exports = {
  managerHTML: generateManagerHTML,
  engineerHTML: generateEngineerHTML,
  internHTML: generateInternHTML,
};
