import {
  StackNavigator,
} from 'react-navigation';

import PostList from './screens/PostList';
import PostWebview from './screens/PostWebview';

const NavigationApp = StackNavigator(
  {
    PostList: { screen: PostList },
    PostWebview: {
      screen: PostWebview,
    }
  },
  {
    navigationOptions: {
      headerBackTitle: 'Back',
      gesturesEnabled: false,
    },
  }
);

export default NavigationApp;