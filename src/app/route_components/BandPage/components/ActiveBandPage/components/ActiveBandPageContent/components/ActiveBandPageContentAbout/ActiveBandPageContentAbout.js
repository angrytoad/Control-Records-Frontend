import React from 'react';
import marked from 'marked';

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
      <h2>About {props.band.name}</h2>
      <div id="about-text" className="flow-text" dangerouslySetInnerHTML={html}></div>
    </div>
  )
};

export default ActiveBandPageContentAbout;