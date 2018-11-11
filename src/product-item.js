import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight} from 'react-native';

const ProductItem = props => (
    <TouchableHighlight 
    onPress = { ()=> props.onPressEvent(props.item) }
    underlayColor = "#ccc">
        
        <View style = {styles.container}>
            <Text>{ props.item.name}</Text>
            <Text>{ props.item.price}</Text>
        </View>
   </TouchableHighlight>
);

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: '#ccc',
    }
});
export default ProductItem;