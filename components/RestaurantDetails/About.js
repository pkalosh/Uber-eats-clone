import React from 'react'
import { View, Text, Image } from 'react-native'
const yelpRestaurantInfo = {
    name: 'Sue Cakes',
    image_url: 'https://image.shutterstock.com/image-photo/ready-healthy-food-catering-menu-600w-1756143512.jpg',
    price:'$$',
    reviews: "1500",
    rating: 4.5,
    categories:[{title:'Sue'},{title:'Cakes'},{title: 'snacks'}],
};

export default function About(props) {

    const {name, image, price, reviews, rating, categories} = props.route.params;
    const formatedCategories = categories.map((cat) => cat.title).join(" . ")
    const description = `${formatedCategories} ${price ? " . " + price : ""}. ${rating} (${reviews})`;

    return (
        <View>
            <RestaurantImage image={image}/>
            <RestaurantName name={name}/>
            <RestaurantDescription description={description}/>
        </View>
    );
}


const RestaurantImage = (props) => (
    <Image source ={{ uri: props.image }} style={{width: "100%" , height: "35%"}} />
); 

const RestaurantName = (props) => (
    <Text style={{fontSize: 25, fontWeight:"600", marginHorizontal:15}}>{props.name}</Text>
); 

const RestaurantDescription = (props) => (
    <Text style={{fontSize: 15, fontWeight:"400", marginHorizontal:15}}>{props.description}</Text>
); 