import React, { PureComponent } from "react";
import "../css/Cart.css";
import { fetchAllProducts } from "../../Apollo/queries";

export class Cart extends PureComponent {
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
      <>
        <h1>Cart</h1>
        <div className="cart-title-cart">
          <h1>CART</h1>
          {this.state.products.map((product) => (
            <div className="details-cart-cart" key={product.id}>
              <div className="row-cart-cart">
                <h4>APOLLO</h4>
                <h5>Running Short</h5>
                <div className="price-cart">
                  <h5>${product.prices[0].amount}</h5>
                </div>
                <div className="size-cart">
                  <ul>
                    <li>S</li>
                    <li>M</li>
                  </ul>
                </div>
              </div>
              <div className="item-img-cart-cart">
                <div className="amount-cart">
                  {/* <button
                    className="count-cart"
                    onClick={() => increase(product.id)}
                  >
                    {" "}
                    +{" "}
                  </button>
                  <h2>{product.count}</h2>
                  <button
                    className="count-cart"
                    onClick={() => reduction(product.id)}
                  >
                    {" "}
                    -{" "}
                  </button> */}
                </div>
                <img src={product.gallery} alt="" />
              </div>
              {/* <div className="remove" onClick={() => removeProduct(product.id)}>
                <button>Remove</button>
              </div> */}
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Cart;
