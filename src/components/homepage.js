"use strict";

var React = require('react');

var Home = React.createClass({
      render: function(){
        return (
          <div className="container">
          <div className="row">
            <div className="span12">
              <div className="jumbotron">
                  <h1>React Administration</h1>
                  <p>React, React Reactor and Flux for ultra-responsive web apps.</p>
              </div>
            </div>
          </div>
          </div>
        );
      }
    });

module.exports = Home;
