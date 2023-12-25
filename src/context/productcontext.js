// create a context
// provider
// consumer ==> useContext Hook
// ekhane global store(AppProvider) create kore app.js a eta diye wrap korte hobe thn jekono jaygar theke bebohar kora jabe.
// onno component theke abr seta import kore use korte hobe.


import { createContext , useContext, useEffect} from "react";
import axios from "axios";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ( {children}) => {  // kind of redux er moto statemanagement

    const getProducts = async (url) => {
        const res = await axios.get(url);
        const products = await res.data;
        console.log(" products ", products);
        
    };
    useEffect(()=>{
        getProducts(API);
    }, []);


        return (<AppContext.Provider value="autonex">  
            {children}
        </AppContext.Provider >
        );
};

// custom hooks (2nd method)
// ei hook use korle alada kore r import kora lagbe na onno kono component theke
const useProductContext = () =>{
    return useContext(AppContext);
}

export { AppProvider, AppContext , useProductContext};
// provider diye value provide korbe, onno kono component sei value get korbe.