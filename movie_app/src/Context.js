import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext(); //context
//Provider
export const API_URL = "https://omdbapi.com/?apikey=727bbdc1";
const AppProvider = ({ children }) => {


  

    const [isLoading, setisLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setisError] = useState({ show: 'false', msg: '' });
    const [querry, setQuerry] = useState('Batman');

    const getMovies = async (url) => {


        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

            if (data.Response === "True") {
                setMovie(data.Search);
                setisLoading(false);

            }
            else {
                setisError({
                    show: true,
                    msg: data.Error,
                })
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        let timerOut = setTimeout(() => {
            getMovies(`${API_URL}&s=${querry}`);
        }, 1000);
        return () => clearTimeout(timerOut);

    }, [querry]);

    return <AppContext.Provider value={{ movie, isError, isLoading, setQuerry }}>{children}</AppContext.Provider>
}

const useGlobalcontext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalcontext };