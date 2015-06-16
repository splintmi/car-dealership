var React = require('react');
var PanelHeaderComponent =  require('./panel-header-component.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {car: {}};
    },
    componentDidMount: function() {
        this.props.service.findById(this.props.carId).done(function(result) {
            this.setState({car: result});
        }.bind(this));
    },
    render: function () {
        return (
            <div>
                <PanelHeaderComponent text="Car Details"/>
                <h3>{this.state.car.type} {this.state.car.make}</h3>
                {this.state.car.title}
            </div>
        );
    }
});