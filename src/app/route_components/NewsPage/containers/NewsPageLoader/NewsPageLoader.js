import React from 'react';
import {connect} from 'react-redux';

import { loadNewsPage, resetNewsPage } from './actions';

import ActiveNewsPage from '../../components/ActiveNewsPage/ActiveNewsPage';
import News404 from '../../components/News404/News404';

const mapStateToProps = ({ activeNews, news404 }) =>
  ({
    activeNews,
    news404
  });

const mapDispatchToProps = dispatch =>
  ({
    loadNewsPage: (news) => dispatch(loadNewsPage(news)),
    resetNewsPage: () => dispatch(resetNewsPage())
  });

const NewsPageLoader = React.createClass({
  render() {

    return (
      <div id="NewsPageLoader">
        { this.props.news404
          ?
          <News404 />
          :
          <ActiveNewsPage news={this.props.activeNews} />
        }

      </div>
    )
  },

  componentWillMount(){
    /**
     * If we have visited a new band page instead of the last visited page then reset the current active band.
     * This is to ensure that users don't experience a lagging effect where they load a new page
     * but for a brief amount of time old information is shown, this could cause
     * quite a bit of confusion.
     */
    if(this.props.activeNews.url_name !== this.props.url_name){
      this.props.resetNewsPage();
    }

    this.props.loadNewsPage(this.props.url_name);
  }
  

});

export default connect(mapStateToProps, mapDispatchToProps)(NewsPageLoader);