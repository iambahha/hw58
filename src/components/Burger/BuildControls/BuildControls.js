import React from 'react';
import './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const ingredients = [
  {type: 'salad'},
  {type: 'bacon'},
  {type: 'cheese'},
  {type: 'meat'}
];

const BuildControls = props => {
  return (
    <div className="BuildControls">
      <p>Current price: <strong>{props.price} KGS</strong></p>
      {ingredients.map(ing => (
        <BuildControl
          key={ing.type}
          type={ing.type}
          disabled={props.disabledInfo[ing.type]}
          added={() => props.ingredientAdded(ing.type)}
          removed={() => props.ingredientRemoved(ing.type)}
        />
      ))}
      <button className="OrderButton" onClick={props.purchase} disabled={!props.purchasable}>ORDER NOW</button>
    </div>
  );
};

export default BuildControls;