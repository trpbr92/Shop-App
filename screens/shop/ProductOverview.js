 import React from 'react';
 import { FlatList } from 'react-native';
 import { useSelector } from 'react-redux';

 import ProductItem from '../../components/shop/ProductItem';
 
 const ProductOverview = props => {
     const products = useSelector(state => state.products.availableProducts);
     return (
     <FlatList 
     data={products}
     renderItem={itemData => 
     <ProductItem 
     image={itemData.item.imageUrl} 
     title={itemData.item.title}
     price={itemData.item.price}
     viewDetails={() => {
         props.navigation.navigate('ProductDetails', { 
             productId: itemData.item.id,
             productTitle: itemData.item.title
            });
     }}
     addToCart={() => {}}
     />} 
 /> 
  );
 };

 ProductOverview.navigationOptions = {
     headerTitle: 'All Products'
 };
 
export default ProductOverview;