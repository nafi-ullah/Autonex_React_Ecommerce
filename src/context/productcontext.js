// create a context
// provider
// consumer ==> useContext Hook
// ekhane global store(AppProvider) create kore app.js a eta diye wrap korte hobe thn jekono jaygar theke bebohar kora jabe.
// onno component theke abr seta import kore use korte hobe.


import { createContext , useContext, useEffect, useReducer} from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState ={
    isLoading: false,
    isError: false,
    products: [],
    featureProducts:[],
};


const AppProvider = ( {children}) => {  // kind of redux er moto statemanagement

    //loading, error, data => 3ta initial state a data lagbe.
    //userReducerhook 2ta element return kore arrayr
    //goal hocche agy sob global store a sob data fetch kore thn ek ek component a fetch krbo
    // intialstate er moddhe jei data ase, seta eshe porbe state a; kisu korte hole dispatch re bolte hobe
    // dispatch prodcutReducer er action re bolbe kaaj ta korte. 
    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING"});
        try{
        const res = await axios.get(url);
        const products = await res.data;
        // product jegula pabo, segula reducer hook er maddhome store korbo,
        //console.log(" products ", products);
        dispatch({type:"SET_API_DATA", payload: products}); // payload hocche dispatch je kaaj kortese seta korar jonno ki ki data lagbe
        }catch(error){
            dispatch({ type: "API_ERROR" });
        }
    };
    useEffect(()=>{
        getProducts(API);
    }, []);

            //usereducer er sob data ekhane eshe porbe.
        return (<AppContext.Provider value={{...state}}>  
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