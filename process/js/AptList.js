var React = require('react');

var AptList = React.createClass({

  handleDelete: function() {
    this.props.onDelete(this.props.whichItem)
  },

  render: function() {
    return(
      <li className="car-item media">
        <div className="media-left">
          <button className="car-delete btn btn-xs btn-danger" onClick={this.handleDelete}>
          <span className="glyphicon glyphicon-check"></span></button>
        </div>
        <div className="car-info media-body">
          <div className="car-head">
            <span className="car-name">{this.props.singleItem.carName}</span>
            <span className="apt-date pull-right">{this.props.singleItem.aptDate}</span>
          </div>
          <div className="owner-name"><span className="label-item">Owner:&nbsp;</span>
          {this.props.singleItem.ownerName}</div>
          <div className="apt-notes">{this.props.singleItem.aptNotes}</div>
        </div>
      </li>
    ) // return
  } // render
}); //AptList

module.exports=AptList;
