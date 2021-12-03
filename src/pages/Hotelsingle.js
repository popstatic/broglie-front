import React, { Component , Fragment } from "react";
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';

import Slider from "react-slick";

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const slideList = [
    {   
        imageUrl: 'hotel.png',
        name: 'product-image ',
    },
    {   
        imageUrl: 'hotel.png',
        name: 'product-image ',
    },
    {   
        imageUrl: 'hotel.png',
        name: 'product-image ',
    },
    
]



const TabOne = [
    {
        image: '01',
        bigImage: 'assets/images/hotel.png',
    },
    {
        image: '02',
        bigImage: 'assets/images/hotel.png',
    },
    {
        image: '03',
        bigImage: 'assets/images/hotel.png',
    },
    {
        image: '04',
        bigImage: 'assets/images/hotel.png',
    },
    {
        image: '05',
        bigImage: 'assets/images/hotel.png',
    },
    {
        image: '06',
        bigImage: 'assets/images/hotel.png',
    },
]



class Hotelsingle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: 0,
            isOpen: false,
        };
    }
    render() {
        const { tab1, isOpen } = this.state;
        const hotelsettings = {
            arrows: false,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            centerMode: false,
            variableWidth: false,
            responsive: [{
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                }
            }]
        };
        return (
            <Fragment> 
                <Header />
                <Leftnav />
                <Rightchat />

                <div className="main-content right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left pe-0">
                            <div className="row">
                                <div className="col-xl-12 col-xxl-12 col-lg-12">
                                    <Slider {...hotelsettings}>
                                        {slideList.map((value , index) => (
                                        <div key={index} className="pe-2">
                                            <img src={`assets/images/${value.imageUrl}`} alt="avater" className="rounded-3 img-fluid" />
                                        </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-8 col-xxl-9 col-lg-8">

                                    <div className="card d-block mt-3 border-0 shadow-xss bg-white p-lg-5 p-4">
                                        <span className="font-xsssss fw-700 ps-3 pe-3 lh-32 text-uppercase rounded-3 ls-2 bg-primary-gradiant d-inline-block text-white ">Nouvel évenement !</span>
                                        <h2 className="fw-700 font-lg mt-3 mb-2">Cousinade party au 192 rue de Javel</h2>
                                        <p className="font-xsss fw-500 text-grey-500 lh-30 pe-5 mt-3 me-5">ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu.</p>
                                        
                                        <div className="clearfix"></div>
             
                                        <a href="/defaulthoteldetails" className="bg-primary-gradiant border-0 text-white fw-600 text-uppercase font-xssss float-left rounded-3 d-inline-block mt-0 p-2 lh-34 text-center ls-3 w200">Participer !</a>
                                        <br />
                                    </div>

                                    <div className="card d-block border-0 rounded-3 overflow-hidden p-4 shadow-xss mt-4">
                                        <h2 className="fw-700 font-sm mb-3 mt-1 ps-1 mb-3">Gallery</h2>
                                        <div className="row ps-3 pe-3">
                                            {TabOne.map((value , index) => (
                                                <div className="col-sm-4 col-xss-4 pe-1 ps-1 mb-2" key={index}>
                                                    {isOpen && (
                                                        <Lightbox
                                                            mainSrc={TabOne[tab1].bigImage}
                                                            onCloseRequest={() => this.setState({ isOpen: false })}
                                                            onMovePrevRequest={() =>
                                                            this.setState({
                                                                tab1: (tab1 + TabOne.length - 1) % TabOne.length,
                                                            })
                                                            }
                                                            onMoveNextRequest={() =>
                                                                this.setState({
                                                                    tab1: (tab1 + 1) % TabOne.length,
                                                                })
                                                            }
                                                        />
                                                    )}
                                                    
                                                    <div onClick={() => this.setState({ isOpen: true, tab1: index })}>
                                                        <a href="#portfolio-details">
                                                            <img src={`${value.bigImage}`} alt="Portfolio" className="w-100"/>
                                                        </a>
                                            
                                                    </div>
                                                
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                                <div className="col-xl-4 col-xxl-3 col-lg-4 ps-0">

                                    <div className="card w-100 border-0 mt-3 mb-4 p-lg-4 p-3 shadow-xss position-relative rounded-3 bg-white">
                                        <div className="row">
                                            <div className="col-2 text-left">
                                                <figure className="avatar float-left mb-0"><img src="assets/images/user.png" alt="avater" className="float-right shadow-none w40 me-2" /></figure>
                                            </div>
                                            <div className="col-10 ps-4">
                                                <div className="content">
                                                    <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">Goria Coast y participe</h6>
                                                </div>
                                            </div>
                                        </div>
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

export default Hotelsingle;