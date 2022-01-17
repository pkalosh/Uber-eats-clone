import React, { useEffect, useState} from "react";
import { View, Text,ScrollView} from "react-native";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems, { localRestaurants } from "../components/home/RestaurantItems";
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTabs from "../components/home/BottomTabs";
import { Divider } from 'react-native-elements';
const YELP_API_KEY ="jsdhfskjfkhe mnsdgeruktylotuiaql atgkutraet"
const GOOGLE_PLACES_API_KEY = "AIzaSyBz6dIvHajQSWCe7y2UNI1zdoYGk9aRt5w"

export default function Home({ navigation }){
	const [restaurantData, setRestaurantData]= useState([localRestaurants]);
	const [city, setCity] = useState(["Nairobi"]);
	const [activeTab, setActiveTab] = useState('Delivery');

	// const getRestaurantsFromYelp = () => {	
	// 	const yelpurl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=Nairobi ${city}`;

	// 	const apiOptions = {
	// 		headers: {
	// 			Authorization: 'Bearer & {YELP_API_KEY}',
	// 		},
	// 	};
	// 	return fetch(yelpurl, apiOptions)
	// 		.then((res)=>res.json())
	// 		.then((json) =>setRestaurantData(json.businesses.filter((business) => business.transactions.include(activeTab.toLowerCase())));
	// };

	// useEffect(()=>{
	// 	getRestaurantsFromYelp();
	// }, [city, activeTab]); //city is parameter passed from search component , activeTab will affect the hotels to be displayed.

	return(
		<SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
		<View style={{ backgroundColor: "white", padding: 15}}>
			<HeaderTabs activeTab= {activeTab} setActiveTab={setActiveTab} />
			<SearchBar cityHandler = {setCity} />
			</View>
		<ScrollView  showsVerticalScrollIndicator={false} >

			<Categories />
			<RestaurantItems restaurantData ={restaurantData} navigation ={navigation} />
			</ScrollView>
			<Divider width={1} />
			<BottomTabs />
		</SafeAreaView>
		);
}