import { getCartProductFromLS } from "./getCartProducts";

export const updateCartProductTotal=()=>{
    let cartProducts=getCartProductFromLS();
    
    
    let productSubTotal=document.querySelector(".productSubTotal");
    let productFinalTotal=document.querySelector(".productFinalTotal");

    console.log(cartProducts);
    
    const totalCartValue=cartProducts.reduce((acc,curElem)=>{
        let productPrice=parseInt(curElem.price)||0;
        return acc + productPrice;
    },0);
    
    console.log("Harsh "+totalCartValue);


    productSubTotal.innerText=`₹${totalCartValue}`;
    productFinalTotal.innerText=`₹${totalCartValue+50}`;
};