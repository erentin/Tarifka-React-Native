import React from "react";
import {View,Text, FlatList} from "react-native";
import useFetch from "../../Hooks/useFetch";

import Meals from "../Meals/Meals";

import Styles from "./Details.style"

import DetailsCard from "../../Components/DetailsCard/DetailsCard";

import Loading from "../../Components/Loading/Loading"
import Error from "../../Components/Error/Error"

function Details ({route}) {

    const {idMeal} = route.params;
    console.log("mealid:",idMeal)

    const {loading,error,data} = useFetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+idMeal)

    const renderDetail = ({item}) => {

        return(

            <DetailsCard detail={item} />
        )
    }

    if(loading){return <Loading/>}

    if(error)  {return(<Error/>)}

    return(
        <View style={Styles.container}>
            <FlatList
                data={data.meals}
                renderItem={renderDetail}
            />
        </View>
    )

}

export default Details;