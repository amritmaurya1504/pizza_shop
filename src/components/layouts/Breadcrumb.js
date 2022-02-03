import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumb extends Component {
    render() {
        return (
            <div className="subheader dark-overlay dark-overlay-2" style={{ backgroundImage: "url(`https://res.cloudinary.com/amritrajmaurya/image/upload/v1643809409/bg_ml3nyt.jpg`)"}}>
                <div className="container">
                    <div className="subheader-inner">
                        <h1>{this.props.breadcrumb.pagename}</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{this.props.breadcrumb.pagename}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Breadcrumb;