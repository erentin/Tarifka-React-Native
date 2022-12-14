import React,{useState, useEffect} from "react";
import {View,Text, FlatList} from "react-native"


import axios from "axios";
import Config from "react-native-config";

import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import Styles from "./Categories.style"
import useFetch from "../../Hooks/useFetch";

import Loading from "../../Components/Loading/Loading"
import Error from "../../Components/Error/Error"


function Categories ({navigation}) {


    const {data,loading,error} = useFetch(Config.API_URL)


    function handleCategorySelect (str) {
        navigation.navigate("Meals",{str})
    }

    if(loading){return <Loading/>}

    if(error)  {return(<Error/>)}

    

    const renderCategories =  ({item}) => <CategoryCard str={item} onSelect={() => handleCategorySelect(item.strCategory)} />

    return(
        <View style={Styles.container}>
            <FlatList
                data={data.categories}
                renderItem={renderCategories}
                
            />
        </View>
    )

}

export default Categories;