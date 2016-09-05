import React from 'react';
import { Route } from 'react-router';

/**
 * @author "Tom Freeborough"  <thomas@hotsnapper.com> (27 Jul 2016)
 *
 * Import Components here that you wish to add to add as routes, please be aware
 * that these component should be dumb and not redux containers, try to
 * break down components into their simplest forms.
 */
import App from './app/application_wrapper/App';
import Home from './app/route_components/home/Home';
import BandPage from './app/route_components/BandPage/BandPage';
import NewsPage from './app/route_components/NewsPage/NewsPage';

/**
 * Example Routes:
 *
 *  <Route path="/" component={Home} />
 *  <Route path="/example" component={Example} />
 *
 */
const routes = (
  <Route name="app" component={App} >
    <Route path="/" component={Home} />
    <Route path="/band/:band_url" component={BandPage} />
    <Route path="/news/:news_url" component={NewsPage} />
  </Route>
);

export default routes;