

import React from 'react';

//Functional component to show client list item
export default function ClientListItem(props){
    return(
        <tr onClick={() => props.showClient(props.client)} key={props.client.id}>
            <td className="client-avatar"><img alt="image" src={props.client.icon} /> </td>
            <td><a data-toggle="tab" href="#contact-1" className="client-link">{props.client.name}</a></td>
            <td> {props.client.title}</td>
            <td className="contact-type"><i className="fa fa-envelope"> </i></td>
            <td> {props.client.email}</td>
        </tr>
    );
}