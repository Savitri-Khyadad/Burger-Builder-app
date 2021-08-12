import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
];
const buildControls = (Props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: {Props.price.toFixed(2)}</p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={() => Props.ingredientsAdded(ctrl.type)}
            removed={() => Props.ingredientsRemoved(ctrl.type)}
            disabled={Props.disabled[ctrl.type]}/>
        ))}
        <button className={classes.OrderButton}
        disabled={!Props.purchasable}
        onClick={Props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;