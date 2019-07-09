import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Nav component
 * 
 * @class Nav
 * @extends {Component}
 */
export class Nav extends Component {

	//{Srting} active page link
	activePage = '/';

	constructor(props){
		super(props);

		//Get current location
		if(this.props.location){
			this.activePage = this.props.location.pathname;
		}
	}

	render(){
		return(
			<nav className="navbar-default navbar-static-side" role="navigation">
				<div className="sidebar-collapse">
					<ul className="nav metismenu" id="side-menu">
						<li className="nav-header">
							<div className="dropdown profile-element">
								<span>
									<img alt="image" className="img-circle" src="dist/img/profile_small.jpg" />
								</span>
								<a data-toggle="dropdown" className="dropdown-toggle" href="javascript:void(0);">
									<span className="clear">
										<span className="block m-t-xs"> 
											<strong className="font-bold">Admin</strong>
										</span>
										<span className="text-muted text-xs block">admin <b className="caret"></b></span>
									</span>
								</a>
							</div>
							<div className="logo-element">Admin</div>
						</li>
						<li className={this.activePage == '/'? 'active': ''}>
							<Link to="/">
								<i className="fa fa-th-large"></i> <span className="nav-label">Clients</span>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}