

const generateHTML = (responses) =>
 `<!DOCTYPE html>
<html lang="en">
​
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
​
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">Naomi</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: 1</li>
                <li class="list-group-item">Email: <a href="mailto:n@g.com">n@g.com</a></li>
                <li class="list-group-item">Office number: 101</li>
            </ul>
        </div>
    </div>
        
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">Tucker</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: 2</li>
            <li class="list-group-item">Email: <a href="mailto:t@b.com">t@b.com</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/tuckerbeauchamp" target="_blank" rel="noopener noreferrer">tuckerbeauchamp</a></li>
        </ul>
    </div>
</div>
        
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">James</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: 3</li>
            <li class="list-group-item">Email: <a href="mailto:j@g.com">j@g.com</a></li>
            <li class="list-group-item">School: UofA</li>
        </ul>
    </div>
</div>
        
            </div>
        </div>
    </div>
</body>
</html>`;

module.exports = generateHTML;