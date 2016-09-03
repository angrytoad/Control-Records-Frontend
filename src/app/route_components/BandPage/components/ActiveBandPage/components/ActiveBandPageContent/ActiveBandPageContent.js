import React from 'react';

import './ActiveBandPageContent.scss';

import ActiveBandPageContentAbout from './components/ActiveBandPageContentAbout/ActiveBandPageContentAbout';
import ActiveBandPageContentRecentMusic from './components/ActiveBandPageContentRecentMusic/ActiveBandPageContentRecentMusic';
import ActiveBandPageContentUpcomingGigs from './components/ActiveBandPageContentUpcomingGigs/ActiveBandPageContentUpcomingGigs';
import ActiveBandPageContentMusicDisplayer from './components/ActiveBandPageContentMusicDisplayer/ActiveBandPageContentMusicDisplayer';


const ActiveBandPageContent = (props) => {
  return (
    <div id="ActiveBandPageContent">
      <div className="container">
        <div className="row">
          <div className="col s12  m6 l8 left-column">
            {
              typeof props.band.music !== 'undefined'
                ?
                <div>
                  {
                    props.band.music !== null
                      ?
                      <ActiveBandPageContentMusicDisplayer band={props.band}/>
                      :
                      false
                  }
                </div>
                :
                false
            }
          </div>
          <div className="col s12 m6 l4 right-column">
            <ActiveBandPageContentUpcomingGigs band={props.band} />
          </div>
        </div>
        <div className="row">
          <div className="col s12  m6 l6 left-column">
            {
              typeof props.band.extra !== 'undefined'
                ?
                <div>
                  {
                    props.band.extra.about !== null
                      ?
                      <ActiveBandPageContentAbout band={props.band}/>
                      :
                      false
                  }
                </div>
                :
                false
            }
          </div>
          <div className="col s12 m6 l6 right-column">
            <ActiveBandPageContentRecentMusic band={props.band} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default ActiveBandPageContent;