import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/RestaurantDetails/About'
import MenuItems from '../components/RestaurantDetails/MenuItems'
import ViewCart from '../components/RestaurantDetails/ViewCart'

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

export default function RestaurantDetail({route, navigation}) {
    return (
        <View>
            <About route={route}/>
            <Divider width={1.8} style={{marginVertical: 0}} />
            <MenuItems restaurantName={route.params.name} foods={foods}/>
            <ViewCart  navigation={navigation} foods={foods}/>
        </View>
    )
}
