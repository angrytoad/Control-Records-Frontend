import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

/**
 * @author "Tom Freeborough"  <thomas@hotsnapper.com> (27 Jul 2016)
 *
 * Import your reducers below
 */
import { test } from './_examples/example_reducer';
import { gigs } from './app/route_components/home/containers/UpcomingGigsLoader/reducers';
import { news } from './app/route_components/home/containers/LatestNewsLoader/reducers';
import { bands } from './app/route_components/home/containers/BandsListLoader/reducers';
import { activeBand, band404 } from './app/route_components/BandPage/containers/BandPageLoader/reducers';
import { activeNews, news404 } from './app/route_components/NewsPage/containers/NewsPageLoader/reducers';

/**
 * Add to the reducersList any reducers which are needed for the redux application, try to keep reducers separated
 * into their own files and not create one great big reducers file. One option is to create reducers
 * in accordance with their primary function. I.E having a reducer file to handle login ETC.
 *
 */
const reducerList = {
  test,
  gigs,
  news,
  bands,
  activeBand,
  band404,
  activeNews,
  news404
};

reducerList.routing =  routerReducer;
const reducers = combineReducers(reducerList);

export default reducers;