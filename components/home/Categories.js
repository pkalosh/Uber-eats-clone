import React, {useState} from "react";
import { View, Text,Image,ScrollView } from "react-native";
// import { Asset } from 'expo-asset';

  // const [assets] = useAssets([require('path/to/asset.jpg'), require('path/to/other.png')]);

const items = [
{
	image: require("../../assets/images/shopping-bag.png"),
	text: "Pick-up",
},
{
	image: require("../../assets/images/bread.png"),
	text: "Bakery Items",
},
{
	image: require("../../assets/images/fast-food.png"),
	text: "Fast Foods",
},
{
	image: require("../../assets/images/deals.png"),
	text: "Deals",
},
{
	image: require("../../assets/images/coffee.png"),
	text: "Cofee & Tea",

},
];

export default function Categories(){
	return(
		<View style = {{
			marginTop:5,
			backgroundColor: "#ffffff",
			paddingVertical: 10,
			paddingLeft: 20,
		}} >
		<ScrollView horizontal showsHorizontalScrollIndicatior={false} >

		{items.map((item, index) =>(
		<View key={ index }style={{alignItems: "center",marginRight:30}}>
		<Image source={item.image} 
		style={{
			width:50,
			height:40,
			resizeMode:"contain",
		}}
			/>
			<Text style={{ fontSize:13, fontWeight: "900"}}> {item.text}</Text>
			</View>
			))}
		</ScrollView>
		</View>
		);
}