import React from 'react';
import marked from 'marked';
import Helmet from 'react-helmet';
import truncate from 'truncate';

import './ActiveBandPageContentAbout.scss';

const ActiveBandPageContentAbout = (props) => {

  marked.setOptions({
    gfm: false
  });

  let html = {
    __html: marked(props.band.extra.about)
  };

  return (
    <div id="ActiveBandPageContentAbout">
      <Helmet
        meta={[
          {'property':'og:description', 'content':truncate(props.band.extra.about,128,{ellipsis:'...'})},
        ]}
        />
      <h4>About {props.band.name}</h4>
      <div id="about-text" className="flow-text" dangerouslySetInnerHTML={html}></div>
    </div>
  )
};

export default ActiveBandPageContentAbout;