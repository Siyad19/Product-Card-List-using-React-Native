import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/homeScreen.js'
import Details from './components/detailsScreen.js';

  
export default function App() {
 const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerStyle:{backgroundColor:"#F4CE14"}}}/>
        <Stack.Screen name='Details' component={Details}options={{ headerStyle:{backgroundColor:"#F4CE14"}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFAF8',
  },
  home:{
    backgroundColor:"#F4CE14"
  }
});
