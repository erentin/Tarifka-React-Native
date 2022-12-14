import React from "react";
import {View,Text,Image,Button,Linking} from "react-native"

import Styles from "./DetailsCard.style"

function DetailsCard ({detail}) {

    return(
        <View style={Styles.container}>
            <Image style={Styles.image} source={{uri: detail.strMealThumb}} />
            <Text style={Styles.text}>{detail.strMeal}</Text>
            <Text style={Styles.area}>{detail.strArea}</Text>
            <Text style={Styles.desc}>{detail.strInstructions}</Text>
            <Button title="WATCH HOW TO COOK" color={"black"} onPress={() => Linking.openURL(detail.strYoutube)}/>
        </View>
    )
}

export default DetailsCard;