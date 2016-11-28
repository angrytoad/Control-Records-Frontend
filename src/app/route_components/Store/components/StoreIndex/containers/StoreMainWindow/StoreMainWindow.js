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
                <FeaturedStoreArticle article={this.props.featuredStoreInformation.featured_article} />
                <div className="col s12 featured-album-artist">
                  <FeaturedStoreAlbum album={this.props.featuredStoreInformation.featured_album} />
                  <FeaturedStoreArtist artist={this.props.featuredStoreInformation.featured_artist} />
                </div>
                <div className="col s12 recently-purchased-wrapper">
                  <RecentlyPurchased recently_purchased={this.props.featuredStoreInformation.recently_purchased_items} />
                </div>
              </div>
              <div className="col s12 m12 l3">
                <RecentSongUploads songs={this.props.featuredStoreInformation.recent_song_uploads}/>
                <RecentAlbumUploads albums={this.props.featuredStoreInformation.recent_album_uploads}/>
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