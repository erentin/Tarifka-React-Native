import React from "react";
import {TouchableWithoutFeedback,SafeAreaView, View, Text, Image,FlatList} from "react-native";

import MealsCard from "../../Components/MealsCard/MealsCard";

import Styles from "./Meals.style"
import useFetch from "../../Hooks/useFetch";

import Loading from "../../Components/Loading/Loading"
import Error from "../../Components/Error/Error"

function Meals ({route,navigation}) {


    
    const {str} = route.params
    const {loading,error,data} = useFetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+str)


    if(loading){return <Loading/>}

    if(error)  {return(<Error/>)}

    const handleSelected = idMeal => {
        navigation.navigate('Details', {idMeal});
    }

    const renderMeals = ({item}) => {
        return(
            <MealsCard  meal={item} onTouch={() => handleSelected(item.idMeal)}   />
        )
    }

    return (

            <View style={Styles.mainContainer}>

                <FlatList
                    data={data.meals}
                    renderItem={renderMeals}
                />

            </View>

    )
}

export default Meals;