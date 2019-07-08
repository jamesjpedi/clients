import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { ClientsPage } from '../pages/ClientsPage';

let $ = window.jQuery;

class App extends React.Component {

	constructor(props){
		super(props);
		history.listen((listen, action) => {});
	}

	componentDidMount(){
		this.initializeResponsiveView();
	}

	/**
	 * Responsive behaviour to body
	 */
	initializeResponsiveView(){
		//Screen style fixes
		if ($(window).width() < 769) {
			$('body').addClass('body-small')
		} else {
			$('body').removeClass('body-small')
		}

		// Minimalize menu when screen is less than 768px
		$(window).bind("resize", function () {
			if ($(this).width() < 769) {
				$('body').addClass('body-small')
			} else {
				$('body').removeClass('body-small')
			}
		});
	}

	render() {
		return(
			<div>
				<Router history={history}>
					<div>
						<Route path="/" component={ClientsPage} />
					</div>
				</Router>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { clients } = state;
	return {
		clients
	};
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };