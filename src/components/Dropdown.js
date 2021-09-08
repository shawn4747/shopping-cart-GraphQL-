import React, { PureComponent } from "react";
import "./css/Dropdown.css";
import { fetchAllProducts } from "../Apollo/queries";

class Dropdown extends PureComponent {
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
      this.setState({
        products: data?.categories[0].products,
        loading,
        error,
      });
      console.log(this.state.products);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <div>
          <div>
            {this.state.products.map((product) => (
              <select id="dropdown">
                <option className="option" value="N/A">
                  $ {product.prices[0].currency}
                </option>
                <option className="option" value="2">
                  {" "}
                  £ {product.prices[1].currency}
                </option>
                <option className="option" value="3">
                  {" "}
                  $ {product.prices[2].currency}
                </option>
                <option className="option" value="3">
                  {" "}
                  ¥ {product.prices[3].currency}
                </option>
                <option className="option" value="3">
                  {" "}
                  ₽ {product.prices[4].currency}
                </option>
              </select>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Dropdown;
