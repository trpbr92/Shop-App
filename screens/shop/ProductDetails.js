import React from 'react';
import {useSelector} from 'react-redux';
import {ScrollView, View, Text, Image, Button, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const ProductDetails = props => {
    const productId = props.navigation.getParam('productId');

const selectedProduct = useSelector(state => 
    state.products.availableProducts.find(prod => prod.id ===productId)
    );

    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: selectedProduct.imageUrl}}/>
            <View style={styles.actions}>
            <Button color ={Colors.primary} title="Add to Cart" onPress={() => {}}/>
            </View>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    );
};

ProductDetails.navigationOptions = navData => {
return {
    headerTitle: navData.navigation.getParam('productTitle')
};
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center'
    }
});

export default ProductDetails;