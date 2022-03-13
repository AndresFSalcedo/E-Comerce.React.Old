import React from 'react';

<<<<<<< HEAD
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
=======
>>>>>>> parent of ccf990c (Create Cart-item component)
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.style.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className="cart-items"></div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

<<<<<<< HEAD
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
=======
export default CartDropdown;
>>>>>>> parent of ccf990c (Create Cart-item component)
