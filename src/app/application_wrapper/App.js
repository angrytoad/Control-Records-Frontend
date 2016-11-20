import React from 'react';
import Helmet from 'react-helmet';
import DevTools from '../../_dev/DevTools';

import './App.scss';

import Menu from '../general_use/components/Menu/Menu';

/**
 * Import any other fonts that aren't part of materialize and the general stylesheet as this is where core
 * styles go that aren't component/container specific.
 */
import '../general_use/css/core.scss';
import '../general_use/css/animate.css';
import '../general_use/fonts/hacka.woff';
import '../general_use/fonts/hacka.woff2';

const environment = process.env.NODE_ENV;

/**
 * @author "Tom Freeborough"  <thomas@hotsnapper.com> (27 Jul 2016)
 *
 * This does not need changing, the idea is that all routes get rendered inside this dumb component and its for
 * them to handle changes and updates. If we are inside of a development environment then we will
 * want to ensure we enable redux devtools to manage and view changes to the state in our
 * application.
 */
const App = (props) => {
  return (
    <div id="App">
      <Helmet
        titleTemplate="%s | Control Records"
        defaultTitle="Control Records"
        link={[
          {"rel": "stylesheet", "href": "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css", "type": "text/css"},
          {"rel": "stylesheet", "href": "https://fonts.googleapis.com/icon?family=Material+Icons", "type": "text/css" },
          {"rel": "shortcut icon", "href": "/favicon.ico"}
        ]}
        script={[
          {"src": "https://cdn.polyfill.io/v2/polyfill.min.js"},
          {"src": "https://maps.googleapis.com/maps/api/js?key=AIzaSyCymOhYZOqDT9vQ4zBKGpiv0e8fxLeL2Ck"}
        ]}
        meta={[
          {"charset": "utf-8"},
          {"name": "viewport", "content": "width=device-width,initial-scale=1"}
        ]}
      />
      <Menu />
      {props.children}
      {environment === 'development'
        ?
        <DevTools />
        :
        false
      }
    </div>
  )
};

export default App;