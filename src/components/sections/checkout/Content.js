import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cartitem from '../../../data/cartlist.json';
import { Accordion, NavLink } from 'react-bootstrap';

const priceTotal = cartitem.reduce((totalPrice, item) => totalPrice + item.price * item.qty, 0);

class Content extends Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <form method="post">
                        <div className="row">
                               
                            <div className="col-xl-5 checkout-billing">
                                {/* Order Details Start */}
                                <table className="ct-responsive-table">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Qunantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartitem.map((item, i) => (
                                            <tr key={i}>
                                                <td data-title="Product">
                                                    <div className="cart-product-wrapper">
                                                        <div className="cart-product-body">
                                                            <h6> <Link to="/menu-item-v1/1">{item.name}</Link> </h6>
                                                            {item.flavours.map((item, i) => (
                                                                <p key={i}>{item}</p>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-title="Quantity">x{item.qty}</td>
                                                <td data-title="Total"> <strong>{new Intl.NumberFormat().format((item.price * item.qty).toFixed(2))}$</strong> </td>
                                            </tr>
                                        ))}
                                        <tr className="total">
                                            <td>
                                                <h6 className="mb-0">Grand Total</h6>
                                            </td>
                                            <td />
                                            <td> <strong>{new Intl.NumberFormat().format((priceTotal).toFixed(2))}$</strong> </td>
                                        </tr>
                                    </tbody>
                                </table>
                               
                                <p className="small">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link className="btn-link" to="#">privacy policy.</Link> </p>
                                <button type="submit" className="btn-custom primary btn-block">Place Order</button>
                                {/* Order Details End */}
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Content;