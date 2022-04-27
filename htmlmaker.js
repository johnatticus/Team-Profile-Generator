// empty array to fill with html cards
const workerCards = []

// function that says for each worker in the array to run the corresponding function to create html cards
// also sets the base of HTML, minus the worker cards
function htmlMaker(workForce) {
    workForce.forEach((newWorker) => {
        if(newWorker.getRole() === 'Manager'){
            createManager(newWorker)
        } else if (newWorker.getRole() === 'Engineer') {
            createEngineer(newWorker)
        } else if (newWorker.getRole() === 'Intern') {
            createIntern(newWorker)
        }
    });

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="./style.css">
    <title>Work Force</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron bg-danger text-white mb-3 team-heading">
                <h1 class="text-center">Work Force</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                <div class="card-deck pt-4 d-flex justify-content-center">
                    
                ${workerCards.join('')}

                </div> 
            </div>
        </div>
    </div>
</body>
</html>
    `
};

// following three functions create html bootstrap cards for manager, engineer, and interns
// the cards are pushed to the empty array and than joined in the html in the above fucntion
function createManager(Manager) {
    workerCards.push(`
    <div class="card mb-3 shadow" style="min-width: 20rem; max-width: 20rem;">
                        <div class="card-header bg-primary text-white">
                            <h1>${Manager.name}</h1>
                            <h4>Manager</h4>
                        </div>
                            <div class="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item">ID: ${Manager.id}</li>
                                    <li class="list-group-item">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
                                    <li class="list-group-item">Office #: ${Manager.officeNumber}</li>
                                </ul>
                            </div>
                    </div>
    `)
}

function createEngineer(Engineer) {
    workerCards.push(`
    <div class="card mb-3 shadow" style="min-width: 20rem; max-width: 20rem;">
                        <div class="card-header bg-primary text-white">
                            <h1>${Engineer.name}</h1>
                            <h4>Engineer</h4>
                        </div>
                            <div class="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item">ID: ${Engineer.id}</li>
                                    <li class="list-group-item">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></li>
                                    <li class="list-group-item">Github username: <a href="https://github.com/${Engineer.gitHub}">${Engineer.gitHub}</a></li>
                                </ul>
                            </div>
                    </div>
    `)
}
function createIntern(Intern) {
    workerCards.push(`
    <div class="card mb-3 shadow" style="min-width: 20rem; max-width: 20rem;">
                        <div class="card-header bg-primary text-white">
                            <h1>${Intern.name}</h1>
                            <h4>Intern</h4>
                        </div>
                            <div class="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item">ID: ${Intern.id}</li>
                                    <li class="list-group-item">Email: <a href="mailto:${Intern.email}">${Intern.email}</a></li>
                                    <li class="list-group-item">School: ${Intern.school}</li>
                                </ul>
                            </div>
                    </div>
    `)
}

module.exports = htmlMaker;