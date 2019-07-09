import React from 'react';

//Functional component to show client details
export default function ClientDetails(props){
    return(
        <div className="col-sm-4">
            <div className="ibox ">
                <div className="ibox-content">
                    <div className="tab-content">
                        <div id="contact-1" className="tab-pane active">
                            <div className="row m-b-lg">
                                <div className="col-lg-4 text-center">
                                    <h2>{props.client.name}</h2>
                                    <div className="m-b-sm">
                                        <img alt="image" className="img-circle" src={props.client.avatar} style={{width: '62px'}}/>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <strong>About me</strong>
                                    <p>{props.client.about}</p>
                                </div>
                            </div>
                            <div className="client-detail">
                                <div className="slimScrollDiv" style={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    width: 'auto'}}><div className="full-height-scroll" style={{overflow: 'hidden', width: 'auto'}}>
                                    <strong>Notes</strong>
                                    <p>{props.client.about}</p>
                                </div>
                                <div className="slimScrollBar" style={{background: 'rgb(0, 0, 0)',width: '7px', position: 'absolute', top: '267px', opacity: 0.4, display: 'none', borderRadius: '7px', zIndex: 99, right: '1px'}}></div>
                                <div className="slimScrollRail" style={{width: '7px', position: 'absolute', top: '0px', display: 'none', borderRadius: '7px', background: 'rgb(51, 51, 51)', opacity: 0.2, zIndex: 90, right: '1px'}}></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}