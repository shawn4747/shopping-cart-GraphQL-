import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "../css/Products.css";
import Add from "../svg/add.svg";
import { fetchAllProducts } from "../../Apollo/queries";

export class Products extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: false,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const { error, loading, data } = await fetchAllProducts();
      this.setState({ products: data?.categories[1].products, loading, error });
      console.log(this.state.products);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="women">
        <div className="category">
          <h1>Category name</h1>
        </div>
        <div id="product">
          {this.state.products.map((product) => (
            <div className="card" key={product.id}>
              <Link to={`/products/product/${product.id}`}>
                <img
                  className="product__image"
                  src={product.gallery[0]}
                  alt=""
                />
              </Link>
              <div className="content">
                <h3>{product.name}</h3>
                <h2>${product.prices[0].amount}</h2>
              </div>
              <button>
                <img src={Add} alt="" />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
