import React from 'react';
import { Link } from 'react-router';

import './SearchResults.scss';

const SearchResults = React.createClass({

  closeSearch(e) {
    $('#SearchResults').removeClass('slideInDown').addClass('slideOutUp');
    setTimeout(() => {
      this.props.handleCloseResults(e)
    },300);
  },

  render() {

    let artists = this.props.results.artists.map((element, index) => {
        return (
          <Link key={index} to={"/store/artist/"+element.url_safe_name}>
            <li>
              <img className="result-avatar" src={element.band_avatar_url} />
              {element.name}
            </li>
          </Link>
        )
    });

    let albums = this.props.results.albums.map((element, index) => {
        return (
          <Link key={index} to={"/store/album/"+element.url_safe_name}>
            <li>
              <img className="result-avatar" src={element.album_image_url} />
              {element.name}
            </li>
          </Link>
        )
    });

    let songs = this.props.results.songs.map((element, index) => {
      return (
        <Link key={index} to={"/store/song/"+element.url_safe_name}>
          <li>{element.name} <small>- <i>{element.artist}</i></small></li> 
        </Link>
      )
    });

    let resultCount = artists.length + albums.length + songs.length;

    console.log(this.props.results);

    
    return (
      <div id="SearchResults" className="animated slideInDown quick">
        {
          resultCount > 0
          ?
            <div>
              <h5>We found {resultCount} result(s) that match <i>'{this.props.search}'</i></h5>
              <ul className="search-results-list">
                {
                  artists.length > 0
                    ?
                    <li className="artists">
                      <p className="result-heading">Artists</p>
                      <ul>
                        {artists}
                      </ul>
                    </li>
                    :
                    false
                }
                {
                  albums.length > 0
                    ?
                    <li className="albums">
                      <p className="result-heading">Albums</p>
                      <ul>
                        {albums}
                      </ul>
                    </li>
                    :
                    false
                }
                {
                  songs.length > 0
                    ?
                    <li className="songs">
                      <p className="result-heading">Songs</p>
                      <ul>
                        {songs}
                      </ul>
                    </li>
                    :
                    false
                }
              </ul>
            </div>
          :
            <div>
              <h5>Unfortunately, there were no results that matched <i>'{this.props.search}'</i>, perhaps you might need to alter your query?</h5>
            </div>
        }
        <i className="material-icons close-results" onClick={(e) => this.closeSearch(e)}>close</i>
      </div>
    )
  }

});

export default SearchResults;