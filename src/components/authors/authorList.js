"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorActions = require('../../actions/authorActions');
var toastr = require('toastr');

var AuthorList = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },

  deleteAuthor: function(id, event){
    event.preventDefault();
    debugger;
    AuthorActions.deleteAuthor(id);
    toastr.success('Author Deleted');
  },

  render: function(){
    var createAuthorRow = function(author){
      return (
        <tr key={author.id}>
          <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
          <td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    };

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="span12">
            <h1>Authors</h1>
            <table className="table">
              <thead>
                <th></th>
                <th>ID</th>
                <th>Name</th>
              </thead>
              <tbody>
                {this.props.authors.map(createAuthorRow, this)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = AuthorList;
