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
          <div className="col s12  m6 l6 left-column">
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
          <div className="col s12 m6 l6 right-column">
            <ActiveBandPageContentRecentMusic band={props.band} />
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
          {
            typeof props.band.gigs !== 'undefined'
              ?
              <div className="col s12 m6 l6 right-column">
                {
                  props.band.gigs !== null
                    ?
                    <div>
                      <h4>Upcoming Gigs</h4>
                      <ActiveBandPageContentUpcomingGigs band={props.band} />
                    </div>
                    :
                    <div className="upcoming-gigs-empty">
                      <h4>Upcoming Gigs</h4>
                      <p className="flow-text">
                        <i>{props.band.name} does not currently have any upcoming gigs, but stay tuned as they might do soon!</i>
                      </p>
                    </div>
                }

              </div>
              :
              false
          }

        </div>
      </div>
    </div>
  )
};

export default ActiveBandPageContent;