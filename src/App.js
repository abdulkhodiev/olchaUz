// App.js
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavComponent from "./nav/nav.js";
import Products from "./products/products.js";
import img from "./img/nothing.jpeg";

class App extends Component {
    constructor(props) {
        super(props);

        // Check if there is data in localStorage
        const storedTheme = localStorage.getItem("theme");
        const storedCartQuantity = localStorage.getItem("cartQuantity");

        this.state = {
            cartQuantity: storedCartQuantity ? parseInt(storedCartQuantity) : 0,
            theme: storedTheme || "Day", // Initial theme
            products: [
                {
                    name: "Nothing Phone 2",
                    price: 599,
                    monthly: 99,
                    img,
                    desc: "8/128GB WHITE.",
                },
                {
                    name: "Nothing Phone 2",
                    price: 699,
                    monthly: 199,
                    img,
                    desc: "12/256GB BLACK.",
                },
                {
                    name: "Nothing Phone 2",
                    price: 699,
                    monthly: 99,
                    img,
                    desc: "12/256GB WHITE.",
                },
                {
                    name: "Nothing Phone 2",
                    price: 799,
                    monthly: 299,
                    img,
                    desc: "12/512GB BLACK.",
                },
            ],
        };
    }

    // Function to increment cart quantity
    addToCart = () => {
        this.setState(
            (prevState) => ({
                cartQuantity: prevState.cartQuantity + 1,
            }),
            () => {
                // Save cart quantity to localStorage
                localStorage.setItem(
                    "cartQuantity",
                    this.state.cartQuantity.toString()
                );
            }
        );
    };

    // Function to toggle theme
    toggleTheme = () => {
        this.setState(
            (prevState) => ({
                theme: prevState.theme === "Day" ? "Night" : "Day",
            }),
            () => {
                // Save theme to localStorage
                localStorage.setItem("theme", this.state.theme);
                // Change the background color of the body
                document.body.style.backgroundColor =
                    this.state.theme === "Night" ? "black" : "white";
            }
        );
    };

    render() {
        return (
            <div className={`App ${this.state.theme.toLowerCase()}`}>
                <header className="App-header">
                    <NavComponent
                        cartQuantity={this.state.cartQuantity}
                        theme={this.state.theme}
                        toggleTheme={this.toggleTheme}
                    />
                    <div className="container">
                        <div className="row">
                            {this.state.products.map((product, index) => (
                                <div
                                    key={index}
                                    className="col-lg-3 col-md-4 col-sm-6"
                                >
                                    <Products
                                        {...product}
                                        addToCart={this.addToCart}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
