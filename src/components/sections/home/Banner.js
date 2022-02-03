import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
// import { home as bannerpost } from '../../../data/banner'
// import bannerData from '../../../data/banner';
import bg1 from "../../../assets/img/banner/3.png"
import bg2 from "../../../assets/img/banner/1.png"
import bg3 from "../../../assets/img/banner/2.png"

class Banner extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider2.slickNext();
    }
    previous() {
        this.slider2.slickPrev();
    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }]
        }
        const settingsthumb = {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            focusOnSelect: true,
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    autoplay: true
                }
            }
            ]
        }
        return (
            <div className="banner banner-1 bg-cover">
                <Slider className="banner-slider" {...settings} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)}>
                <div className="banner-item">
                            <div className="banner-inner">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-xl-6 col-lg-6">
                                            <h1 className="title">Farm House</h1>
                                            <h4>Truly Italian Farm House</h4>
                                            <p className="subtitle">This Italian Farmhouse Rustic Pizza is a complete meal on a pizza. Includes prosciutto, ricotta, roasted yellow peppers, basil, pistachios and balsamic vinegar. My husband LOVES Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque non aliquid ea impedit doloribus laudantium unde atque ab sunt! making pizza – he grills it in the summer, bakes it in the winter, and comes up with a new flavor combo each time.</p>
                                            <div className="banner-icons-wrapper">
                                                <div className="banner-icon">
                                                    <i className="flaticon-calories" />
                                                    <div className="banner-icon-body">
                                                        <h5>169/slice</h5>
                                                        <span>Calories</span>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="banner-controls">
                                                <Link to="/menu-v1" className="btn-custom primary">Order <i className="flaticon-shopping-bag" /> </Link>
                                                <h4>$20</h4>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <img src={bg1} alt="Pizza" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="banner-item">
                            <div className="banner-inner">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-xl-6 col-lg-6">
                                            <h1 className="title">Feeling Cheesy</h1>
                                            <h4>Pepperoni Pizza With Four Cheeses</h4>
                                            <p className="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, explicabo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vitae culpa? Recusandae ratione, veniam laborum sed quam officiis! Optio, autem!</p>
                                            <div className="banner-icons-wrapper">
                                                <div className="banner-icon">
                                                    <i className="flaticon-calories" />
                                                    <div className="banner-icon-body">
                                                        <h5>650</h5>
                                                        <span>Calories</span>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                            <div className="banner-controls">
                                                <Link to="/menu-v1" className="btn-custom primary">Order <i className="flaticon-shopping-bag" /> </Link>
                                                <h4>$20</h4>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <img src={bg2} alt="Pizza" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banner-item">
                            <div className="banner-inner">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-xl-6 col-lg-6">
                                            <h1 className="title">Green Delight</h1>
                                            <h4>Vegetarian Pizza With Thin Crust</h4>
                                            <p className="subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, aperiam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet quasi illo veritatis laboriosam ipsa id iusto quod voluptas corrupti at placeat dignissimos voluptate quos, quae qui quis ad Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nesciunt aliquid et deleniti dicta, voluptatem ab dolore vero ipsa asperiores. quidem aperiam?</p>
                                            <div className="banner-icons-wrapper">
                                                <div className="banner-icon">
                                                    <i className="flaticon-calories" />
                                                    <div className="banner-icon-body">
                                                        <h5>230</h5>
                                                        <span>Calories</span>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="banner-controls">
                                                <Link to="/menu-v1" className="btn-custom primary">Order <i className="flaticon-shopping-bag" /> </Link>
                                                <h4>$20</h4>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <img src={bg3} alt="Pizza" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Slider>
                <div className="banner-slider-nav">
                    <div className="container">
                        {/* Arrow */}
                        <i className="slider-prev fas fa-arrow-left slick-arrow" onClick={this.previous} />
                        <Slider className="banner-slider-nav-inner" {...settingsthumb} asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)}>
                                <div className="banner-nav-item">
                                    <div className="banner-nav-item-inner">
                                        <img src={bg1} />
                                        <div className="banner-nav-item-body">
                                            <h5>Vegeterian</h5>     
                                            <span>$10</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-nav-item">
                                    <div className="banner-nav-item-inner">
                                        <img src={bg2} />
                                        <div className="banner-nav-item-body">
                                            <h5>Pepperoni</h5>     
                                            <span>$1</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-nav-item">
                                    <div className="banner-nav-item-inner">
                                        <img src={bg3} />
                                        <div className="banner-nav-item-body">
                                            <h5>Vegeterian</h5>     
                                            <span>$12</span>
                                        </div>
                                    </div>
                                </div>
                        </Slider>
                        {/* Arrow */}
                        <i className="slider-next fas fa-arrow-right slick-arrow" onClick={this.next} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;