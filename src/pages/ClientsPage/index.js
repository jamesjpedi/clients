import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Nav } from '../../Components/Nav';
import { Header, PageHeader } from '../../Components/Header';
import { userService } from '../../_services';

let $ = window.jQuery;

class ClientsPage extends React.Component {

	constructor(props){
		super(props);
		
		this.state = {
			loading : props.clients.loading,
			clients : props.clients.clients,
        }
    }
    
    componentWillReceiveProps = (props) => {
        this.setState({
            loading : props.clients.loading,
			clients : props.clients.clients,
        });
    }

	componentDidMount = () => {
		$(document).ready(function() {
			$('.footable').footable();
		});

		this.loadusers();
	}

	loadusers = () => {
		// userService.getUsers()
		// 	.then(users => {

		// 		if(!users){
		// 			return;
		// 		}

		// 		this.setState({
		// 			users : users
		// 		});
		// 	})
		// 	.catch(error => {
		// 		console.log(error);
		// 	});
    }
	
	render() {

		return (
			<div id="wrapper">
				<Nav location={this.props.location} />
				<div id="page-wrapper" className="gray-bg">
					<PageHeader title="Users" crumbTitle="Users" />

					
                    <div className="wrapper wrapper-content animated fadeInRight ecommerce">
						<div className="row">
							<div className="col-lg-12">
								<div className="ibox">
									<div className="ibox-content">
										<table className="footable table table-stripped toggle-arrow-tiny" data-page-size="20">
											<thead>
												<tr>
													<th data-toggle="true">Name</th>
                                                    <th>School</th>
													<th>Email</th>
													<th>Status</th>
													<th className="text-right" data-sort-ignore="true">Action</th>
												</tr>
											</thead>
											<tbody>
												{this.state.clients.map((user, key) =>
													<tr key={user._id}>
														<td>{user.name}</td>
                                                        <td>{user.collage}</td>
														<td>{user.email}</td>
														<td>
															<span className={'label '+(user.active ? 'label-primary' : 'label-danger')}>{user.active ? 'Active' : 'Locked'  }</span>
														</td>
														<td className="text-right">
															<div className="btn-group">
                                                                <Link to={{
																		pathname : "/user/"+user._id,
																		params: {
																			removeUser : this.removeUser
																		}
																	}} params={{ removeUser: 'this.removeUser' }} className="btn-white btn btn-xs">
                                                                    View
                                                                </Link>
																{/* <button onClick={() => this.openUser(user)} className="btn-white btn btn-xs">View</button> */}
															</div>
														</td>
													</tr>
												)}
											</tbody>
											<tfoot>
												<tr>
													<td colSpan="6">
														<ul className="pagination pull-right"></ul>
													</td>
												</tr>
											</tfoot>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		);

	}
}

function mapStateToProps(state) {
	const { clients } = state
	return {
		clients
	};
}

const connectedClientsPage = connect(mapStateToProps)(ClientsPage);
export { connectedClientsPage as ClientsPage };