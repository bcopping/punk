import React from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/CardContent";
import "./App.css";

import BodyBlock from "../components/bodyBlock";
import Cart from "../components/cart";
import Beverages from "../components/beverages";

import { getBeers } from "../actions/";

import { cartTotal } from "../selectors/cart";

class App extends React.PureComponent {
  componentDidMount() {
    const { getBeers } = this.props;
    getBeers();
    getBeers({ food: "pizza" });
    getBeers({ food: "steak" });
  }
  render() {
    const { cartItems, beverages, isOpen, cartTotal } = this.props;
    return (
      <div className="App">
        <Container>
          <Beverages beverages={beverages} />

          <Cart cartItems={cartItems} cartTotal={cartTotal} isOpen={isOpen} />
          <BodyBlock isOpen={isOpen} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { beverages, cart } = state;
  return {
    beverages: beverages,
    isOpen: cart.cartOpen,
    cartItems: cart.items,
    cartTotal: cartTotal(state),
  };
};

const mapDispatchToProps = {
  getBeers,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
