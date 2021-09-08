import React, { PureComponent } from "react";
import { Route } from "react-router-dom";
import Products from "./section/Products";
import Details from "./section/Details";
import Cart from "./section/Cart";
import CheckOutForm from "./section/CheckOutForm";
import Main from "./section/Main";

export class Section extends PureComponent {
  render() {
    return (
      <section>
        <Route path="/products/:name" component={Products} exact />
        <Route path="/details" component={Details} exact />
        <Route path="/products/cart" component={Cart} exact />
        <Route path="/checkout" component={CheckOutForm} exact />
        <Route path="/main" component={Main} exact />
      </section>
    );
  }
}

export default Section;
