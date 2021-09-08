import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "../css/Details.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { fetchAllProducts } from "../../Apollo/queries";

export class Details extends PureComponent {
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
        products: data?.categories[1].products,
        loading,
        error,
      });
      console.log(this.state.products);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { addCart } = this.context;
    return (
      <>
        {this.state.products.map((product) => (
          <div className="details" key={product.id}>
            <Carousel className="carousel">
              <div className="carousel-item">
                <img src={product.gallery} alt="" />
              </div>
              <div className="carousel-item">
                <img src={product.gallery} alt="" />
              </div>
              <div className="carousel-item">
                <img src={product.gallery} alt="" />
              </div>
            </Carousel>
            <div className="row">
              <div className="details-title">
                <h4>{product.name}</h4>
              </div>
              <div className="size-detail">
                <h4>SIZE:</h4>
                <ul>
                  <li activeClassName="is-active">XS</li>
                  <li activeClassName="is-active">S</li>
                  <li activeClassName="is-active">M</li>
                  <li activeClassName="is-active">L</li>
                </ul>
              </div>
              <div className="price-detail">
                <h4>PRICE:</h4>
                <h5>${product.prices[0].amount}</h5>
                <Link
                  to="/cart"
                  className="add-cart"
                  onClick={() => addCart(product.id)}
                >
                  Add to cart
                </Link>
                <p>
                  Find stunning women's cocktail dresses <br /> and party
                  dresses. Stand out in lace and <br /> metallic cocktail
                  dresses and party <br /> dresses from all your favorite
                  brands.
                </p>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Details;
