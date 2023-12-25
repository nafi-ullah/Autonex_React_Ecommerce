import React from 'react'
import { useProductContext } from '../context/productcontext';



const FeatureProducts = () => {

    const { isLoading, featureProducts } = useProductContext();
    console.log("my feature data", featureProducts);


  return (
    <div>FeatureProducts</div>
  )
}

export default FeatureProducts;