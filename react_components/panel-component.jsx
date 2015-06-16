var React = require('react');
var PanelHeaderComponent =  require('./panel-header-component.jsx');
var PanelSearchComponent =  require('./panel-search-component.jsx');
var PanelList = require('./panel-list-component.jsx');



module.exports = React.createClass({
	displayName: 'PanelComponent',
	getInitialState: function() {
        return {cars: []}
    },

    componentDidMount:function() {
        this.props.service.getAll().done(function(result) {
            this.setState({cars: result});
        }.bind(this));
    },

    searchHandler:function(key) {
        this.props.service.findByType(key).done(function(result) {
            this.setState({searchKey: key, cars: result});
        }.bind(this));
    },
    render: function () {
        return (
            <div className="panel">
                <PanelHeaderComponent text="Car Inventory"/>
                <PanelSearchComponent searchHandler={this.searchHandler}/>
                <PanelList cars={this.state.cars}/>
            </div>
        );
    }
});
