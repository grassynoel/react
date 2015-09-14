"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
      render: function(){
        return (
          <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="jumbotron">
                  <h1>React Administration</h1>
                  <p>React, React Reactor and Flux for ultra-responsive web apps.</p>
                  <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
              </div>
            </div>
          </div>
          </div>
        );
      }
    });

module.exports = Home;
