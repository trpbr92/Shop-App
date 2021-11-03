import React from 'react';
import {useSelector} from 'react-redux';
import {ScrollView, View, Text, Image, Button, StyleSheet} from 'react-native';

const ProductDetails = props => {
    const productId = props.navigation.getParam('productId');

const selectedProduct = useSelector(state => 
    state.products.availableProducts.find(prod => prod.id ===productId)
    );

    return (
 <View>
     <Text>{selectedProduct.title }</Text>
 </View>
    );
};

ProductDetails.navigationOptions = navData => {
return {
    headerTitle: navData.navigation.getParam('productTitle')
};
};

const styles = StyleSheet.create({
    
});

export default ProductDetails;