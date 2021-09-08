import React, { PureComponent } from "react";
import Logo from "./svg/logo.svg";
import { NavLink, Link } from "react-router-dom";
import "./css/Header.css";
import Dropdown from "./Dropdown";
import { DataContext } from "./Context";
import Modal from "./section/Modal";
import { fetchCategories } from "../Apollo/queries";

export class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      loading: false,
      error: null,
    };
  }

  static contextType = DataContext;

  async componentDidMount() {
    try {
      const { error, loading, data } = await fetchCategories();
      this.setState({ categories: data?.categories, loading, error });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <header>
        <nav>
          <ul>
            {this.state.categories.map((categorie) => (
              <li key={categorie.name}>
                <NavLink to={`/products/${categorie.name}`}>
                  {categorie.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="logo">
          <h1>
            <Link to="/main">
              <img src={Logo} alt="" />
            </Link>
          </h1>
        </div>
        <div className="cart">
          <div className="dropdown">
            <Dropdown />
          </div>
          <Modal />
          <span>0</span>
        </div>
      </header>
    );
  }
}

export default Header;
