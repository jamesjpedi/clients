import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let $ = window.jQuery;

export class PageHeader extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let $this = this;
	}

	render() {
		return (
			<div className="row wrapper border-bottom white-bg page-heading">
				<div className="col-lg-10">
					<h2>{this.props.title}</h2>
					<ol className="breadcrumb">
						<li> Home </li>
						<li className="active">
							<strong>{this.props.crumbTitle}</strong>
						</li>
					</ol>
				</div>
				<div className="col-lg-2"></div>
			</div>
		);
	}
}


