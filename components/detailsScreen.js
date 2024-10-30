import { TouchableOpacity, View, Text, StyleSheet,Image } from "react-native";
import React from "react";

const images = {
    "pizza.jpg": require("../assets/images/pizza.jpg"),
    "Burger.jpg": require("../assets/images/Burger.jpg"),
    "fried chicken.jpg": require("../assets/images/fried chicken2.png"),
    "french fries.jpg": require("../assets/images/french fries.jpg"),
    "fried rice.jpg" : require("../assets/images/fried rice.jpg"),
    "sandwich.jpg" : require("../assets/images/sandwich.jpg")
};

export default function Details({route}){

    const {itemDescription,itemName,itemPrice,image} = route.params;

    return(
    
        <View style={[styles.conatainer]}>
            <Image source={images[image]} style={styles.image}/>
            <Text style={styles.name}>{itemName}</Text>
            <Text style={styles.price}>{itemPrice}</Text>
            <Text style={styles.description}>{itemDescription}</Text> 
            <View  style={styles.button}>
             <TouchableOpacity>
                <Text>Add to cart</Text>
             </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    conatainer:{
        flex:1,
        alignItems:"center",
    },
    name:{
        fontSize:30,
        padding:20,
    },
    price:{
        fontSize:20,
        color:"#F4CE14"
    },
    description:{
        padding:30
    },
    image:{
        width:"100%",
        height:"50%"
    },
    button:{
        backgroundColor:"#F4CE14",
        padding:15,
        width:300,
        alignItems:"center",
        marginTop:"auto",
        marginBottom:30,
        borderRadius:10
    },
})