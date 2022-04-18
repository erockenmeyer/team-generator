const generateManager = manager => {
    return `
    <div class="col-12 col-sm-3 col-md-2 card">
        <div class="card-body">
            <h3 class="card-title">${manager.name}</h3>
            <h4 class="card-subtitle">Manager<h4>
            <p class="card-text fs-5">ID: ${manager.id} <br />
            Email: <a href="mailto:${manager.email}" class="card-link">${manager.email}</a><br />
            Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
    `;
}

const generateEngineer = engineer => {
    return `
    <div class="col-12 col-sm-3 col-md-2 card">
        <div class="card-body">
            <h3 class="card-title">${engineer.name}</h3>
            <h4 class="card-subtitle">Engineer<h4>
            <p class="card-text fs-5">ID: ${engineer.id} <br />
            Email: <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a> <br />
            Github: <a href="github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
        </div>
    </div>
    `;
}

const generateIntern = intern => {
    return `
    <div class="col-12 col-sm-3 col-md-2 card">
        <div class="card-body">
            <h3 class="card-title">${intern.name}</h3>
            <h4 class="card-subtitle">Intern<h4>
            <p class="card-text fs-5">ID: ${intern.id} <br />
            Email: <a href="mailto:${intern.email}" class="card-link">${intern.email}</a> <br />
            School: ${intern.school}</p>
        </div>
    </div>    
    `;
}

const generateTeam = teamArray => {
    let teamHtml = '';
    teamArray.forEach(employee => {
        if (employee.type === 'Manager') {
            teamHtml += generateManager(employee);
        } else if (employee.type === 'Engineer') {
            teamHtml += generateEngineer(employee);
        } else {
            teamHtml += generateIntern(employee);
        }
    });
    return teamHtml;
}

const generatePage = teamArray => {
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>

    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main class="container">
            <div class="row justify-content-evenly">
                ${generateTeam(teamArray)}
            </div>
        </main>
    </body>
    </html>
    `
}

module.exports = generatePage;