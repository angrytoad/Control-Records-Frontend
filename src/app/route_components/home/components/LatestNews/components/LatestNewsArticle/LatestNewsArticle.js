import React from 'react';
import { Link } from 'react-router';

import './LatestNewsArticle.scss';

const LatestNewsArticle = (props) => {
  return (
    <Link to={"/news/"+props.data.article.url_name}>
      <div className="LatestNewsArticle valign-wrapper">
        <h4 className="title">{props.data.article.title}</h4>
        <i className="material-icons right white-text goto">chevron_right</i>
      </div>
    </Link>
  )
};

export default LatestNewsArticle;