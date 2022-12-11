import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext(); //context
//Provider
const AppProvider = ({ children }) => {
    // const API_URL = "https://omdbapi.com/?apikey=727bbdc1&s=titanic";

    // const[isLoading,setisLoading]=useState(true);
    // const[movie,setMovie]=useState([]);
    // const[isError, setisError]=useState({show: "false", msg:""});
    
    // const getMovies=async(url)=>{
    //     try{
    //         const res= await fetch(url);
    //         const data = await res.json();
    //         console.log(data);

            

    //         if(data.Reponse==='true'){ Mistake on true
    //             setisLoading(false);
    //             setMovie(data.Search);
    //         }
    //         else{
    //             setisError({
    //                 show: true,
    //                 msg:data.error,
    //             })
    //         }
    //     }catch(error){
    //         console.log(error);
    //     }

    // }
    // useEffect(()=>{
    //     getMovies(API_URL);
    // },[]);

    const API_URL='https://omdbapi.com/?apikey=727bbdc1&s=titanic';

    const[isLoading,setisLoading]=useState(true);
    const[movie,setMovie]=useState([]);
    const[isError,setisError ]=useState({show:'false', msg:''});

    const getMovies= async(url)=>{
        

        try{
            const res= await fetch(url);
        const data=await res.json();
        console.log(data);

        if(data.Response==="True"){
            setMovie(data.Search);
            setisLoading(false);

        }
        else{
            setisError({
                show: true,
                msg: data.error,
            })
        }

        }catch(error){
            console.log(error)
        }
    } 

    useEffect(()=>{
        getMovies(API_URL);
    },[]);

    return <AppContext.Provider value={{movie,isError,isLoading}}>{children}</AppContext.Provider>
}

const useGlobalcontext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalcontext };