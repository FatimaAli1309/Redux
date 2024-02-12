import { NavigationContainer } from '@react-navigation/native';
import CartScreen from './src/screen/cartScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack=createNativeStackNavigator()
const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
<Stack.Screen name='Home' component={CartScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
)
}
export default App;