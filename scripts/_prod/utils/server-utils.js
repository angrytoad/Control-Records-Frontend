export function createPage(html, initialState) {
  return `
  <!doctype html>
  <html>
    <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/main.js"></script>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"></script>
    </body>
  </html>
  `
}