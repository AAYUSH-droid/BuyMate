import React, { Fragment } from "react";
import "./Home.css";
import { CgMouse } from "react-icons/cg";
import Product from "./ProductCard.js";
const product = {
  name: "Blue tshirt",
  images: [
    {
      url: "https://img.freepik.com/premium-vector/blue-vector-men-s-t-shirt-mockup_292608-166.jpg",
    },
  ],
  price: "Rs3000",
  _id: "hello",
};

const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to BuyMate</p>
        <h1>Find amazing products</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
