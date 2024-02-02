// NavComponent.js
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.css";

class NavComponent extends Component {
    constructor(props) {
        super(props);

        // Check if there is data in localStorage
        const storedTheme = localStorage.getItem("theme");

        this.state = { theme: storedTheme || "Day" }; // Make sure to initialize the state
    }

    render() {
        return (
            <div className={`Nav ${this.state.theme.toLowerCase()}`}>
                <nav className="d-flex justify-content-between px-4 align-items-center py-3 shadow">
                    <div className="logo categories search d-flex align-items-center gap-5">
                        <h2 className="text-danger fw-bold mb-0">olcha</h2>
                        <select
                            className="p-1 px-2 border-dark border-2 rounded-3 fs-5 outline-none"
                            name="categories"
                            id=""
                        >
                            <option value="all">Categories</option>
                            <option value="cars">Cars</option>
                            <option value="jewelry">Jewelery</option>
                        </select>
                        <div className="search-container p-1 border-2 border-dark rounded-3 fs-5">
                            <input
                                className="p-1 px-2 fs-5 border-0 rounded-3 text-muted"
                                type="text"
                                placeholder="Search....."
                                name="search"
                            />
                            <button
                                type="reset"
                                className="px-3 py-1 border-0 rounded-3 bg-danger text-white fw-bold"
                            >
                                x
                            </button>
                        </div>
                    </div>
                    <div className="cart theme d-flex gap-3">
                        <button className="cart-btn p-1 px-2 border-dark border-2 rounded-3 fs-5 outline-none bg-white">
                            <span>Cart </span>
                            {this.props.cartQuantity > 0 ? (
                                <span>{this.props.cartQuantity}</span>
                            ) : (
                                ""
                            )}
                        </button>
                        <button
                            className={`p-1 px-2 border-dark border-2 rounded-3 fs-5 outline-none ${
                                this.state.theme === "Night"
                                    ? "bg-dark"
                                    : "bg-white"
                            }`}
                            onClick={this.props.toggleTheme}
                        >
                            {this.state.theme}
                        </button>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavComponent;
