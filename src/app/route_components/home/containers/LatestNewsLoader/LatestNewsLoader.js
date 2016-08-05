import React from 'react';
import {connect} from 'react-redux';

import { loadLatestNews } from './actions.js';

import LatestNewsArticle from '../../components/LatestNews/components/LatestNewsArticle/LatestNewsArticle';

const mapStateToProps = ({ news }) =>
  ({
    news
  });

const mapDispatchToProps = dispatch =>
  ({
    loadLatestNews: () => dispatch(loadLatestNews())
  });

const LatestNewsLoader = React.createClass({
  
  render() {
    const articles = Object.keys(this.props.news).map((ele, index) => {
      return <LatestNewsArticle data={this.props.news[ele]} key={index} />
    });
    return (
      <div className="gigs-loader">
        {articles}
      </div>
    )
  },

  componentDidMount() {
    this.props.loadLatestNews();
  }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(LatestNewsLoader);