import React from 'react';

import PizzaImage from '../../assets/pizza.jpg';
import styles from './PizzaImage.module.css';

const pizzaImage = ( props ) => (
    <div className={ styles.PizzaImage }>
        <img src={PizzaImage} className={ styles.PizzaImg } />
    </div>
);

export default pizzaImage;