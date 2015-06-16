console.log('Welcome to my Car Dealership')

// require the local module
var React = require('react');
var PanelComponent =  require('./panel-component.jsx');
var CarPage = require('./car-details-component.jsx');
var Router = require('./router.jsx');

CarService = require('./data.jsx');



Router.addRoute('', function() {
	React.render(
		<PanelComponent service={CarService}/>,
		document.body
	);
});

Router.addRoute('cars/:id', function(id) {
    React.render(
        <CarPage carId={id} service={CarService}/>,
        document.body
    );
});


Router.start();