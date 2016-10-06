import React from 'react';
import Helmet from 'react-helmet';
import marked from 'marked';
import { Link } from 'react-router';
import truncate from 'truncate';


import './ActiveNewsPage.scss';

const ActiveNewsPage = (props) => {

  let html = {
    __html: ''
  };

  if(typeof props.news.body !== 'undefined') {
    marked.setOptions({
      gfm: false
    });

    html = {
      __html: marked(props.news.body)
    };
  }

  return (
    <div id="ActiveNewsPage">
      <Helmet
        title={props.news.title}
        meta={[
          {'property':'og:type', 'content':'article'},
          {'property':'og:title', 'content':props.news.title},
          {'property':'og:description', 'content':truncate(props.news.body,128,{ellipsis:'...'})},
          {'property':'og:image', 'content':'https://ctrl-records.com/assets/404banner.jpg'}
        ]}
      />

      <h4 id="ActiveNewsPageTitle" className="center-align">{props.news.title}</h4>
      <div className="banner-wrapper">
        <img id="banner-image" src="/assets/404banner.jpg" />
      </div>
      <div className="container" id="ActiveNewsPageContent">
        <div id="body-text" className="flow-text" dangerouslySetInnerHTML={html}></div>
        <hr />
        <div id="news-links" className="flow-text">
          <ul>
            <li>Published on {props.news.created_at}</li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )

};

export default ActiveNewsPage;