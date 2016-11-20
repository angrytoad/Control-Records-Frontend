import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import './FeaturedStoreArtist.scss';

const mapStateToProps = ({test}) =>
  ({
    test
  });

const mapDispatchToProps = dispatch =>
  ({});

const FeaturedStoreArtist = React.createClass({

  render() {
    console.log(this.props.artist);

    let albumRows = this.props.artist.artist_albums.map((element, index) => {
      if(index < 8) {
        return (
          <tr key={index} className="album">
            <td className="album-details">
              <Link to={"/store/album/"+element.album_id}>{index+1}. {element.album_name}</Link>
              <i className="material-icons">add_shopping_cart</i>
            </td>
            <td className="album-play">
              <i className="material-icons">remove_red_eye</i>
            </td>
          </tr>
        )
      }
    });

    return (
      <div id="FeaturedStoreArtist" className="col s12 m12 l6">
        <div id="FeaturedStoreArtistArt">
          {
            this.props.artist.artist_avatar
            ?
              <img src={this.props.artist.artist_avatar} />
            :
              <img src="/assets/404avatar.png" />
          }

        </div>
        <div id="FeaturedStoreArtistDetails">
          <p className="featured-artist">Featured Artist</p>
          <h4 className="artist-title">{this.props.artist.artist_name}</h4>
          <p className="album-artists">Albums List</p>
          {
            albumRows.length > 0
            ?
              <table id="ArtistAlbums">
                <tbody>
                {albumRows}
                {
                  this.props.artist.artist_albums.length > 8
                    ?
                    <tr>
                      <td className="more-albums">
                        ...and <strong>{this.props.artist.artist_albums.length - 8}</strong> more.
                      </td>
                      <td className="album-play">
                      </td>
                    </tr>
                    :
                    false
                }

                </tbody>
              </table>
            :
              <p>
                <strong>{this.props.artist.artist_name}</strong> haven't released any albums yet, but don't let that stop you checking out their individual tracks
              </p>
          }

        </div>
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedStoreArtist);