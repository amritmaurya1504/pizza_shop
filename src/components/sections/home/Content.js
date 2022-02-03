import React, { Component, Fragment } from 'react';
import Aboutus from './Aboutus';
import Banner from './Banner';
import Categories from './Categories';
import Cta from './Cta';
import Products from './Products';
import Testimonials from './Testimonials';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                {/* <Aboutus /> */}
                {/* <Categories /> */}
                <div className="section products-section">
                    <Products />
                </div>
                {/* <Cta /> */}
                {/* <Testimonials /> */}
            </Fragment>
        );
    }
}

export default Content;