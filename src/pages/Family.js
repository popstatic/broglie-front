import React, { Component, Fragment } from "react";
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';
import Familytree from '../components/Familytree/Familytree'



class Event extends Component {

    render() {
        return (
            <Fragment>
                <Header />
                <Leftnav />
                <Rightchat />

                <div className="main-content right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left pe-0">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="card w-100 border-0 shadow-none  border-0 mb-3 overflow-hidden ">
                                        <Familytree />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Popupchat />
                <Appfooter />

            </Fragment>
        );
    }
}

export default Event;