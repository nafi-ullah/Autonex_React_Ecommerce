// create a context
// provider
// consumer ==> useContext Hook
// ekhane global store(AppProvider) create kore app.js a eta diye wrap korte hobe thn jekono jaygar theke bebohar kora jabe.
// onno component theke abr seta import kore use korte hobe.


import { createContext , useContext} from "react";

const AppContext = createContext();

const AppProvider = ( {children}) => {  // kind of redux er moto
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