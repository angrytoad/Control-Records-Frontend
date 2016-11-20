import React from 'react';
import marked from 'marked';
import { Link } from 'react-router';
import truncate from 'truncate';

import './FeaturedStoreArticle.scss';

const FeaturedStoreArticle = React.createClass({

  render() {
    marked.setOptions({
      gfm: false
    });

    let article_body = {
      __html: truncate(marked(this.props.article.article_body),164,{ellipsis:'...'})
    };

    console.log(this.props.article);

    return (
      <div id="FeaturedStoreArticle" className="col s12">
        <div className="row">
          <div className="col s12 m7 article-image">
            <img src={this.props.article.article_banner} />
          </div>
          <div className="col s12 m5 article-text-wrapper">
            <div className="article-text">
              <h4>{this.props.article.article_title}</h4>
              <div className="flow-text" dangerouslySetInnerHTML={article_body}></div>
            </div>
            {
              this.props.article.article_body.length > 164
                ?
                <Link to={"/news/"+this.props.article.article_url}>
                  <button className="btn btn-large">
                    <i className="material-icons">link</i>
                  </button>
                </Link>
                :
                false
            }
          </div>
        </div>
      </div>
    )
  }

});

export default FeaturedStoreArticle;