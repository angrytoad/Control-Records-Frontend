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
import { venues } from './app/route_components/home/components/VenueSupportBanner/containers/VenueLoader/reducers'
import { activeBand, band404 } from './app/route_components/BandPage/containers/BandPageLoader/reducers';
import { activeNews, news404 } from './app/route_components/NewsPage/containers/NewsPageLoader/reducers';
import { activeVenue, venue404 } from './app/route_components/VenuePage/containers/VenuePageLoader/reducers';
import { storeSearchResults, storeSearchLoading } from './app/route_components/Store/components/StoreIndex/containers/StoreSearch/reducers';
import { featuredStoreInformation } from './app/route_components/Store/components/StoreIndex/containers/StoreMainWindow/reducers';
import { playlist, playing, audioContext } from './app/general_use/components/Player/reducers';

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
  venues,
  activeBand,
  band404,
  activeNews,
  news404,
  activeVenue,
  venue404,

  /**
   * Store Reducers
   */
  storeSearchResults,
  storeSearchLoading,
  featuredStoreInformation,

  /**
   * Music Player
   */
  playlist,
  playing,
  audioContext
};

reducerList.routing =  routerReducer;
const reducers = combineReducers(reducerList);

export default reducers;