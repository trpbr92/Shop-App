import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import ProductOverview from '../screens/shop/ProductOverview';
import ProductDetails from '../screens/shop/ProductDetails';
import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator(
  {
    ProductOverview: ProductOverview,
    ProductDetails: ProductDetails
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
  }
);

export default createAppContainer(ProductsNavigator);
