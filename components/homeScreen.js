import { StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import Product from './product';
import productData from '../data/productData.json';

export default function App({navigation}) {
 
  return (
    <ScrollView>
        <View style={styles.container}>
            {productData.map(item => (
                <TouchableOpacity style={styles.product} 
                        key={item.id}
                        onPress={() => navigation.navigate('Details', {
                            itemName: item.name,
                            itemDescription: item.description,
                            image: item.image,
                            itemPrice: item.price,
                        })}>
                    <Product name={item.name} image={item.image} about={item.about} price={item.price}/>
                </TouchableOpacity>
                ))}
        </View>
    </ScrollView>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFAF8',
  },
  product:{
    height:180
  }
});
