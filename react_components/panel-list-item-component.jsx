var React = require('react');

module.exports = React.createClass({
	displayName: 'PanelListItem',
    render: function () {
        return (
           <li>
                <a href={"#cars/" + this.props.car.id}>
            	    <img className="" src={"img/" + this.props.car.type + ".jpg" }/>
                    <span className="vehicle"> {this.props.car.type} {this.props.car.make}</span>
                </a>
           </li>
        );
    }
});
