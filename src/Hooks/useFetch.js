import React,{useState,useEffect} from "react";
import axios from "axios";
import Config from "react-native-config";


function useFetch (URL) {

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)


    

    async function fetchData (){
        try {
            console.log("URL TRY",URL)
            const {data: responseData} = await axios.get(URL)
            setData(responseData)
            setLoading(false)
            
        } catch (error) {
            console.log("URL",Config.API_URL)
            console.log("ERROR",data)
            setError(true)
            return(null)
        }
    }

    
    useEffect(() => {
        fetchData()
    },[])

    return{data,loading,error}

    
    
}

export default useFetch;