function generateHtml (teamMembers){
    var employeeCards =""
    for (let i=0;i<teamMembers.length;i++){
        if(teamMembers[i].getRole() === "Manager"){
            employeeCards += `<div class="card" style="width: 18rem;">
              <h3>Manager</h3>
            <div class="card-body">
              <p class="card-text">Name: ${teamMembers[i].name}</p>
              <p class="card-text">Id: ${teamMembers[i].id}</p>
              <p class="card-text">OfficeNumber: ${teamMembers[i].officeNumber}</p>
              <a href="mailto:${teamMembers[i].email}" class="card-text">Email: ${teamMembers[i].email} </a>
            </div>
          </div>`
        }else if(teamMembers[i].getRole() === "Engineer"){
            employeeCards += `<div class="card" style="width: 18rem;">
            <h3>Engineer</h3>
          <div class="card-body">
            <p class="card-text">Name: ${teamMembers[i].name}</p>
            <p class="card-text">Id: ${teamMembers[i].id}</p>
          
            <a href="mai:${teamMembers[i].email}" class="card-text">Email: ${teamMembers[i].email} </a>
            <a href="https://github.com/${teamMembers[i].github}" class="card-text">Github: ${teamMembers[i].github} </a>
          </div>
        </div>`
        }else {
            employeeCards += `<div class="card" style="width: 18rem;">
            <h3>Intern</h3>
          <div class="card-body">
            <p class="card-text">Name: ${teamMembers[i].name}</p>
            <p class="card-text">Id: ${teamMembers[i].id}</p>
            <p class="card-text">SchoolName: ${teamMembers[i].schoolName}</p>
            <a href="mailto:${teamMembers[i].email}" class="card-text">Email: ${teamMembers[i].email} </a>
          </div>
        </div>`
        }
    }
    let html  =`<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
      </head>
      <body>
      <header class="bg-danger text-center text-white">
        <h1>Team Generator HTML</h1>
        <p>By: Tyler Powers</p>
        </header>
        <main class="container d-flex flex-wrap">
        ${employeeCards}
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
      </body>
    </html>`
    return html
}

module.exports = generateHtml