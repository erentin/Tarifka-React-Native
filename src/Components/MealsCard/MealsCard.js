import React from "react";
import {View,Text, TouchableWithoutFeedback,SafeAreaView, Image} from "react-native"

import Styles from "./MealsCard.style"

function MealsCard ({meal,onTouch}) {

    return(
            <TouchableWithoutFeedback onPress={onTouch} >
                <SafeAreaView >
                    <View style={Styles.container}>
                        <Image style={Styles.image} source={{uri: meal.strMealThumb}} />
                        <Text style={Styles.title}>{meal.strMeal}</Text>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
    )

}

export default MealsCard;