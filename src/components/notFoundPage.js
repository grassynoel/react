"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
  render: function(){
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Page Not Found</h1>
            <p>Whoops! Sorry, ther is nothing to see here</p>
            <p><Link to="app">Back to Home</Link></p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = NotFoundPage;
