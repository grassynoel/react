"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var AuthorStore = require('../../stores/authorStore');
var AuthorActions = require('../../actions/authorActions');
var AuthorList = require('./authorList');

var AuthorPage = React.createClass({
      getInitialState: function(){
        return {
          authors: AuthorStore.getAllAuthors()
        };
      },

      componentWillMount: function(){
        AuthorStore.addChangeListener(this._onChange);
      },

      //Clean up when this component is unmounted
      componentWillUnmount: function(){
        AuthorStore.removeChangeListener(this._onChange);
      },

      _onChange: function(){
        debugger;
        this.setState({ authors: AuthorStore.getAllAuthors() });
      },

      render: function(){
        return (
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} />
              </div>
            </div>
          </div>
        );
      }
    });

module.exports = AuthorPage;
