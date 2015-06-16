var React = require('react');

module.exports = React.createClass({
	displayName: 'PanelHeaderComponent',
    render: function () {
        return (
			<h1 className="title">{this.props.text}</h1>
        )
    }
});