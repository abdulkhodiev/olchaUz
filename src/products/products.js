// Products.js
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./products.css";
import NavComponent from "../nav/nav";

class Products extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { img, name, price, monthly, desc, addToCart } = this.props;
        return (
            <div className="card-container py-4">
                <div
                    className="card border-2 border-danger rounded-4 overflow-hidden"
                    style={{ width: "16rem" }}
                >
                    <img
                        src={img}
                        className="card-img-top"
                        alt="Product Image"
                    />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{name}</h5>
                        <h6 className="card-text">{price}$</h6>
                        <h6 className="card-text monthly px-2 py-1 bg-danger rounded-5 text-white">
                            {monthly}$ Monthly
                        </h6>
                        <p className="card-text">{desc}</p>
                        <button
                            className="btn btn-danger rounded-5 d-flex justify-content-center"
                            onClick={addToCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;
