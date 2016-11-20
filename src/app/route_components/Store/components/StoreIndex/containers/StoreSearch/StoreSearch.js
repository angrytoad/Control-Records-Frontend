import React from 'react';
import {connect} from 'react-redux';
import serialize from 'form-serialize';

import { makeStoreSearch } from './actions';

import SearchResults from './components/SearchResults/SearchResults';

import './StoreSearch.scss';

const mapStateToProps = ({storeSearchResults, storeSearchLoading}) =>
  ({
    storeSearchResults,
    storeSearchLoading
  });

const mapDispatchToProps = dispatch =>
  ({
    makeStoreSearch: (search) => dispatch(makeStoreSearch(search))
  });

const StoreSearch = React.createClass({

  onSubmitSearch(e){
    e.preventDefault();
    let form = document.querySelector('#StoreSearchBar');
    let data = serialize(form, { hash: true });
    if(typeof data.search !== 'undefined'){
      if(data.search.length >= 3){
        this.props.makeStoreSearch(data.search);
      }
    }

  },

  render() {
    return (
      <div id="StoreSearch">
        <form id="StoreSearchBar" onSubmit={(e) => this.onSubmitSearch(e)}>
          <input type="text" name="search" placeholder="Search for a Song, Album or Artist" autoComplete="off"/>
          {
            this.props.storeSearchLoading
            ?
              <i className="material-icons rotating">autorenew</i>
            :
              <i className="material-icons" onClick={(e) => this.onSubmitSearch(e)}>search</i>
          }
        </form>
        {
          this.props.storeSearchResults !== false && !this.props.storeSearchLoading
          ?
            <SearchResults results={this.props.storeSearchResults} />
          :
            false
        }

      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(StoreSearch);