export function createPage(html, head, initialState) {
  return `
  <!doctype html>
  <html ${head.htmlAttributes.toString()}>
    <head>
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
        ${head.script.toString()}
        ${head.style.toString()}
        ${head.base.toString()}
      <meta name="google-site-verification" content="8yfLls5NnpQmwGfcNuMfAKHm3VacSDRKq2gJMQVgM_8" />
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