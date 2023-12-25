//Dispatch call korar por eke eke protita kaaj action re diye korabe. and type onujayi kaaj korbe.

const ProductReducer = (state, action) => {
    switch (action.type){
        case "SET_LOADING":
            return {
                ... state,
                isLoading: true
            };
         case "SET_API_DATA":
            //payload hocche product gula jegula fetch kora hoise
            const featureData = action.payload.filter((curElm)=>{
                return curElm.featured === true;
            });

            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureData,
            }

            case "API_ERROR":
            return {
                    ...state,
                    isLoading: true
            };

            case "SET_SINGLE_LOADING":
                return {
                  ...state,
                  isSingleLoading: true,
                };
          
              case "SET_SINGLE_PRODUCT":
                return {
                  ...state,
                  isSingleLoading: false,
                  singleProduct: action.payload,
                };
          
              case "SET_SINGLE_ERROR":
                return {
                  ...state,
                  isSingleLoading: false,
                  isError: true,
                };
       
        default:
            return state;

    }

    return state;
};

export default ProductReducer;