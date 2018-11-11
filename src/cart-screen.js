import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ProductList from './product-list';
import {connect} from 'react-redux';
import { removeProductToCart } from '../actions/cart-action-creator';

class CartScreen extends Component {
 

  render() {
    return (
      <View style = {styles.container}>
            <ProductList
                onPressEvent = {this.props.removeItem}
                products= {this.props.cartItem}
            />
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
});

const mapStateToProps = ( state)=>{
    return{
       cartItem: state.cart
    }
}


const mapDispatchToProps = ( dispatch)=>{
    return{
        removeItem: (product) => dispatch(removeProductToCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CartScreen);
