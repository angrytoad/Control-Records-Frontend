import React from 'react';

import './LatestNewsArticle.css';

const LatestNewsArticle = (props) => {
  return (
    <div className="LatestNewsArticle valign-wrapper">
      <h4 className="title">{props.data.article.title}</h4>
      <i className="material-icons right white-text goto">chevron_right</i>
    </div>
  )
};

export default LatestNewsArticle;