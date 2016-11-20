import React from 'react';
import { Route, IndexRoute } from 'react-router';

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
import VenuePage from './app/route_components/VenuePage/VenuePage';

import Store from './app/route_components/Store/Store';
import StoreIndex from './app/route_components/Store/components/StoreIndex/StoreIndex';
import StoreAlbumPage from './app/route_components/Store/components/StoreAlbumPage/StoreAlbumPage';
import StoreArtistPage from './app/route_components/Store/components/StoreArtistPage/StoreArtistPage';
import StoreSongPage from './app/route_components/Store/components/StoreSongPage/StoreSongPage';
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
    <Route path="/venue/:venue_url" component={VenuePage} />
    <Route name="store" path="/store" component={Store}>
      <IndexRoute component={StoreIndex} />
      <Route path="album/:album_url" component={StoreAlbumPage} />
      <Route path="artist/:artist_url" component={StoreArtistPage} />
      <Route path="song/:song_url" component={StoreSongPage} />
    </Route>
  </Route>
);

export default routes;