var React = require('react');

module.exports = React.createClass({
	displayName: 'PanelSearchComponent',
    searchHandler: function() {
        this.props.searchHandler(this.refs.searchKey.getDOMNode().value);
    },
    render: function () {
        return (
            <input type="search" ref="searchKey" onChange={this.searchHandler}/>
        );
    }
});
