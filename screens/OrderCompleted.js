import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from "lottie-react-native";
import MenuItems from '../components/RestaurantDetails/MenuItems';
import firebase from '../firebase';
import { ScrollView } from 'react-native';

export default function OrderCompleted() {
    const [lastOrder, setLastOrder]= useState({
        items: [
            {
                title: 'Lasgana',
                description: "with letuce, dhania and kienyji",
                price: "$ 70",
                image: "https://image.shutterstock.com/image-photo/ready-healthy-food-catering-menu-600w-1756143512.jpg",
                },
        ],
    });
    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems);

    const total = items.map((item) => Number(item.price.replace("$", ""))).reduce((prev, curr)=> prev+curr, 0)
    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD"
    });

    useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db.collection("Orders")
        .orderBy("createAt", "desc")
        .limit(1)
        .onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                setLastOrder(doc.data());
            });
            
        });
        return () => unsubscribe();
     
    },[]);
    return (
        <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
            <View style={{
                margin:25,
                alignItems:"center",
                height:100,
            }}>
            <LottieView  
            style={{height:100, alignSelf:'center', marginBottom:30}} 
            source={require("../assets/animations/782-check-mark-success.json")}
            autoPlay
            speed={0.5}
            loop={false}/>
            <Text style={{fontSize:20,fontWeight:"bold"}}>You order at {restaurantName} has been place  for ${totalUSD}</Text>
            <ScrollView>
            <MenuItems foods={lastOrder.items} hideCheckbox={true} />
            </ScrollView>
            <LottieView  
            style={{height:200, alignSelf:'center'}} 
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
            />
            </View>
        </SafeAreaView>
    )
}
