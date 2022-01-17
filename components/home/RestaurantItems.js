import React from "react";
import { View,Text, Image,TouchableOpacity} from "react-native";
import { CommunityMaterialIcons}  from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

export const localRestaurants= [
	{
		name: "Sue Cakes",
		image_url :"https://image.shutterstock.com/image-photo/ready-healthy-food-catering-menu-600w-1756143512.jpg",
		categories: [{title:'Sue'},{title:'Cakes'},{title: 'snacks'}],
		price: "$$",
		reviews: 10000,
		rating: 4.6,

	},

	{
		name: "Kivuki Land",
		image_url :"https://image.shutterstock.com/image-photo/ready-healthy-food-catering-menu-600w-1756143512.jpg",
		categories: [{title:'Kivuki'},{title:'Land'},{title: 'snacks'}],
		price: "$$",
		reviews: 10050,
		rating: 4.8,

	},


	{
		name: "Capital Inn",
		image_url :"https://image.shutterstock.com/image-photo/ready-healthy-food-catering-menu-600w-1756143512.jpg",
		categories: [{title:'Capital'},{title:'Inn'},{title: 'snacks'}],
		price: "$$",
		reviews: 10050,
		rating: 4.8,

	}
];

export default function RestaurantItems({navigation,props}){
	return(
		<>
			{localRestaurants.map((restaurant, index)=>(
			<TouchableOpacity key={index} activeOpacity={1} style={{marginBottom: 30}} onPress={()=> navigation.navigate("RestaurantDetail", {
				name: restaurant.name,
				image: restaurant.image_url,
				price: restaurant.price,
				rating: restaurant.rating,
				reviews: restaurant.reviews,
				categories: restaurant.categories,

			})} >
				<View style={{ marginTop:10, padding: 15, backgroundColor: "white"}}>
				<RestaurantImage image={restaurant.image_url }/>
				<RestaurantInfo 
				name={restaurant.name}
				rating={restaurant.rating} />
				</View>
			</TouchableOpacity>
			))}
		
		</>
		);
}

const RestaurantImage = (props)=> (
<>
	<Image  
	source= {{ uri: props.image }}
	style={{width:"100%", height: 180}}
	/>
	<TouchableOpacity style={{position: "absolute",right:20, top:15}}>
	<Ionicons name="heart-outline" size={25} color="#fff" />
	</TouchableOpacity>
</>
	);
const RestaurantInfo = (props)=> (
	<View style={{flexDirection: "row",justifyContent: "space-between", alignItems:"center"}}>
		<View >
			<Text style={{ fontSize:15, fontWeight:"bold"}}>{props.name}</Text>
			<Text style={{ fontSize:13, fontWeight:"100"}}>30-45 * Min</Text>
		</View>
		<View style={{ backgroundColor: "#eee",height:30, width:30,justifyContent:"center", alignItems: "center", borderRadius: 15,}}>
			<Text>{props.rating} </Text>
		</View>
	</View>
);