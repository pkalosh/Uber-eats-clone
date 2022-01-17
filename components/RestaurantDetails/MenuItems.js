import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements';
import BouncyCheckBox  from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from 'react-redux';
const foods =[
    {
    title: 'Lasgana',
    description: "with letuce, dhania and kienyji",
    price: "$ 70",
    image: "https://image.shutterstock.com/image-photo/ready-healthy-food-catering-menu-600w-1756143512.jpg",
    },
    {
    title: 'Pewa Pewa',
    description: "with letuce, dhania and kienyji",
    price: "$ 80",
    image: "https://image.shutterstock.com/image-photo/ready-healthy-food-catering-menu-600w-1756143512.jpg",
    },
    {
    title: 'Modern ',
    description: "with letuce, dhania and kienyji",
    price: "$ 70",
    image: "https://image.shutterstock.com/image-photo/ready-healthy-food-catering-menu-600w-1756143512.jpg",
    },
    {
        title: 'Lwe',
        description: "with letuce, dhania and kienyji",
        price: "$ 70",
        image: "https://image.shutterstock.com/image-photo/ready-healthy-food-catering-menu-600w-1756143512.jpg",
        },
        {
        title: 'Pewa',
        description: "with letuce, dhania and kienyji",
        price: "$ 80",
        image: "https://image.shutterstock.com/image-photo/ready-healthy-food-catering-menu-600w-1756143512.jpg",
        },
        {
        title: 'Modern Cost ',
        description: "with letuce, dhania and kienyji",
        price: "$ 70",
        image: "https://image.shutterstock.com/image-photo/ready-healthy-food-catering-menu-600w-1756143512.jpg",
        },
];



const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    titleStyle:{
        fontSize: 19,
        fontWeight: "600",
    },
});



export default function MenuItems({restaurantName, foods, hideCheckbox, marginLeft}) {

    const dispatch = useDispatch();
    const selectItem = (item, checkBoxValue) =>
    dispatch({
        type: "ADD_TO_CART",
        payload: { ... item, restaurantName:restaurantName, checkBoxValue:checkBoxValue}
    });
    const cartItems =  useSelector((state) => state.cartReducer.selectedItems.items);
    const isFoodInCart = (food, cartItems) =>
        Boolean(cartItems.find((item) => item.title == food.title));

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((food, index) => (
        <View key={index}>
        <View style={styles.menuItemStyle}>
            { hideCheckbox ? (<></>) : (<BouncyCheckBox 
            iconStyle = {{borderColor: "lightgray", borderRadius: 0}}
            fillColor = "green"
            onPress={(checkBoxValue) => selectItem(food, checkBoxValue)}
            isChecked = {isFoodInCart(food, cartItems)}
            />)}
            <FoodInfo food={food} />
            <FoodImage food={food}  marginLeft={marginLeft ? marginLeft:0}/>
        </View>
        <Divider width={0.7} orientation='vertical' style={{marginHorizontal:20}} />
        </View>
        ))}
        </ScrollView>
    );
}

const FoodInfo = (props) => (
    <View style={{width: 220, justifyContent: "space-evenly"}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = ({marginLeft, ...props}) => (
    <View>
       <Image source={{uri: props.food.image }} style={{width:75, height:75, borderRadius:8, marginLeft:marginLeft}} /> 
    </View>
);