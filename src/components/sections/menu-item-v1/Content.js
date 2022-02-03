import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getProduct } from '../../../helper/Producthelper';
import { Rating } from "../../../helper/helper";
import productcategory from "../../../data/productcategory.json";
import blogtags from '../../../data/blogtags.json';
import { Tab, Nav } from "react-bootstrap";
import Relatedproduct from '../../layouts/Relatedproductone';


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 1
        };
    }
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    };

    DecreaseItem = () => {
        if (this.state.clicks < 1) {
            this.setState({
                clicks: 0,
            });
        } else {
            this.setState({
                clicks: this.state.clicks - 1,
            });
        }
    };
    handleChange(event) {
        this.setState({ clicks: event.target.value });
    }
    render() {
        const productId = this.props.productId;
        const item = getProduct(productId);
        return (
            <Fragment>
                <div className="section product-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                {/* Main Thumb */}
                                <div className="product-thumb">
                                    <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.name} />
                                </div>
                                {/* /Main Thumb */}
                            </div>
                            <div className="col-md-7">
                                <div className="product-content">
                                    {/* Product Title */}
                                    <h2 className="title">{item.name}</h2>
                                    {/* /Product Title */}
                                    <div className="favorite">
                                        <i className="far fa-heart" />
                                    </div>
                                    {/* Rating */}
                                    <div className="ct-rating-wrapper">
                                        <div className="ct-rating">
                                            {Rating(item.rating)}
                                        </div>
                                        <span>(24 ratings)</span>
                                    </div>
                                    {/* /Rating */}
                                    {/* Price */}
                                    <div className="price-wrapper">
                                        <p className="product-price">{new Intl.NumberFormat().format((item.price).toFixed(2))}$</p>
                                    </div>
                                    {/* /Price */}
                                    {/* Product Short Description */}
                                    <p>{item.shortdesc}</p>
                                    {/* /Product Short Description */}
                                    {/* Variations */}
                                    <div className="customize-variations">
                                        <div className="customize-size-wrapper">
                                            <h5>Size: </h5>
                                            {item.sizes.map((item, i) => (
                                                <div key={i} className={item.state ? 'customize-size active' : 'customize-size'}>
                                                    {item.size}"
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* /Variations */}
                                    {/* Add To Cart Form */}
                                    <form className="atc-form" method="post">
                                        <div className="form-group">
                                            <label>Quantity</label>
                                            <div className="qty">
                                                <span className="qty-subtract" onClick={this.DecreaseItem}><i className="fa fa-minus" /></span>
                                                <input type="text" name="clicks" value={this.state.clicks} onChange={this.handleChange.bind(this)} />
                                                <span className="qty-add" onClick={this.IncrementItem}><i className="fa fa-plus" /></span>
                                            </div>
                                        </div>
                                        <button type="submit" name="button" className="btn-custom secondary"> Add to cart <i className="fas fa-shopping-cart" /> </button>
                                    </form>
                                    {/* /Add To Cart Form */}
                                    {/* Product Meta */}
                                    <ul className="product-meta">
                                        <li>
                                            <span>Categories: </span>
                                            <div className="product-meta-item">
                                                {item.category.slice(0, 2).map((category) => (
                                                    productcategory.filter(item => {
                                                        return item.id === category
                                                    }).map((categories, i) => (
                                                        <Link key={i} to="#">{categories.title}, </Link>
                                                    ))
                                                ))}
                                            </div>
                                        </li>
                                        <li>
                                            <span>Tags: </span>
                                            <div className="product-meta-item">
                                                {item.tags.slice(0, 4).map((tag) => (
                                                    blogtags.filter(item => {
                                                        return item.id === tag
                                                    }).map((tags, i) => (
                                                        <Link key={i} to={"/blog/tag/" + tags.id}>{tags.title}, </Link>
                                                    ))
                                                ))}
                                            </div>
                                        </li>
                                        <li>
                                            <span>SKU: </span>
                                            <div className="product-meta-item">
                                                <span>{item.sku}</span>
                                            </div>
                                        </li>
                                    </ul>
                                    {/* /Product Meta */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section pt-0">
                    <div className="container">
                        {/* Additional Information Start */}
                        <div className="product-additional-info">
                            <Tab.Container defaultActiveKey="tab1">
                                <Tab.Content>
                                    
                                    <Tab.Pane eventKey="tab2">
                                        
                                        {/* Review Form start */}
                                       
                                        {/* Review Form End */}
                                        {/* Reviews Start */}
                                        <div className="comments-list">
                                            <ul>
                                                {item.reviews.map((review, i) => (
                                                    <li key={i} className="comment-item">
                                                        <img src={process.env.PUBLIC_URL + "/" + review.img} alt={review.name} />
                                                        <div className="comment-body">
                                                            <h5>{review.name}</h5>
                                                            <div className="ct-rating">
                                                                {Rating(item.rating)}
                                                            </div>
                                                            <span>Posted on: {review.date}</span>
                                                            <p>{review.comment}College in Virginia</p>
                                                            <Link to="#" className="reply-link"> Reply </Link>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {/* Reviews End */}
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                        {/* Additional Information End */}
                    </div>
                </div>
                <Relatedproduct />
            </Fragment>
        );
    }
}

export default Content;