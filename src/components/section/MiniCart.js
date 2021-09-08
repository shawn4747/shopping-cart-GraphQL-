import React, { PureComponent } from "react";
import "../css/MiniCart.css";
import { Link } from "react-router-dom";
import { fetchAllProducts } from "../../Apollo/queries";

export class MiniCart extends PureComponent {
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
    const { increase, reduction } = this.state.products;
    return (
      <header className="Items">
        <>
          <div className="cart-title">
            <h1>My Bag, 2 items</h1>
            {this.state.products.map((product) => (
              <div className="details-cart" key={product.id}>
                <div className="row-cart">
                  <h4>APOLLO</h4>
                  <h5>Running Short</h5>
                  <div className="price">
                    <h5>${product.prices[0].amount}</h5>
                  </div>
                  <div className="size-mini">
                    <ul>
                      <li>S</li>
                      <li>M</li>
                    </ul>
                  </div>
                </div>
                <div className="amount">
                  <button
                    className="count"
                    onClick={() => increase(product._id)}
                  >
                    {" "}
                    +{" "}
                  </button>
                  <h2>{product.count}</h2>
                  <button
                    className="count"
                    onClick={() => reduction(product.id)}
                  >
                    {" "}
                    -{" "}
                  </button>
                </div>
                <div className="item-img-cart">
                  <div className="product-image">
                    <img src={product.gallery} alt="" />
                  </div>
                </div>
              </div>
            ))}
            <div className="total">
              <h1>Total</h1>
              <p>$</p>
            </div>
            <div className="checkbtn">
              <Link to="/cart" className="minibtn">
                <button className="bag">VIEWBAG</button>
              </Link>
              <Link to="/checkout" className="minibtn">
                <button className="check">CHECKOUT</button>
              </Link>
            </div>
          </div>
        </>
      </header>
    );
  }
}

export default MiniCart;
