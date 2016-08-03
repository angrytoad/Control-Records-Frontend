export function createPage(html, initialState) {
  return `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <title>React App</title>
      
      <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css" rel="stylesheet" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
      <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
      
      <link rel="shortcut icon" href="/favicon.ico">
      <link href="main.css" rel="stylesheet">
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="main.js"></script>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"></script>
    </body>
  </html>
  `
}