import React from 'react';

import './NewsPage.scss';

import NewsPageLoader from './containers/NewsPageLoader/NewsPageLoader';

const NewsPage = (props) => {
  return (
    <div id="NewsPage" className="page">
      <NewsPageLoader url_name={props.params.news_url} />
    </div>
  )
};

export default NewsPage;