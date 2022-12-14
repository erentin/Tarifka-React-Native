import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create ({

    container:{
        backgroundColor:"#ea580c",
        borderRadius:15,
        width: Dimensions.get("screen").width/1.05,
        flexDirection:"row",
        marginVertical:10,
        alignItems:"center",
        padding:5,
    },
    image:{
        width:110,
        height:110,
        resizeMode:"contain",
        borderRadius:10,
    },
    title:{
        fontSize:20,
        color:"white",
        marginLeft:15,
        flex:1,
        fontWeight:"600",
    }
})