import React from "react";
import {TouchableWithoutFeedback,SafeAreaView, View, Text, Image} from "react-native";

import Styles from "./CategoryCard.style"

function CategoryCard ({str, onSelect}) {


    return (

            <TouchableWithoutFeedback  onPress={onSelect}>
                <SafeAreaView style={Styles.mainContainer}>
                    <View style={Styles.container}>
                        <Image style={Styles.image} source={{uri: str.strCategoryThumb}} />
                        <Text style={Styles.title}>{str.strCategory}</Text>
                        <Text></Text>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>

    )
}

export default CategoryCard;