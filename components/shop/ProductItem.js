import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';

const ProductItem = props => {
    return (
        <View style={styles.product}>
        <Image style={styles.image} source={{uri: props.image}} />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price} >${props.price}</Text>
          <View style={styles.action}>
            <Button title="View Details" onPress={props.viewDetail} />
            <Button title="Go To Cart" onPress={props.addToCart} />
          </View>
        </View>
            );
};

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20
    },
    image: {
        width: '100%',
        height: '60%'
    },
    title: {
        fontSize: 18,
        marginVertical: 4,
    },
    price: {
        fontSize: 14,
        color: '#888'
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default ProductItem;