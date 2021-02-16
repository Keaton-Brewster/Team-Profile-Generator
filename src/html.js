// Here is the function that takes in ar array of strings and created a file with them. 
// IMPORTANT to note that the string in the array you pass in much be formatted PRIOR to being added to the array. 
function generateHTML(team) {
  return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- bootstrap 4.5 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <!-- personal CSS -->
    <link rel="stylesheet" href="main.css">

    <title>Your Team</title>
</head>

<body>


    <div class="py-3 mb-5 bg-primary text-center">
        <h1 class="display-3 text-light">Your Team</h1>
    </div>

    <div class="px-5">
        <div id="teamGoesHere" class="row mx-auto">
            <!-- Dynamically generated cards go here. -->
            ${team.join('')}
        </div>
    </div>



    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"></script>
</body>

</html>`;
}

module.exports = generateHTML;
