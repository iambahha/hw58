import React, {Component, Fragment} from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Alerts from "../../components/Alerts/Alerts";

const INGREDIENT_PRICES = {
  salad: 5,
  cheese: 20,
  meat: 50,
  bacon: 30
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 20,
    purchasable: false,
    purchasing: false,
    modalInfo: null
  };

  addIngredientHandler = type => {
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type]++;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  };

  updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((sum, el) => sum + el, 0);

    this.setState({purchasable: sum > 0})
  };
  purchaseHandler = () => {
    this.setState({purchasing: true});
  };

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };

  purchaseContinueHandler = () => {
    alert('You continued!');
  };

  removeIngredientHandler = type => {
    if (this.state.ingredients[type] === 0) {
      return;
    }

    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type]--;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;

    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  };

  render() {
    const disabledInfo = {...this.state.ingredients};

    Object.keys(disabledInfo).forEach(key => {
      disabledInfo[key] = disabledInfo[key] === 0;
    });

    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          purchasable={this.state.purchasable}
          purchase={this.purchaseHandler}
        />
        <Modal
          show={this.state.purchasing}
          close={this.purchaseCancelHandler}
          title={this.state.modalInfo = 'Article Info'}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
          />
        </Modal>
        <Alerts />
      </Fragment>
    )
  }
}

export default BurgerBuilder;
