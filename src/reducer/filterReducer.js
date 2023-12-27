const filterReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        return {
          ...state,
          filter_products: [...action.payload],
          //... means original data use na kore oitar je copy seta use krtese
          all_products: [...action.payload],
        };
  
      case "SET_GRID_VIEW":
        return {
          ...state,
          grid_view: true,
        };
        case "SET_LIST_VIEW":
        return {
          ...state,
          grid_view: false,
        };
  
      default:
        return state;
    }
  };
  
  export default filterReducer;