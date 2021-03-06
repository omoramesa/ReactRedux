import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import ProductItem from './product-item';

class ProductList extends Component {

    keyExtractor = (item)=> item.id.toString()

  render() {
    return (
      <View>
        <FlatList
            data= { this.props.products }
            renderItem= { ({item}) => <ProductItem onPressEvent = {this.props.onPressEvent} item = {item}/>}
            keyExtractor={ this.keyExtractor}
        />
      </View>
    );
  }
}

export default ProductList;