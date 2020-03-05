import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";
import {getProductsDetails} from "../../API/API";
import Buttman from "../../assets/images/196.png";
function ProductDetails() {
    const {id}=useParams()
    const [productDetails,setProductDetails] = useState({})
    const [images,setImages]= useState([])
    useEffect(()=>{
        const fetchUser = async (id)=>{
            try{
               const product=  await getProductsDetails(id)
                setProductDetails(product)
                setImages(product.images[0].url)

            }
            catch (e) {
                console.log("productDetails Error")
            }
        }
        fetchUser(id)

    },[])
    console.log(productDetails.images)



    return (
        <><h1>{images}</h1>
           <img src={images}/>
        </>
    )

}
export default ProductDetails