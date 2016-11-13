import React from 'react';

const Store = React.createClass({
  
  render() {
    return (
      <div id="Store">
        {this.props.children}
      </div>
    )
  }
  
});

export default Store;