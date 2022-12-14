import { StyleSheet } from "react-native";

export default StyleSheet.create ({

    mainContainer:{
        alignItems:"center",
    },

    container:{
        backgroundColor:"#ea580c",
        borderRadius:15,
        width:"95%",
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
        fontWeight:"600",
    }
})