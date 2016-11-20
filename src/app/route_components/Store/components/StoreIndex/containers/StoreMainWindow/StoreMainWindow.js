import React from 'react';
import {connect} from 'react-redux';

import FeaturedStoreArticle from './components/FeaturedStoreArticle/FeaturedStoreArticle';
import FeaturedStoreAlbum from './containers/FeaturedStoreAlbum/FeaturedStoreAlbum';
import FeaturedStoreArtist from './containers/FeaturedStoreArtist/FeaturedStoreArtist';
import RecentlyPurchased from './containers/RecentlyPurchased/RecentlyPurchased';
import RecentSongUploads from './components/RecentSongUploads/RecentSongUploads';
import RecentAlbumUploads from './components/RecentAlbumUploads/RecentAlbumUploads';

import './StoreMainWindow.scss';

import { requestFeaturedStoreInformation } from './actions';

const mapStateToProps = ({featuredStoreInformation}) =>
  ({
    featuredStoreInformation
  });

const mapDispatchToProps = dispatch =>
  ({
    requestFeaturedStoreInformation: () => dispatch(requestFeaturedStoreInformation())
  });

const StoreMainWindow = React.createClass({

  componentDidMount() {
    this.props.requestFeaturedStoreInformation();
  },
  
  render() {
    return (
      <div id="StoreMainWindow">
        {
          this.props.featuredStoreInformation
          ?
            <div className="row">
              <div className="col s12 m12 l9">
                <FeaturedStoreArticle article={this.props.featuredStoreInformation.featured_article}/>
                <FeaturedStoreAlbum />
                <FeaturedStoreArtist />
                <RecentlyPurchased />
              </div>
              <div className="col s12 m12 l3">
                <RecentSongUploads />
                <RecentAlbumUploads />
              </div>
            </div>
          :
            <div id="LoadingTheStore" className="row">
              <h2>Fetching the good vibrations...</h2>
              <i className="material-icons">autorenew</i>
            </div>
        }

      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(StoreMainWindow);