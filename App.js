import {
  StackNavigator,
} from 'react-navigation';

import PostList from './app/screens/PostList';
import PostWebview from './app/screens/PostWebview';

const App = StackNavigator(
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

export default App;