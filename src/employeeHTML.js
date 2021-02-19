function genEmployeeHTML(employee) {
    let liSubject;
    let liText;
    let icon;
    switch (employee.getRole()) {
        case "Manager":
            liSubject = "Office Number:";
            liText = employee.officeNumber;
            icon = "supervisor_account";
            break;
        case "Engineer":
            liSubject = "GitHub:";
            liText = `<a href="${employee.getGithub()}" target="blank">${employee.githubUsername}</a>`;
            icon = "portrait";
            break;
        case "Intern":
            liSubject = "School:";
            liText = employee.school;
            icon = "school";
            break;
    }
    return `  
  <div class="card m-1">
    <div class="card-header bg-dark">
      <h2 class="card-title">${employee.name}</h2>
      <p>${employee.getRole()}<i class="material-icons md-light md-48 float-right">${icon}</i></p>
    </div>
    <div class="card-body bg-dark">
      <ul class="list-group">
        <li class="list-group-item">ID: ${employee.id}</li>
        <li class="list-group-item">Email:<a href="${employee.getEmail()}" target="blank">${employee.email}</a></li>
        <li class="list-group-item">${liSubject} ${liText}</li>
      </ul>
    </div>
  </div>`;
}
module.exports = genEmployeeHTML;