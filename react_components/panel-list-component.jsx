var React = require('react');
var PanelListItem = require('./panel-list-item-component.jsx');


module.exports = React.createClass({
	displayName: 'PanelList',
    render: function () {
        var items = this.props.cars.map(function (car) {
            return (
                <PanelListItem key={car.id} car={car} />
            );
        });
        return (
            <ul>
                {items}
            </ul>
        );
    }
});
