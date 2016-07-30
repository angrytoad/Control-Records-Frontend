require("babel-core/register")({
  'plugins': [
    [
      'babel-plugin-transform-require-ignore',
      {
        extensions: ['.woff','.woff2']
      }
    ]
  ]
});

var app = require("./index.prod");