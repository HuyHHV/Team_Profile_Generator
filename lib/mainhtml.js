function mainHtml(inner) {
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
        crossorigin="anonymous"
      />
    </head>
    <body>
        <header class="jumbotron jumbotron-fluid bg-danger">
            <div class="container">
            <h1 class="display-3 text-center text-light">My Team</h1>
            </div>
        </header>
        <div class="container">
            <div class="row d-flex justify-content-center flex-wrap">
            ${inner}
            </div>
        </div>
    </body>
    </html>`
    return html
  } 

  module.exports = mainHtml();