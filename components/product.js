import { Text, View, StyleSheet, Platform,Image, useWindowDimensions } from "react-native";

const images = {
    "pizza.jpg": require("../assets/images/pizza.jpg"),
    "Burger.jpg": require("../assets/images/Burger.jpg"),
    "fried chicken.jpg": require("../assets/images/fried chicken2.png"),
    "french fries.jpg": require("../assets/images/french fries.jpg"),
    "fried rice.jpg" : require("../assets/images/fried rice.jpg"),
    "sandwich.jpg" : require("../assets/images/sandwich.jpg")
};

 export default function Product({name, about, price, image}){

    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    
    return (
        <View style={[styles.productCard, {
            width: windowWidth > 500 ? "95%" : "90%",
            height: windowHeight > 600 ? "85%" : "90%",
            paddingLeft: windowHeight > 600 ? 0 : 50
            } ]}>
            <Image source={images[image]} style={styles.image} />
            <View style={[styles.details,{paddingLeft: windowHeight > 600 ? 0:50}]}> 
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.about}>{about}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
                <Image source={
                    require('../assets/images/arrow.png')} 
                    style={[styles.arrowIcon, 
                    {marginLeft: windowHeight > 600 ? 0 : 150}]
                    }/>
        </View>
    )
 }

const styles = StyleSheet.create({
    productCard:{
        width:"90%",
        height:"85%",   
        backgroundColor:"#ffffff",
        margin:20,
        padding: 5,
        borderRadius:15,
        flexDirection:"row",
        ...Platform.select({
            ios: {
                shadowColor:"black",
                shadowOffset:{ width:3,height:3},
                shadowOpacity:0.3,
                shadowRadius:5,
            },
            android: {
                elevation: 5
            },
        }),
    },
    image:{
        width:100,
        height:100,
        margin:20
    },
    details:{
        width:"50%",
        paddingLeft:10,
    },
    name:{
        fontSize:20,
        paddingTop:20,
        fontWeight:"bold"
    },
    about:{
        paddingTop:8,
        color:"#F4CE14"
    },
    price:{
        paddingTop:15,
        fontSize:30,
        fontWeight:"bold"
    },
    arrowIcon:{
        width:25,
        height:25,
        marginTop:60
    }
})